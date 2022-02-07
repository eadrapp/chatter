import { useState } from "react";
import "./NamePicker.css";
import { RiUserLine } from "react-icons/ri";

function NamePicker(props) {
    const [name, setName] = useState('Set Username')

    function showInput(){
        document.getElementById('user').className = 'hidden'
        document.getElementById('username-input').className = ''
    }

    function hideInput(){
        document.getElementById('user').className = 'user'
        document.getElementById('username-input').className = 'hidden'
    }

    function send() {
        props.setUsername(name);
        setName("");
      }
      
    function onClick() {
        hideInput();
        send();
    }

    function onKeyPress(e) {
        if (e.key === "Enter") {
            hideInput();
            send();
        }
      }

    return(
        <div>
            <button id="user" class="user" onClick={showInput}>
                {name}
                <RiUserLine class="icon" />
            </button>
            <div id="username-input" className='hidden'>
                <input
                class="username-input"
                onChange={(e) => setName(e.target.value)}
                onKeyPress={onKeyPress}
                />
                <button class="go"
                onClick={onClick}>
                    Ok!
                </button>
            </div>
        </div>
    );
    }

export default NamePicker