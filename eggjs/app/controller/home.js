const Controller = require("egg").Controller;

class HomeController extends Controller {
    async index(){
        const ctx = this.ctx;
        const page = ctx.query.page || 1;
        const size = ctx.query.size || 15;
        const newsList = await ctx.service.home.list(page,size);
        ctx.body = 
            {
                key:"hello world",
                list:newsList
            }
        
    }
}
module.exports = HomeController;