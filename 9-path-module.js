const path=require('path')

console.log(path.sep)

const pathfile=path.join('/content','subfolder','text.txt')

console.log(pathfile)

const base=path.basename(pathfile)
console.log(base)

const absolute=path.resolve(__dirname,'content','subfolder','text.txt')
console.log(absolute)
