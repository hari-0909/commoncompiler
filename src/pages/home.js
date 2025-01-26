import React from 'react'
import { v4 as uuidv4 } from 'uuid'
const home = () => {
    const createNewRoom = (e) => {
        e.preventDefault();
        const id=uuidv4();
        console.log(id);
    }
  return(
    <div className="homePagewrapper">
        <div className="formwrapper">
            <img className="homePagelogo" src="\logocc.png"alt="commoncompiler-logo" />
            <h4 className="mainLabel">Paste the invitation ROOM ID</h4>
            <div className="inputGroup">
                <input 
                    type="text"
                    className="inputBox"
                    placeholder="Enter Room ID"
                />
                <input
                    type="text"
                    className="inputBox"
                    value="USERNAME"
                />
                <button className="joinBtn">Join</button>
                <span className="createInfo">
                    if you dont have an invite then create &nbsp;
                    <a onClick={createNewRoom} href="" className="createNewBtn">
                        new room
                    </a>
                </span>
            </div>
        </div>
        <footer className="footer">
            <h4>Built with 💗 by &nbsp;<a href="https://github.com/hari-0909"> hari-0909</a></h4>
        </footer>
    </div>
  );
};

export default home
