#!/bin/sh
rsync -av --delete "$HOME/Documents/ReThink/FWM/Posts/" "./src/blog/"
rsync -av --delete "$HOME/Documents/ReThink/FWM/Images/" "./src/images"
bunx @11ty/eleventy --serve
