import React from 'react'
import { Descriptions } from 'antd'
import { Container } from '@styles/stylesJs/timeLine'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { GithubOutlined, TwitterOutlined } from '@ant-design/icons'
import hljs from 'highlight.js'
import config from '../config/markdown.conf'
import marked from 'marked'
import MyHead from '@components/MyHead'
hljs.configure(config.hljs)
marked.setOptions({
  highlight: (code: any) => hljs.highlightAuto(code).value,
  ...config.options
})
const About = () => (
  <>
      <MyHead/>
    <Container image={`../../home2.jpg`}>
      <div className="top">
        <p>杜跃飞</p>
      </div>
      <div className = 'about-div'>
        <Descriptions title="关于我自己" layout="vertical" column={2}>
          <Descriptions.Item label="Name">杜跃飞</Descriptions.Item>
          <Descriptions.Item label="email">824037006@qq.com</Descriptions.Item>
          <Descriptions.Item label="Hometown">北京 - 海淀 </Descriptions.Item>
          <Descriptions.Item label="Other Contacts" span={2}>
            <a href="https://github.com/impfans" target="_blank" title='SpectreAlan'><GithubOutlined /></a>
            <a href="https://twitter.com/yuefeidu2021" target="_blank" title='SpectreAlan'><TwitterOutlined/></a>
          </Descriptions.Item>
          <Descriptions.Item label="Summary" span={2}>
            近些年一直从事web前端开发工作，熟悉前端主要技术栈，平时喜欢做一些全栈开发方面的事情
          </Descriptions.Item>
          <Descriptions.Item label="Skills - 前端" span={2}>
            技术栈：react全家桶、Next、webpack<br/>
            UI框架：Antd-design、tea等<br/>
          </Descriptions.Item>
          <Descriptions.Item label="Skills - 后端" span={2}>
            主要技术栈：java、Node、Mysql、mongo<br/>
            框架：nest、spring全家桶、express
          </Descriptions.Item>
        </Descriptions>,
      </div>
    </Container>
  </>
)
export default About
