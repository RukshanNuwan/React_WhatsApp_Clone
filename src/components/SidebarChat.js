import './SidebarChat.css';
import {Avatar} from "@mui/material";

const SidebarChat = () => {
  return (
    <div className="sidebar_chat">
      <Avatar/>
      <div className="sidebar_chat__info">
        <h2>Name</h2>
        <p>last message</p>
      </div>
    </div>
  );
};

export default SidebarChat;
