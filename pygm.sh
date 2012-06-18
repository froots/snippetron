#!/bin/bash
/usr/local/bin/pygmentize -f rtf -O "style=friendly,fontface=Consolas" "$1" | pbcopy