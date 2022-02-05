import React from 'react'
import { InboxOutlined, ScheduleOutlined, SyncOutlined, ProfileOutlined, ClockCircleOutlined, RiseOutlined } from '@ant-design/icons';
import styled from 'styled-components'
import moment from 'moment';
const TopBox = styled.div`
  position: relative;
  margin-bottom: 1rem;
  height: 19rem;
  background-color: #49b1f5;
  background-attachment: local;
  background-position: center;
  background-size: cover;
  background-image: url("${(props: any) => props.cover}");
  box-sizing: border-box;
  color: #fff;
  font-size: 14px;
  &:before{
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.4);
    content: '';
  }
  .out{
    top: 8rem;
    left: 8%;
    position: absolute;
    .flex{
      display: flex;
      flex-wrap: wrap;
      i{
        padding-right: 16px;
        font-style: normal;
        span{
          margin-right: 4px;
          font-size: 16px;
        }
      }
    }
    h3{
      font-size: 1.5rem;
      color: #fff;
      line-height: 1.5;
    }
  }
`
const Top = (props: any) => {
  const { title, createdAt, updatedAt, name, readed, img, count } = props.info
  console.log('top---->',props)
  return (
    <>
      <TopBox cover = {img}>
        <div className='out'>
          <h3>{title}</h3>
          <div className="flex">
            <i><ScheduleOutlined/> 发表于： {moment(createdAt).format('YYYY-MM-DD HH:mm') }</i>
            <i><SyncOutlined spin />更新于： {moment(updatedAt).format('YYYY-MM-DD HH:mm') }</i>
            <i><InboxOutlined/> 类别：{name}</i>
          </div>
          <div className="flex">
            <i><ProfileOutlined/> 字数总计:  {count.toFixed(2) + ' k'}</i>
            <i><ClockCircleOutlined />建议阅读时长: {Math.ceil(count) || 1} 分钟</i>
            <i><RiseOutlined/> 阅读量: {98}</i>
          </div>
        </div>
      </TopBox>
    </>
  )
}

export default Top
