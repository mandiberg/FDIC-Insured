#!/usr/bin/env ruby
require './parser'
#require './resizer'
require 'json'

class FDIC
	OUTPUT_DIR = "../media/assets"
#	OUTPUT_DIR = "/opt/mandiberg/fdic/media/assets"
#	INPUT_MEDIA_DIR = "/opt/mandiberg/fdic/logo\ archive/final\ ai\ files"
	CHUNK_SIZE = 50
	

	def self.format(source)
		raise "No input CSV provided." if source.nil?

		
		parser = FDIC::Parser.new(source)

		data = []
		i = 1
		file_c = 0
		parser.each do |row|
			if i % CHUNK_SIZE == 0
				file_c = i/CHUNK_SIZE
				write_json(data, file_c)
				data = []
			end
			unless row[:svg_path].nil?
				i += 1
				data << {
					name:					row[:name],
					city:					row[:city],
					state:				row[:state],
					cert:					row[:cert],
					acquired_by:	row[:acquired_by],
					closed:				row[:closed],
					updated:			row[:updated],
					original:			row[:svg_path]
				}
			end
		end
		write_json(data, file_c +1)
	end
	def self.write_json(data, count)
		json = JSON.dump(data)
		File.open("#{OUTPUT_DIR}/datafile_#{count}.json", "w+") do |f|
			f.write(json)
		end
	end
end

FDIC.format(ARGV[0])
