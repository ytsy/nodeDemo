const Service = require("egg").Service;
class listService extends Service {
    async list(page=1,size=10){
        const {serverUrl} = this.config.news;
        // const {data:idList} = await this.ctx.curl(`${serverUrl}/topstories.json`,{
        //     data:{
        //         orderBy:'"$key"',
        //         startAt:`"${size * (page-1)}"`,
        //         endAt:`"${size * page-1}"`,
        //     },
        //     dataType:'json'
        // })
        // console.log("idList",id);
        // const newsList = await Promise.all(
        //     Object.keys(idList).map(key=>{
        //         const url = `${serverUrl}/item/${idList[key]}.json`;
        //         return this.ctx.curl(url,{dataType:'json'});
        //     })
        // );
        return ['1','2','3']
        // return newsList.map(res=>res.data)
    }
}
module.exports = listService;