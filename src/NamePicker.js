import { useState } from "react";
import "./NamePicker.css";
import { RiUserLine } from "react-icons/ri";


function NamePicker(props) {
    const [name, setName] = useState("");

    const [showInput, setShowInput] = useState(false);

    function send() {
        props.setUsername(name);
        setShowInput(false);
      }
      
    if (showInput) {
        return(
        <div className="name-picker">
            <input
            className="username-input"
            onChange={(e) => setName(e.target.value)}
            value={name}
            />
            <button class="go" onClick={send}>
                    Ok!
            </button>
        </div>
    );
    }

    return (
        <div className="name-picker">
          <span className="user">{name || "Set Username:"}</span>
          <RiUserLine className="icon" onClick={() => setShowInput(true)} />
        </div>
      );
}

export default NamePicker