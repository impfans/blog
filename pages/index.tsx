import ArticleList from "@components/ArticleList";
import Aside from "@components/Aside";
import FullPage from "@components/FullPage";
import MyHead from "@components/MyHead";
import { Col, Row } from "antd";
import { models } from "api";
import React from "react";
const Home = (props: any) => {
    const { indexBlogRet, allCategoryRet, newIndexBlog } = props;
    console.log(props);
    return (
        <div>
            <MyHead />
            <FullPage
                fullPage="image-base-url/blog/cover/10.jpg"
                poem="人因为有难忘的记忆而变得坚强，这就是所谓的成长吧。"
            />
            <div className="index-div" id="article-list">
                <Row className="index-container">
                    <Col lg={17} md={17} sm={24} xs={24}>
                        <ArticleList data={indexBlogRet.data} />
                    </Col>
                    <Col lg={6} md={6} sm={0} xs={0} offset={1}>
                        <Aside
                            category={allCategoryRet.data}
                            newBlog={newIndexBlog.data}
                            articleCount = {indexBlogRet.data.count}
                        />
                    </Col>
                </Row>
            </div>
        </div>
    );
};
Home.getInitialProps = async () => {
    const indexBlogRet = await models.GetIndexBlogReq();
    const allCategoryRet = await models.GetAllCategory();
    const newIndexBlog = await models.GetNewIndexBlog();
    return {
        indexBlogRet,
        allCategoryRet,
        newIndexBlog,
    };
};
export default Home;
