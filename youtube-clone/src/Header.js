import React, { useState } from 'react'
import './Header.css';
import MenuIcon from '@mui/icons-material/MenuSharp';
import SearchIcon from '@mui/icons-material/SearchSharp';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
// import AppsIcon from '@mui/icons-material/Apps';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Avatar from '@mui/material/Avatar';
import { Link} from "react-router-dom";


function Header () {

    const [inputSearch, setInputSearch] = useState ("") ;

  return (
    <div className='Header'>
      
    <div className="header__left">
       <MenuIcon />
       <Link to="/">
       <img className='header__logo'
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/YouTube_Premium_logo.svg/2560px-YouTube_Premium_logo.svg.png" 
         alt="" 
         />
       </Link>
        
      

       </div>
            <div className="header__input">
            <input onChange={(e) => setInputSearch(e.target.value)} 
            value = {inputSearch}
             placeholder="Search"
              type ="text" 
               />
               <Link to={`/search/${inputSearch}`}>
               <SearchIcon className="header__inputButton"/>
               </Link>
 
            </div>

            <div className="header__icons">
            <VideoCallOutlinedIcon className='header__icon'/>
            {/* <AppsIcon className='header__icon'/> */}
            <NotificationsNoneIcon className='header__icon'/>
            <Avatar alt="ben" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQopD9wiTeuZo6cUkE-Gog01wl2ouykhXDCCV6j7UoNE9J8KVEfuHPoWUX_FuyQ0ipcKTM&usqp=CAU" />
            
            </div>
            

    </div>
  )
}

export default Header 
