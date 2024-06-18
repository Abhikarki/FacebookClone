import "./profile.scss";
import PinterestIcon from '@mui/icons-material/Pinterest';
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PlaceIcon from '@mui/icons-material/Place';
import LanguageIcon from '@mui/icons-material/Language';
import EmailIcon from '@mui/icons-material/Email';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Post from "../../components/posts/Post";

const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img src="https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" className="cover" />
        <img src="https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" className="profilePic" />
      </div>

      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="http://facebook.com">
            <FacebookTwoToneIcon fontSize="small"/>
            </a>
            <a href="http://facebook.com">
            <PinterestIcon fontSize="small"/>
            </a>
            <a href="http://facebook.com">
            <LinkedInIcon fontSize="small"/>
            </a>
            <a href="http://facebook.com">
            <InstagramIcon fontSize="small"/>
            </a>
          
          </div>
          <div className="center">
            <span>John Doe</span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>USA</span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span>Java</span>
              </div>
              </div>
              <button>Follow</button>
          </div>
          <div className="right">
            <EmailIcon/>
            <MoreVertIcon/>
          </div>
        </div>

        <Post/>
      </div>
      
    </div>
  )
}

export default Profile
