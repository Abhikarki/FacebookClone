import React, { useContext } from 'react';
import "./LeftBar.scss";
import Friends from "../../assets/item1.png";
import Groups from "../../assets/item2.png";
import Market from "../../assets/item3.png";
import Watch from "../../assets/item4.png";
import Memories from "../../assets/item5.png";
import Events from "../../assets/events.png";
import Gaming from "../../assets/gaming.png";
import Gallery from "../../assets/gallery.png";
import Videos from "../../assets/videos.png";
import Messages from "../../assets/messages.png";
import Learning from "../../assets/learning.png";
import Peter from "../../assets/peter.png";
import { AuthContext } from '../../context/authContext';




export default function LeftBar() {

const {currentUser} = useContext(AuthContext);

  return (
    <div className='leftBar'>
        <div className="container">
            <div className="menu">
                <div className="user">
                    <img src = {Peter} alt=""/>
                <span>{currentUser.name}</span>
                </div>
                <div className="item">
                    <img src = {Friends} alt=""/>
                <span>Friends</span>
                </div>
                <div className="item">
                    <img src = {Groups} alt=""/>
                <span>Groups</span>
                </div>
                <div className="item">
                    <img src = {Market} alt=""/>
                <span>Marketplace</span>
                </div>
                <div className="item">
                    <img src = {Watch} alt=""/>
                <span>Watch</span>
                </div>
                <div className="item">
                    <img src = {Memories} alt=""/>
                <span>Memories</span>
                </div>
            </div>
            <hr/>
            <div className="menu">
                <span>Your shortcuts</span>
                <div className="item">
                    <img src = {Events} alt=""/>
                <span>Events</span>
                </div>
                <div className="item">
                    <img src = {Gaming} alt=""/>
                <span>Gaming</span>
                </div>
                <div className="item">
                    <img src = {Gallery} alt=""/>
                <span>Gallery</span>
                </div>
                <div className="item">
                    <img src = {Videos} alt=""/>
                <span>Videos</span>
                </div>
                <div className="item">
                    <img src = {Messages} alt=""/>
                <span>Messages</span>
                </div>
            </div>
            <hr/>
            <div className="menu">
                <div className="item">
                    <img src = {Learning} alt=""/>
                <span>Learning</span>
                </div>
                
            </div>
        </div>
      
    </div>
  )
}
