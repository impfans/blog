import ArticleList from '@components/ArticleList';
import Aside from '@components/Aside';
import FullPage from '@components/FullPage';
import MyHead from '@components/MyHead';
import { Col, Row } from 'antd';
import { models } from 'api';
import React, { useState } from 'react';
import _ from 'lodash';
const Home = (props: any) => {
  const { allCategoryRet, allArticle, cid } = props;
  const [newBlog] = useState(_.slice(allArticle.data.list || [], 0, 5));

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
            <ArticleList data={allArticle.data} cid = {cid}/>
          </Col>
          <Col lg={6} md={6} sm={0} xs={0} offset={1}>
            <Aside
              category={allCategoryRet.data}
              newBlog={newBlog}
              articleCount={allArticle.data.total}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};
Home.getInitialProps = async (props: any) => {
    console.log('props===>',props);
  const allCategoryRet = await models.GetAllCategory();
  const allArticle = await models.GetAllArticleReq(10, 1,props?.query?.cid || 0);
  return {
    allCategoryRet,
    allArticle,
    cid: props?.query?.cid
  };
};
export default Home;
