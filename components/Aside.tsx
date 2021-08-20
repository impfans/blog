import React from "react";
import { Avatar, Row, Col, Tooltip } from "antd";
import {
    GithubOutlined,
    MailOutlined,
    TwitterOutlined,
    BookOutlined,
    FieldTimeOutlined,
    FolderOpenOutlined,
    TagOutlined,
    SoundOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import moment from "moment";
const Aside = (props: any) => {
    const { category, newBlog, articleCount } = props;
    const recent = [{ cover: "", article_title: "", update_time: "", id: 1 }];
    const tags = [{ tag_name: "" }];
    return (
        <div style={{ paddingTop: "1rem" }}>
            <div className="aside-div">
                <div className="profile">
                    <Avatar
                        src="image-base-url/blog/common/logo.png"
                        size="large"
                        shape="circle"
                    />
                    <h2>杜跃飞</h2>
                    <p>这里是个性签名~</p>
                    <Row>
                        <Col span={8}>
                            文章{" "}
                            <a href="#article-list">
                                <p>{articleCount}</p>
                            </a>{" "}
                        </Col>
                        <Col span={8}>
                            标签{" "}
                            <a href="#tags">
                                <p>{0}</p>
                            </a>{" "}
                        </Col>
                        <Col span={8}>
                            分类{" "}
                            <a href="#category">
                                <p>{category.count}</p>
                            </a>{" "}
                        </Col>
                    </Row>
                    <div className="social">
                        <Tooltip title="impfans">
                            <a
                                href="https://github.com/impfans"
                                target="_blank"
                            >
                                <GithubOutlined />
                            </a>
                        </Tooltip>
                        <Tooltip title="824037006@qq.com">
                            <a href="824037006@qq.com" target="_blank">
                                <MailOutlined />
                            </a>
                        </Tooltip>
                        <Tooltip title="杜跃飞">
                            <a
                                href="https://twitter.com/yuefeidu2021"
                                target="_blank"
                            >
                                <TwitterOutlined />
                            </a>
                        </Tooltip>
                    </div>
                </div>
            </div>
            <div className="aside-div">
                <div className="card">
                    <h2>
                        <FieldTimeOutlined />
                        最新文章
                    </h2>
                    {newBlog.map((item: any, index: number) => (
                        <Link
                            href={"/detail/[detail]"}
                            as={`/detail/${item.id}`}
                            key={index}
                        >
                            <Row className="item" gutter={8}>
                                <Col span={8}>
                                    <img src={item.img} alt="" />
                                </Col>
                                <Col span={14}>
                                    <h4>{item.title}</h4>
                                    <i>
                                        {moment(item.created_at).format(
                                            "YYYY-MM-DD HH:mm"
                                        )}
                                    </i>
                                </Col>
                            </Row>
                        </Link>
                    ))}
                </div>
            </div>
            <div className="aside-div">
                <div className="card" id="category">
                    <h2>
                        <FolderOpenOutlined />
                        分类
                    </h2>
                    {category.list.map((item: any, index: number) => (
                        <Row className="category" key={index} gutter={8}>
                            <Col span={20}>{item.name}</Col>
                            <Col span={4}>{item.articles.length}</Col>
                        </Row>
                    ))}
                </div>
            </div>
            <div className="aside-div">
                <div className="card" id="tags">
                    <h2>
                        <TagOutlined />
                        标签
                    </h2>
                    <div className="tags">
                        {tags.map((item, index) => (
                            <span
                                key={index}
                                style={{
                                    color: `rgb(${Math.floor(
                                        Math.random() * 201
                                    )}, ${Math.floor(
                                        Math.random() * 201
                                    )}, ${Math.floor(Math.random() * 201)} )`,
                                    fontSize:
                                        Math.floor(Math.random() * 15 + 15) +
                                        "px",
                                }}
                                onClick={() => {}}
                            >
                                {item.tag_name}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Aside;
