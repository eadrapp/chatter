import "./App.css";
import TextInput from "./TextInput";
import { useState } from "react";
import Message from "./Message";
import Camera from "react-snap-pic";
import NamePicker from "./NamePicker";

function App() {

  let [messages, setMessages]= useState([]);
  const [showCamera, setShowCamera] = useState(false)

  let takePicture = (img) => {
    console.log(img)
    setShowCamera(false)
  }

  function sendMessage(text) {
    const newMessage = {
      text,
      time: Date.now(),
      user: "Emma",
    };
    setMessages([newMessage, ...messages]);
  }
  console.log(messages);
  return (
    <div className="App">
      <header className="header">
        <div className="logo" />
        <span className="title">CHATTER!!!</span>
        <div className="username"><NamePicker/></div>
      </header>
      <div className="messages">
        {messages.map((msg) => {
          return <Message {...msg} />;
        })}
      </div>
      <TextInput sendMessage={text=> sendMessage(text)} 
      showCamera={()=>setShowCamera(true)}
      />
      {showCamera && <Camera takePicture={takePicture} />}
    </div>
  );
}

export default App;