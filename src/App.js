import "./App.css";
import TextInput from "./TextInput";
import { useState } from "react";
import Message from "./Message";
import NamePicker from "./NamePicker";
import Camera from 'react-snap-pic'
import {useDB, db} from './db';

//full chatter app component
function App() {

  const messages = useDB();
  const [showCamera, setShowCamera] = useState(false)

  let [username, setUsername] = useState("");

  let takePicture = (img) => {
    console.log(img)
    setShowCamera(false)
  }

  //function that runs when the send button is pressed
  function sendMessage(text) {
    if (!text.trim()) return;
    const newMessage = {
      text: text,
      time: Date.now(),
      user: username,
    };
    db.send(newMessage);
  }
  
  //logs all messages in console
  console.log(messages);

  //what actually shows up on website, the html returned
  return (
    <div className="App">
      <header className="header">
        <div className="logo" />
        <span className="title">CHATTER!!!</span>
         {/* username picker */}
        <div className="username"><NamePicker setUsername={setUsername} /></div>
      </header>
      <div className="messages">
        {messages.map((msg, i) => {
         //loops over all the messages and logs em
         return <Message {...msg} key={i} fromMe={msg.user === username} />;
        })}
      </div>
      {/* send message prop = func */}
      <TextInput sendMessage={sendMessage}
      showCamera= {()=>setShowCamera(true)}/>
      {showCamera && <Camera takePicture={takePicture}/>}
    </div>
  );
}

export default App;