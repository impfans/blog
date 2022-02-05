import React from "react";
import { BackTop, Timeline } from "antd";
import { Container, Main } from "@styles/stylesJs/timeLine";
import Link from "next/link";
import MyHead from "@components/MyHead";
import { models } from "api";
import { IArticle } from "interface";
import moment from "moment";
const TimeLine = (props: any) => {
    const data: IArticle[] = props.data
    return (
        <>
            <MyHead />
            <Container image={""}>
                <div className="top">
                    <p>流年不念终将安，时光不老你还在</p>
                </div>
                <Main>
                    <Timeline mode="alternate" reverse>
                        {data.map((item, index) => (
                            <Timeline.Item label={moment(item.createdAt).format('YYYY-MM-DD HH:mm') } key={index}>
                                <Link
                                    href={"/detail/[detail]"}
                                    as={`/detail/${item.id}`}
                                >
                                    <a>
                                        <img src={item.img} alt="" />
                                        {item.title}
                                    </a>
                                </Link>
                            </Timeline.Item>
                        ))}
                    </Timeline>
                </Main>
            </Container>
            <BackTop />
        </>
    );
};
TimeLine.getInitialProps = async () => {
    const ret = await models.GetTimeLineInfo();
    return ret;
};
export default TimeLine;
