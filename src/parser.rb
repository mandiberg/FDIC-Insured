require 'csv'

class FDIC
	class Parser
		HEADERS = [:name, :city, :state, :cert, :acquired_by, :closed, :updated, :svg_path]
		def initialize(csv_path)
			@csv = CSV.read(csv_path, :headers => HEADERS )
			puts @csv.inspect
		end

		def each
			@csv.each do |row|
				yield row
			end
		end
	end
end
