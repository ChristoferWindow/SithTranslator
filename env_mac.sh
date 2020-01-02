#!/bin/bash
#Define project path
code_folder="~/Projects/SithTranslator"

kill -9 $(sudo lsof -t -i:8081)
kill -9 $(sudo lsof -t -i:3000)

newtabi(){
  osascript \
    -e 'tell application "iTerm2" to tell current window to set newWindow to (create tab with default profile)'\
    -e "tell application \"iTerm2\" to tell current session of newWindow to write text \"${@}\""
}

newtabi "cd ${code_folder} && nodemon"
newtabi "cd ${code_folder}/frontend && npm start"
