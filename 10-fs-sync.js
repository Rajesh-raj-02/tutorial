const{readFileSync,writeFileSync}=require('fs')

console.log(`Starting task`)

const first=readFileSync('./content/first.txt','utf8')
const second=readFileSync('./content/second.txt','utf8')

writeFileSync('./content/result.txt',`Here is the result:${first},${second}`,{flag:'a'})

console.log(`Done with the task`)
console.log(`Starting the next one`)