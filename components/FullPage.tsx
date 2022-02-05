import React, { useState } from 'react'
import { Content } from '@styles/stylesJs/fullPage'
import { DoubleLeftOutlined } from '@ant-design/icons'

const FullPage = (props: any) => {
  const { fullPage } = props

  return (
    <Content day = {0} bg={fullPage}>

      <a href="#article-list" ><DoubleLeftOutlined/></a>
    </Content>
  )
}

export default FullPage
