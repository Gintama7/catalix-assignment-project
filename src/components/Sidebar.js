import React from 'react'
import { BsFillBoxSeamFill } from 'react-icons/bs'
import { GoHome, GoStack } from 'react-icons/go'
import { IoChevronBackCircleOutline, IoExitOutline, IoSettingsOutline } from 'react-icons/io5';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import { IoMdStopwatch } from 'react-icons/io';
import { HiOutlineChartBarSquare } from 'react-icons/hi2';
import { RxRocket } from 'react-icons/rx';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="back-button">
            <IoChevronBackCircleOutline size={30}  />
        </div>         
        <div className="sidebar-heading">
        <BsFillBoxSeamFill /> <h2>Catalix</h2>
               
        </div>
        <div className="sidebar-options">
            <SidebarOption title="Home" icon={GoHome}/>
            <SidebarOption title="Activities" icon={IoMdStopwatch}/>
            <SidebarOption title="Analytics" icon={HiOutlineChartBarSquare}/>
            <SidebarOption title="Transformation" icon={RxRocket}/>
            <SidebarOption title="Library" icon={GoStack}/>
        </div>
        <div className="sidebar-footer">
            <SidebarOption title="Settings" icon={IoSettingsOutline } />
            <SidebarOption title="LogOut" icon={IoExitOutline } />
        </div>
      
    </div>
  )
}

export default Sidebar
