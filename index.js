#!/usr/bin/env node

console.log = function () { } // play.jsが出力する不要なconsole.logを非表示に変更

require('play').sound('./alarm.mp3')
