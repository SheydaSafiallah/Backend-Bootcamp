const fs = require('fs')
const textIn = fs.readFileSync('/home/shey/Desktop/Backend Bootcamp/1-node-farm/txt/input.txt', 'utf-8')
console.log(textIn)

const textOut = `This is what we know about Avocado: ${textIn}.\n Create on ${Date.now()}`;
fs.writeFileSync('/home/shey/Desktop/Backend Bootcamp/1-node-farm/txt/output.txt', textOut)

