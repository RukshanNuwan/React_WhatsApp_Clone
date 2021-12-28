import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {Avatar, IconButton} from "@mui/material";
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__header_left">
          <Avatar
            src={'https://i2.wp.com/www.cssscript.com/wp-content/uploads/2020/12/Customizable-SVG-Avatar-Generator-In-JavaScript-Avataaars.js.png?fit=438%2C408&ssl=1'}/>
        </div>

        <div className="sidebar__header_right">
          <IconButton>
            <DonutLargeIcon/>
          </IconButton>
          <IconButton>
            <ChatIcon/>
          </IconButton>
          <IconButton>
            <MoreVertIcon/>
          </IconButton>
        </div>
      </div>

      <div className="sidebar__search">
        <div className="sidebar__search_container">
          <SearchOutlinedIcon/>
          <input type="text" placeholder={'Search or start new chat'}/>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
