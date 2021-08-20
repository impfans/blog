import React, { useState } from "react";
import { Row, Col } from "antd";
import { InboxOutlined, ScheduleOutlined } from "@ant-design/icons";
import Link from "next/link";
import { IArticle } from "interface";
import moment from 'moment';
const ArticleList = (props: any) => {
    console.log("articleList--->", props);
    const [data] = useState<Array<IArticle>>(props.data.list);
    return (
        <div className="article-list-div">
            {data.map((item, index) => (
                <div key={index}>
                    <Row className="article-list-item">
                        <Col
                            lg={8}
                            md={8}
                            sm={0}
                            xs={0}
                            className="article-list-left"
                        >
                            <img src={item.img} alt={item.title} />
                        </Col>
                        <Col
                            lg={16}
                            md={16}
                            sm={24}
                            xs={24}
                            className="article-list-right"
                        >
                            <Link
                                href={"/detail/[detail]"}
                                as={`/detail/${item.id}`}
                            >
                                <h2>{item.title}</h2>
                            </Link>
                            <p>
                                <ScheduleOutlined /> {moment(item.created_at).format('YYYY-MM-DD HH:mm')} |{" "}
                                <InboxOutlined /> <span>{item.category.name}</span>
                            </p>
                            <div>{item.desc}</div>
                        </Col>
                    </Row>
                </div>
            ))}
        </div>
    );
};
export default ArticleList;
