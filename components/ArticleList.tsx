import React, { useEffect, useState } from 'react';
import { Row, Col, Pagination } from 'antd';
import { InboxOutlined, ScheduleOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { IArticle } from 'interface';
import moment from 'moment';
import { models } from 'api';
import { AXIOS_BASE } from 'api/apiconfig';
const ArticleList = (props: any) => {
  const [data, setData] = useState<Array<IArticle>>(props.data.list);
  const [limit, setLimit] = useState<number | undefined>(10);
  const [offset, setOffset] = useState(1);
  const [isInit, setIsInit] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    if (isInit) {
      setIsInit(false);
    } else {
      const fetchData = async () => {
        const allArticle = await models.GetAllArticleReq(limit, offset,props?.cid);
        setData(allArticle.data.list);
      };
      fetchData();
    }
  }, [offset, limit, props?.cid]);
  return (
    <>
      <div className="article-list-div">
        {data.map((item, index) => (
          <div key={index}>
            <Row className="article-list-item">
              <Col lg={8} md={8} sm={0} xs={0} className="article-list-left">
                <img src={`${AXIOS_BASE}/${item.img}`} alt={item.title} />
              </Col>
              <Col
                lg={16}
                md={16}
                sm={24}
                xs={24}
                className="article-list-right"
              >
                <Link href={'/detail/[detail]'} as={`/detail/${item.id}`}>
                  <h2>{item.title}</h2>
                </Link>
                <p>
                  <ScheduleOutlined />{' '}
                  {moment(item.createdAt).format('YYYY-MM-DD HH:mm')} |{' '}
                  <InboxOutlined /> <span>{item.name}</span>
                </p>
                <div>{item.desc}</div>
              </Col>
            </Row>
          </div>
        ))}
      </div>
      <div className="index-pagination">
        <Pagination
          showSizeChanger
          showTitle={false}
          hideOnSinglePage
          pageSizeOptions={['10', '20', '30', '40', '50']}
          total={props.data.total || 0}
          onChange={(page: number, pageSize?: number) => {
            setLimit(pageSize);
            setOffset(page);
            setCurrentPage(page);
          }}
          pageSize={limit}
          current={currentPage}
        />
      </div>
    </>
  );
};
export default ArticleList;
