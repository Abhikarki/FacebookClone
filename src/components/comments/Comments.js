import React, { useContext } from 'react'
import "./comments.scss"
import { AuthContext } from '../../context/authContext'
import Peter from "../../assets/peter.png";

const Comments = () => {

    const {currentUser} = useContext(AuthContext);
    //Temporary
    const comments = [
        {
            id : 1,
            name: "John Doe",
            userId: 1,
            profilePicture: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        },
        {
            id : 2,
            name: "John Doe",
            userId: 2,
            profilePicture: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        },
        {
            id : 3,
            name: "John Doe",
            userId: 3,
            profilePicture: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
    ]
  return (
    <div className="comments">
        <div className="write">
            <img src = {Peter} alt =""/>
            <input type = "text" placeholder="write a comment"/>
            <button>Send</button>
        </div>
        {comments.map(comment =>(
            <div className="comment">
              <img src={comment.profilePicture} alt = ""/>
              <div className="info">
                <span>{comment.name}</span>
                <p>{comment.desc}</p>
                </div>  
                <span className="date">1 hour ago</span>
            </div>
        ))}
    </div>
  )
}

export default Comments