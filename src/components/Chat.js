import './Chat.css';
import {Avatar, IconButton} from "@mui/material";
import {AttachFile, InsertEmoticon, Mic, MoreVert, SearchOutlined, SendOutlined} from "@mui/icons-material";

const Chat = () => {
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
        <p className="chat__message">
          <span className="chat__name">Rukshan</span>
          this is a message
          <span className="chat__timestamp">
            {new Date().toUTCString()}
          </span>
        </p>

        <p className="chat__message chat__receiver">
          <span className="chat__name">Rukshan</span>
          this is a message
          <span className="chat__timestamp">
            {new Date().toUTCString()}
          </span>
        </p>

        <p className="chat__message">
          <span className="chat__name">Rukshan</span>
          this is a message
          <span className="chat__timestamp">
            {new Date().toUTCString()}
          </span>
        </p>
      </div>

      <div className="chat__footer">
        <InsertEmoticon/>

        <form>
          <input
            type="text"
            // value={}
            // onChange={}
            placeholder="Type a message"
          />

          <IconButton className='chat__send_icon'>
            <SendOutlined/>
          </IconButton>
        </form>

        <Mic/>
      </div>
    </div>
  );
};

export default Chat;
