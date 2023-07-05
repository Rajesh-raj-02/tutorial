const {writeFile, readFile,}=require('fs')
console.log(`Starting task`)

readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const first=result;
    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        const second=result;
        writeFile('./content/result-async.txt',`Here is the result:${first}${second}`,(err,result)=>{
            if(err){
                console.log(err)
                return
            }else{
                console.log(`Done with the task`)
            }
        })

    })

})
console.log(`Starting the next the task`)