import React from 'react'
import './style.scss'

const Content = (props) => {
  return (
    <div className='contents'>{props.children}</div>
  )
}

export default Content