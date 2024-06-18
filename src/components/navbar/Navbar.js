import React, { useContext } from 'react';
import './Navbar.scss';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import Peter from "../../assets/peter.png";

import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext';
import { AuthContext } from '../../context/authContext';



export default function Navbar() {

    const {toggle, darkMode} = useContext(DarkModeContext);
    const {currentUser} = useContext(AuthContext);


  return (
    <div className='navbar'>
        <div className='left'>
            <Link to = "/" style ={{textDecoration:"none"}}>
            <span>facebook clone</span>
            </Link>
            <HomeOutlinedIcon/>
            {darkMode ? <WbSunnyOutlinedIcon onClick = {toggle}/> : 
            < DarkModeOutlinedIcon onClick={toggle}/> }
            <GridViewOutlinedIcon/>
            <div className="search">
                <SearchOutlinedIcon/>
                <input className="search-input" type = "text" placeholder="Search..."/>
            </div>
        </div>
        <div className='right'>
            <PersonOutlineOutlinedIcon/>
            <EmailOutlinedIcon/>
            <NotificationsOutlinedIcon/>
            <div className='user'>
                <img src = {Peter} alt=""/>
                <span>{currentUser.name}</span>
            </div>

        </div>
      
    </div>
  )
}
