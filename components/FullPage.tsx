import React, { useState, useEffect, useRef } from 'react'
import { Content } from '@styles/stylesJs/fullPage'
import { DoubleLeftOutlined } from '@ant-design/icons'

const FullPage = (props: any) => {
  const { fullPage, poem } = props
  const [count, setCount] = useState(0)
  const InterRef: any = useRef()
  const day = new Date().getDay()
  const changeCount = () => {
    const i = count < poem.length ? count + 1 : 0
    setCount(i)
  };
  useEffect(() => {
    InterRef.current = changeCount
  })
  useEffect(() => {
    const f = () => {
      InterRef.current()
    }
    const timer = setInterval(f, 300)
    return () => {
      clearInterval(timer)
    }
  }, [])
  return (
    <Content day = {day} bg={fullPage}>
      <div className="txt">
        {poem.slice(0, count)}
        <span className={count % 2 === 0 ? 'show' : 'hide'} > |</span>
      </div>
      <a href="#article-list" ><DoubleLeftOutlined/></a>
    </Content>
  )
}

export default FullPage
