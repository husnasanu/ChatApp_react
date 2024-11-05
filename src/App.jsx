import { Provider } from 'react-redux';
import './App.css';
import chatStore from './redux/chatStore';
import { useEffect, useState } from 'react';
import socket from './socket';
import Chat from './components/Chat';

function App() {
  const [isGetStarted, setIsGetStarted] = useState(false);

  useEffect(() => {
    socket.connect();
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <>
      <Provider store={chatStore}>
        <div 
          className="d-flex flex-column justify-content-center align-items-center main" 
          style={{ minHeight: "100vh", background: "linear-gradient(135deg, #1f4037, #99f2c8)" }}
        >
          {isGetStarted ? (
            <div className="d-flex flex-column justify-content-center align-items-center w-100">
              <Chat />
            </div>
          ) : (
            <div 
              className="d-flex flex-column justify-content-center align-items-center p-4" 
              style={{ 
                backgroundColor: "rgba(255, 255, 255, 0.8)", 
                borderRadius: "20px", 
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)" 
              }}
            >
              <h1 
                className="fw-bolder text-danger mb-3" 
                style={{ fontFamily: "monospace", textShadow: "2px 2px #ffb3b3" }} >CHATPOINT<i class="fa-regular fa-comments"></i></h1>
              <img 
                src="https://i.pinimg.com/originals/63/fd/ff/63fdff4b7c1964f08c3c16f18f581bd7.gif" 
                alt="Chat Animation" 
                className="rounded mb-3" 
                style={{ width: "250px", border: "3px solid #fff" }}
              />
              <h3 
                className="title fw-bolder text-center mb-2" 
                style={{ color: "#333", textShadow: "1px 1px #ccc" }}  >
                Stay Connected No Matter the Distance
              </h3>
              <p style={{ color: "#666" }}>Communications that spark joy, anytime, anywhere</p>
              <button 
                onClick={() => setIsGetStarted(true)} 
                className="btn btn-dark text-warning mt-3 fw-bolder rounded-pill px-5 py-2"
                style={{ boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)" }}
              >
                Let's Start
              </button>
            </div>
          )}
        </div>
      </Provider>
    </>
  );
}

export default App;
