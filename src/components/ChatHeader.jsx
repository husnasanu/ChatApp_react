import React from 'react'

const ChatHeader = ({name}) => {
  return (
    <div className='w-100 bg-success p-2 d-flex' style={{minHeight:"30px"}}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1200px-User_icon_2.svg.png" width={"40px"} height={"40px"} alt="" />
        <h2 className='text-white ms-3'>{name}</h2>
    </div>
  )
}

export default ChatHeader