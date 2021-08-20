import React, { useEffect, useState } from 'react'
import marked from 'marked'
import hljs from 'highlight.js'
import Top from '../../components/detail/Top'
import { DetailContent, Aside, Container } from '@styles/stylesJs/detail'
import MarkNav from "markdown-navbar";
import config from '../../config/markdown.conf'
import { CopyCode } from '../../utils'
import { BackTop } from 'antd';
import Recommend from '../../components/detail/Recommend'
import { SmileOutlined } from '@ant-design/icons'
import ImagePreview from '../../components/ImagePreview'
import 'markdown-navbar/dist/navbar.css';
import MyHead from '@components/MyHead'
import { models } from 'api'
hljs.configure(config.hljs)
marked.setOptions({
  highlight: (code: any) => hljs.highlightAuto(code).value,
  ...config.options
})

const Detail = (props: any) => {
  console.log(props)
  const [modal, setModal] = useState({})
  const [show, setShow] = useState(false)
  const { id, title, desc, created_at, img, updated_at, category, readed, cover, content } = props.data
  const recommend = [{id:1}]
  const tic = 1
  const closeModal = () => {
    setShow(false)
    setModal({})
  }
  const previewImg = (e: any) => {
    setShow(true)
    setModal({ url: e.target.getAttribute('src') })
  }
  useEffect(() => {
    CopyCode()
  }, [])
  return (<>
      <MyHead/>
    <Aside id='sidebar'>
      <h3>文章目录</h3>
      {
        tic
          ? <MarkNav
            className="article-menu"
            source={content}
            headingTopOffset={60}
            ordered = {false}
          />
          : <SmileOutlined />
      }
    </Aside>
    <DetailContent id='DetailContent'>
      <Top info={{ created_at, updated_at, title, ...category, readed, img, count: content.length / 1000 }}/>
      <Container>
        <div id="detail-content" dangerouslySetInnerHTML={{ __html: marked(content) }}/>
        {recommend.length > 1 && <Recommend recommend={recommend} id={id}/>}
      </Container>
    </DetailContent>
    {show && <ImagePreview modal={modal} closeModal={closeModal}/>}
    <BackTop/>
  </>)
}
Detail.getInitialProps = async(props: any)=>{
  const ret = models.GetArticleDetailById(props.query.detail);
  return ret
}
export default Detail
