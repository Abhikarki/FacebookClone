import React from 'react'
import Peter from "../../assets/peter.png";
import './RightBar.scss';

export default function RightBar() {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions</span>
          <div className="user">
            <div className="userInfo">
              <img src= {Peter} alt = ""/>
              <span>John Doe</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src= {Peter} alt = ""/>
              <span>John Doe</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>

        </div>

        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img src= {Peter} alt = ""/>
              <p>
                <span>John Doe</span> changed their cover picture
              </p>
            </div>
           <span>1 min ago</span>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src= {Peter} alt = ""/>
              <p>
                <span>John Doe</span> changed their cover picture
              </p>
            </div>
           <span>1 min ago</span>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src= {Peter} alt = ""/>
              <p>
                <span>John Doe</span> changed their cover picture
              </p>
            </div>
           <span>1 min ago</span>
          </div>

        </div>


        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img src= {Peter} alt = ""/>
              <div className="online"/>
                <span>John Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src= {Peter} alt = ""/>
              <div className="online"/>
                <span>John Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src= {Peter} alt = ""/>
              <div className="online"/>
                <span>John Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src= {Peter} alt = ""/>
              <div className="online"/>
                <span>John Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src= {Peter} alt = ""/>
              <div className="online"/>
                <span>John Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src= {Peter} alt = ""/>
              <div className="online"/>
                <span>John Doe</span>
            </div>
          </div>
        </div>




      </div>
    </div>
  )
}
