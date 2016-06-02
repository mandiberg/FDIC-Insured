#!/usr/bin/env ruby

require "./compile_banks"

resizer = FDIC::Resizer.new("/Users/blerchin/Dropbox/FDIC\ Insured/logo\ archive/final\ ai\ files/2010_09_17_FCCB.ai.pdf", "First Commerce Community Bank")
resizer.to_png_thumb
resizer.to_ai
