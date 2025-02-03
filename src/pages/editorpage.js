import React, { useState } from 'react';
import Client from '../components/Client';
import Editor from '../components/editor';

const Editorpage = () => {
  const [clients,setClients]=useState([
    { socketId: 1, username: 'hari-0909'},
    { socketId: 2, username: 'angelina'},
    { socketId: 3, username: 'brad pitt'},
  ]);
  return (
    <div className="mainWrap">
      <div className="aside">
        <div className="asideInner">
          <div className="logo">
            <img
              className="logoImage"
              src="\logocc.png"
              alt="logo"
            />
          </div>
          <h3>Members online</h3>
          <div className="clientsList">
            {clients.map((client)=>(
                <Client
                  key={client.socketId}
                  username={client.username}/>
              ))}
          </div>
        </div>
        <button className="btn copyBtn">Copy ROOM ID</button>
        <button className="btn leaveBtn">Leave ROOM</button>
      </div>
      <div className="editorWrap">
        <Editor />
      </div>
    </div>
  );
};

export default Editorpage;
