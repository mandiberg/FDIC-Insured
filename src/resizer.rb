
require 'rmagick'


class FDIC
	class Resizer
		include Magick
		def initialize(path_to_ai, bank_name)
			@src_path = path_to_ai
			@bank_slug = to_slug(bank_name)
		end
		def to_slug(name)
			name.gsub(/([A-Za-z0-9]*) /, '\1_').gsub(/[^A-Za-z0-9_]/, "").downcase
		end
		def with_source
			@src = ImageList.new(@src_path) {self.density = 300 }
			yield @src.cur_image
		end
		def out_slug(format, size="")
			"#{@bank_slug}_#{size}.#{format}"
		end
		def out_path(slug)
			"#{OUTPUT_DIR}/img/#{slug}"
		end
		def to_png_thumb(size = 600)
			slug = out_slug("png", size)
			with_source do |img|
				#img.crop! CenterGravity, img.width, img.height, true
				img.trim!
				img.resize_to_fit! size, size
				img = img.extent size, size, 0, 0
				img.write out_path(slug)
			end
			slug
		end
		def to_ai
			slug = out_slug("ai", "original")
			File.open(@src_path, "r") do |src|
				File.open(out_path(slug), "w") do |dest|
					while line = src.gets
						dest.write line
					end
				end
			end
			slug
		end
	end
end

