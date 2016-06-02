####FDIC PARSER####

This script accepts a CSV file with bank and image info, and outputs a
chunked JSON file for use by the website.

CSV fields:

|Bank Name|City |State|Cert |Acquired By|Closed|Updated|Path to SVG|
| ------- | --- | --- | --- | --------- | ---- | ----- | --------- |


Usage:

`./fdic.rb path_to.csv`
