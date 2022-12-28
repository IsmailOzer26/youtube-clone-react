import React from 'react'
import SidebarRow from './SidebarRow'
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import DownloadIcon from '@mui/icons-material/Download';


import './Sidebar.css'

function Sidebar() {
  return (
    <div className='sidebar'>
      
      <SidebarRow Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={WhatshotIcon} title="Trending" />
      <SidebarRow Icon={SubscriptionsIcon} title="Subscriptions"  />
    

         
      
      <hr />
      <SidebarRow Icon={VideoLibraryIcon} title="library" />
      <SidebarRow Icon={HistoryIcon} title="history" />
      <SidebarRow Icon={OndemandVideoIcon} title="your videos" />
      <SidebarRow Icon={WatchLaterIcon} title="Watch Later" />
      


      <SidebarRow Icon={ThumbUpAltOutlinedIcon} title="liked videos" />
      <SidebarRow Icon={DownloadIcon} title="Downloads" />
      <SidebarRow Icon={ExpandMoreOutlinedIcon} title="show more" />
      
      
      
   
      <hr />
    </div>
  );
}

export default Sidebar ;
