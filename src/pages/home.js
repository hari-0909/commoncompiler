import React,{ useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import toast from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'
const Home = () => {
    const navigate = useNavigate();
    const [roomId, setRoomId] = useState('');
    const [userName, setUserName] = useState('');
    const createNewRoom = (e) => {
        e.preventDefault();
        const id=uuidv4();
        setRoomId(id);
        toast.success('New room created successfully');
        toast('Share the room id with your friends to invite them',{icon:'🚀'});
    };
    const joinRoom =()=>{
        if(!roomId || !userName){
            toast.error('roomid, userid dono enter krna loudu');
            return;
        }
        navigate(`/editor/${roomId}`,{state:{userName:userName}});
    };
    const handleInputEnter =(e)=>{
        if(e.code=="Enter"){
            joinRoom();
        }
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
                    onChange={(e)=>setRoomId(e.target.value)}
                    value={roomId}
                    onKeyUp={handleInputEnter}
                />
                <input
                    type="text"
                    className="inputBox"
                    onChange={(e)=>setUserName(e.target.value)}
                    value={userName}
                    onKeyUp={handleInputEnter}
                />
                <button className="joinBtn" onClick={ joinRoom }>Join</button>
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

export default Home;