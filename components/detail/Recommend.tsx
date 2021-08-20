import React from 'react'
import { Card } from 'antd';
const { Meta } = Card;
import { LikeFilled } from '@ant-design/icons';
import Router from 'next/router'

const Recommend = (props: any) => {
  const recommend = [{id:1,cover:'',article_title:'',create_time:''}]
  const go = (id: any) => {
    Router.push('/detail?id=' + id, `/detail/${id}`)
  }
  const b = () => {
    Router.back()
  }
  return (
    <div className = 'recommend-div'>
      <h2 onClick={() => b()}><LikeFilled /> 相关推荐</h2>
      <div className="recommend-list">
        {
          recommend.map((k, i) => (
            <Card
              key={i}
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={k.cover} />}
              onClick={() => {go(k.id)}}
            >
              <Meta title={k.article_title} description={k.create_time} />
            </Card>
          ))
        }
      </div>
    </div>)
}
export default Recommend
