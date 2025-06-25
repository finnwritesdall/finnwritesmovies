#!/bin/sh
rsync -av --delete "../../Documents/ReThink/FWM/Posts/" "./src/blog/"
bunx @11ty/eleventy --serve
