import React, { useState } from 'react';
import socket from '../socket';
import CHeader from './CHeader';
import CMessage from './CMessage';



const Chat = () => {
  const [name, setName] = useState('');
  const [isNameSet, setIsNameSet] = useState(false);

  const handleSetName = () => {
    if (name) {
      setIsNameSet(true); 
    }
  };

  


  return (
    <div  >

      {
        !isNameSet ?
          <div className="d-flex flex-column justify-content-center align-items-center">
            <h1 className="fw-bolder text-danger"style={{fontFamily:"monospace"}}>CHATPOINT<i class="fa-regular fa-comments"></i></h1>
            <img src="https://cdn.dribbble.com/users/20368/screenshots/3949907/live_chat_anim_2.gif" width={'400px'} height={'250px'} alt="" />
            <input className='mt-3'
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Username"
            />
            <button className='mt-3 px-3 fw-bolder btn btn-danger' onClick={handleSetName}>Login</button>
          </div>

          :
          <div className='w-100' >
            <CHeader name={name}/>
            <CMessage name={name}/>


            
          </div>
      }
    </div>
  );
};

export default Chat;