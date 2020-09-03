// callback
exports.timeout = function (message){
    setTimeout(()=>{
        console.log(`console.log ${message}`);
    },100)
}

exports.generator = ()=>{
    function* test(){
        yield "1";
        yield "2";
        yield "3";
    }
}

exports.promise = function(ms){
    return new Promise((resolve,reject)=>{
        resolve(ms);
    })
}

exports.asyncAwait = async ()=>{
    await Promise("wait01")
    await Promise("wait02")
    await Promise("wait03")
    await Promise("wait04")
}
// 事件监听
