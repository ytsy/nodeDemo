const http  = require("http");

http.createServer((req,res)=>{
    const {url} = req;
    if('/' === url){
        res.end(`this is new page`)
    }
})
.listen(3000,()=>{

})
// 1、强缓存  experis=xxxxms, Cache-Control:max-age
// 2、协商缓存  Cache-Control:no-cache     2.1、last-Modified & if-modified-since(时间由后端定)   2.2、etag & if-none-match 文件MD5修改返回304