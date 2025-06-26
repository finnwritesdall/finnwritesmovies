#!/bin/sh
rsync -av --delete "../../Documents/ReThink/FWM/Posts/" "./src/blog/"
rsync -av --delete "../../Documents/ReThink/FWM/Images/" "./src/images/"
bunx @11ty/eleventy --serve
