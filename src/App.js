import {useEffect, useState} from "react";
import Pusher from "pusher-js";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import Axios from './axios';
import './App.css';

const App = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    Axios.get('/messages/sync')
      .then((response) => {
        setMessages(response.data);
      });
  }, []);

  useEffect(() => {
    const pusher = new Pusher('c74bf2ed64e3825eea9e', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (data) => {
      setMessages([...messages, data]);
    });

    // cleanup func
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  return (
    <div className="app">
      <div className="app__body">
        <Sidebar/>
        <Chat messages={messages}/>
      </div>
    </div>
  );
};

export default App;
