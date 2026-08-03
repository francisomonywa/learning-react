import { useState } from 'react'
import { ChatbotInput } from './components/ChatInput.jsx'
import  ChatMessages  from './components/ChatMessages.jsx'

import './App.css'

   
    

   
function App() {
  const [chatMessages , setChatMessages] =  useState( 
        [/*{
        message: "hello chatbot",
        sender: "user",
        id: "id1"
      },{
        message: "hello how can I help you?",
        sender: "robot",
        id: "id2"
      },{
        message: "Can you get me today's date?",
        sender: "user",
        id: "id3"
      },{
        message: "Sure, today's date is August 2.",
        sender: "robot",
        id: "id4"
      }*/]
      );
    //const chatMessages = array[0];
    //const [chatMessages , setChatMessages] = array;
   // const setChatMessages = array[1];
      return (
        <div className="app-container">
          
          <ChatMessages 
            chatMessages={chatMessages}
          />

          <ChatbotInput 
            chatMessages={chatMessages}
            setChatMessages={setChatMessages}
          /> 
        </div>
      );
    
}

export default App
