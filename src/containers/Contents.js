import React from 'react';
import 'containers/Contents.scss'

const Contents = (props) => {
  return (
    <div className='contents'>{props.children}</div>
  )
}

export default Contents