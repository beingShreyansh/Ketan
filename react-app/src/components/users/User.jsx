import React from 'react'
import "./User.css"
const User = ({src}) => {
  return (
    <div className='user-component'>
        <img src={src} alt="user" />
    </div>
  )
}

export default User