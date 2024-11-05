import React from 'react'

const CHeader = ({name}) => {
  return (
    <div className='w-100 bg-danger p-2 d-flex' style={{minHeight:"30px"}}>
        <img src="https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG-Picture.png" width={"40px"} height={"40px"} alt="" />
        <h2 className='text-white ms-3'>{name}</h2>
    </div>
  )
}

export default CHeader