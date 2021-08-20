import React, { useState } from "react";
import { Container } from "@styles/stylesJs/timeLine";
import ImagePreview from "../components/ImagePreview";
import { BackTop } from "antd";
import MyHead from "@components/MyHead";
const info = {
    article_title: "AlanGrady的个人相册",
    article_des:
        "AlanGrady的个人博客，一个有内涵的web前端，专注vue/react/nodejs/flutter,批量压缩，打包下载，压缩质量设置",
    keywords:
        "AlanGrady,web前端,nginx,linux,nodejs,vue,react,flutter,react-hooks",
};
const Gallery = (props: any) => {
    const [modal, setModal] = useState({});
    const [show, setShow] = useState(false);
    const list = [{title:''}]
    const o: any = {};
    list.map((i: any) =>{
        o[i.title]
            ? o[i.title].push(i)
            : ((o[i.title] = []), o[i.title].push(i))
    }

    );
    const gallery = Array.from(Object.keys(o));
    const openModal = (data: any) => {
        setShow(true);
        setModal(data);
    };
    const closeModal = () => {
        setShow(false);
        setModal({});
    };
    return (
        <>
            <MyHead/>
            <Container image={''}>
                <div className="top">
                    <p></p>
                </div>
                <div className = 'gallery-div'>
                    {gallery.map((k, i) => (
                        <div key={i}>
                            <h3>{k}</h3>
                            <div className="gallery-list">
                                {o[k].map((item: any, j:any) => (
                                    <div className="item" key={j + i}>
                                        <img
                                            src={item.url}
                                            alt={item.desc}
                                            onClick={() => openModal(item)}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
            {show && <ImagePreview modal={modal} closeModal={closeModal} />}
            <BackTop />
        </>
    );
};
export default Gallery;
