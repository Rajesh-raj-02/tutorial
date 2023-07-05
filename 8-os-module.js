const os=require('os')

//info about current user

const user=os.userInfo()
console.log(user)

//system return the system uptime
console.log(`the systemup time is ${os.uptime()} second`)


//as object
const currentOs={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}
console.log(currentOs)
