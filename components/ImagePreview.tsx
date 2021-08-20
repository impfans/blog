import React, { useEffect, useState } from 'react'
import { CloseOutlined, MessageOutlined, PushpinFilled } from '@ant-design/icons';

const ImagePreview = (props: any) => {
  const { title = '123', des ='123123', url='123123' } = props.modal
  const { closeModal } = props
  const [show, setShow] = useState(true)
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])
  return (
    <div className = 'imagePreview-div'>
      {
        title ? (
          show
            ? <div className="imagePreview-title">
              <h3><PushpinFilled /><span>{title}</span></h3>
              <p>{des}</p>
              <CloseOutlined onClick={() => {setShow(false)}}/>
            </div>
            : <MessageOutlined onClick={() => {setShow(true)}} />) : ''
      }
      <CloseOutlined onClick={() => {closeModal()}}/>
      <img className="imagePreview-in" src={url} alt={title}/>
    </div>
  )
}

export default ImagePreview
