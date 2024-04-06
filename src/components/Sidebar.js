import React from 'react'
import { BsFillBoxSeamFill } from 'react-icons/bs'
import { GoHome, GoStack } from 'react-icons/go'
import { IoChevronBackCircleOutline } from 'react-icons/io5';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import { IoMdStopwatch } from 'react-icons/io';
import { HiOutlineChartBarSquare } from 'react-icons/hi2';
import { RxRocket } from 'react-icons/rx';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebar-heading">
        <BsFillBoxSeamFill /> <h2>Catalix</h2>
        <IoChevronBackCircleOutline />        
        </div>
        <div className="sidebar-options">
            <SidebarOption title="Home" icon={GoHome}/>
            <SidebarOption title="Activities" icon={IoMdStopwatch}/>
            <SidebarOption title="Analytics" icon={HiOutlineChartBarSquare}/>
            <SidebarOption title="Transformation" icon={RxRocket}/>
            <SidebarOption title="Library" icon={GoStack}/>
        </div>
      
    </div>
  )
}

export default Sidebar
