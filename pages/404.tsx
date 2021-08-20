import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Router from 'next/router';
import { FrownOutlined } from '@ant-design/icons';

const Error = () => {
  const [time, setTime] = useState(10)
  useEffect(() => {
    const inter = setInterval(() => {
      setTime((time) => {
        if (time === 1) {
          Router.push('/')
        }
        return --time
      })
    }, 1000)
    return () => {
      clearInterval(inter)
    }
  }, [])
  return <Container>
    <div className='out'>
      <img src="https://www.jszoo.com/image-base-url/blog/common/404.gif" alt="404"/>
      <div>
        <FrownOutlined/>发生了一些意外... <b>{time}</b>秒后将 <span className='go' onClick = {()=>{Router.push('/')}}>回到首页</span>
      </div>
    </div>
  </Container>
}
export const Container = styled.div`
  width:360px;
  height: 600px;  
  padding-top: 15%;
  margin:0 auto;
  img{
    width: 100%;
  }
  div{
    line-height: 25px;
    margin-top: 20px;
    text-align: center;
    .anticon{
      font-size: 24px;
      margin-right: 10px;
    }
    .go{
      padding: 6px 12px;
      background: #1abc9c;
      cursor: pointer;
      border-radius: 6px;
      color: #fff;
    }
    b{
      color: #1abc9c;
    }
  }
`
export default Error
