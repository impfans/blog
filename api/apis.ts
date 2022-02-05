import { AXIOS_BASE } from "./apiconfig";
import ModelBase from "./modelBase";

class apiModel extends ModelBase{
    GetAllArticleReq(limit?: number, offset?: number, cid?: number) {
        let url = this.commonParse(`article/findAllArticle?limit=${limit}&offset=${offset}${cid?`&cid=${cid}`:''}`)
        return this.fetchByGet(url);
    }
    GetAllCategory(){
        let url = this.commonParse(`category/findAllCategory`)
        return this.fetchByGet(url);
    }
    GetArticleDetailById(id: number){
        let url = this.commonParse(`article/findArticleDetailById/${id}`)
        return this.fetchByGet(url);
    }
    GetTimeLineInfo(){
        let url = this.commonParse(`article/timeLineInfo`)
        return this.fetchByGet(url);
    }
    commonParse(api: string) {
        return `${AXIOS_BASE}/${api}`
    }
}
export const models = new apiModel()
