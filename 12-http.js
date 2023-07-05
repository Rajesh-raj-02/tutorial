const http=require('http')
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('Welcome to our home Page')

    }if(req.url==='/about'){
        res.end('Here is our short history')
    }else{
    res.end(`
    <h1>Opps!</h1>
    <p>Cant find the page which you are looking for</p>
    <a href="/">Back homepage</a>`)
    }

})
server.listen(4000)