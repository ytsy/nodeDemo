module.exports = app=>{
    const {router,controller} = app;
    router.get('/',controller.home.index)
}


// const router = require("koa-router")
// router.get("/home",controller.home.index)