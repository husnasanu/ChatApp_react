
import { Provider } from 'react-redux'
import './App.css'
import chatStore from './redux/chatStore'

import { useEffect, useState } from 'react'
import socket from './socket'
import ChatInput from './components/ChatInput'


function App() {

  const [isGetStarted, setIsGetStarted] = useState(false)

  useEffect(() => {
    socket.connect()

    return () => {
      socket.disconnect()
    }
  }, [])

  return (
    <>
      <Provider store={chatStore}>
        <div className="d-flex flex-column justify-content-center align-items-center main" style={{ minHeight: "100vh" }}>
          {
            isGetStarted ?
              <div  className="d-flex flex-column justify-content-center align-items-center ">
              <ChatInput />
                
              </div>
              :
              <div className="d-flex flex-column justify-content-center align-items-center">
              <h1 className="fw-bolder text-success" style={{fontFamily:"monospace"}}>Chit Chat</h1>
                <img src="https://cdn.dribbble.com/users/7813810/screenshots/18154021/media/782ebbf39aaca61ad1d6c2ebcb7af325.gif" alt="" />
                <h3 className="fw-bolder">Chatting made,Simple</h3>
                <p>Communicate with your friends quikly and easily</p>
                <button onClick={() => setIsGetStarted(true)} className='btn btn-success mt-2 fw-bolder rounded-5 px-4'>GET STARTED</button>
              </div>
          }
        </div>

      </Provider>
    </>
  )
}

export default App
