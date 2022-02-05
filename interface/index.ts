/**
 * 文章信息
 */
export interface IArticle {
    /**
     * 索引
     */
    id?: number;
    /**
     * 创建时间
     */
    createdAt?: string;
    /**
     * 更新时间
     */
    updatedAt?: string;
    /**
     * 删除时间
     */
    deletedAt?: string;
    /**
     * 标题
     */
    title?: string;
    /**
     * 标签id
     */
    cid?: number;
    /**
     * 简介
     */
    desc?: string;
    /**
     * 内容
     */
    content?: string;
    /**
     * 展示图
     */
    img?: string;

    creator?: string;
    /**
     * 标签
     */
     name: string;
}
/**
 * 返回结构
 */
export interface IRes {
    /**
     * 返回值
     */
    data?: [] | {} | string | number | Array<IArticle>;
    /**
     * 状态码
     */
    code?: number;
    /**
     * 日志查询标识
     */
    requestId?: string;
    /**
     * 错误信息
     */
    message?: string;
}
export interface ICategory {
    /**
     * 索引
     */
    id?: number;
    /**
     * 创建时间
     */
    created_at?: string;
    /**
     * 更新时间
     */
    updated_at?: string;
    /**
     * 删除时间
     */
    deleted_at?: string;
    /**
     * 标签名称
     */
    name?: string;
}
