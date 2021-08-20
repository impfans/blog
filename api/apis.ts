import { AXIOS_BASE } from "./apiconfig";
import ModelBase from "./modelBase";

class apiModel extends ModelBase{
    GetAllArticleReq() {
        let url = this.commonParse(`article/findAllArticle`)
        return this.fetchByGet(url);
    }
    GetIndexBlogReq() {
        let url = this.commonParse(`article/findIndexBlog`)
        return this.fetchByGet(url);
    }
    GetAllCategory(){
        let url = this.commonParse(`category/findAllCategory`)
        return this.fetchByGet(url);
    }
    GetNewIndexBlog(){
        let url = this.commonParse(`article/findNewIndexBlog`)
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
