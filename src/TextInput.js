import "./TextInput.css";
import { useState } from "react";
import { RiSendPlaneLine, RiCamera2Line } from "react-icons/ri";

function TextInput(props) {
  const [text, setText] = useState("");

  function send() {
    props.sendMessage(text);
    setText("");
  }
  function onKeyPress(e) {
    if (e.key === "Enter") {
      send();
    }
  }

  return (
    <footer className="footer">
      <button className="camera" onClick={props.showCamera}
        style={{left:10, right:'auto'}}>
        <RiCamera2Line class="icon" />
      </button>
      <input
        className="text-input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={onKeyPress}
      />
      <button className="send" onClick={send}>
        <RiSendPlaneLine class="icon" />
      </button>
    </footer>
  );
}

export default TextInput;