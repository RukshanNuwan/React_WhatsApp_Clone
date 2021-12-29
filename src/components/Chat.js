import {useState} from "react";
import {Avatar, IconButton} from "@mui/material";
import {AttachFile, InsertEmoticon, Mic, MoreVert, SearchOutlined, SendOutlined} from "@mui/icons-material";
import Axios from '../axios';
import './Chat.css';

const Chat = ({messages}) => {
  const [input, setInput] = useState('');

  console.log(input);

  const sendMessage = async (event) => {
    event.preventDefault();

    await Axios.post('/messages/new', {
      name: 'Rukshan Nuwan',
      message: input,
      timestamp: new Date().toUTCString(),
      received: true
    });

    setInput('');
  };

  return (
    <div className={'chat'}>
      <div className="chat__header">
        <Avatar/>

        <div className="chat__header_info">
          <h3>name</h3>
          <p>last seen</p>
        </div>

        <div className="chat__header_right">
          <IconButton>
            <SearchOutlined/>
          </IconButton>
          <IconButton>
            <AttachFile/>
          </IconButton>
          <IconButton>
            <MoreVert/>
          </IconButton>
        </div>
      </div>

      <div className="chat__body">
        {messages.map((message, index) => (
          <p className={`chat__message ${message.received && 'chat__receiver'}`} key={index}>
            <span className="chat__name">{message.name}</span>
            {message.message}
            <span className="chat__timestamp">
            {message.timestamp}
          </span>
          </p>
        ))}
      </div>

      <div className="chat__footer">
        <InsertEmoticon/>

        <form>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message"
          />

          <IconButton className="chat__send_icon" onClick={sendMessage}>
            <SendOutlined/>
          </IconButton>
        </form>

        <Mic/>
      </div>
    </div>
  );
};

export default Chat;
