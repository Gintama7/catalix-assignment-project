import React, { useState } from 'react'
import { BsFillBoxSeamFill } from 'react-icons/bs'
import { GoHome, GoStack } from 'react-icons/go'
import { IoChevronBackCircleOutline, IoExitOutline, IoSettingsOutline } from 'react-icons/io5';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import { IoMdStopwatch } from 'react-icons/io';
import { HiOutlineChartBarSquare } from 'react-icons/hi2';
import { RxRocket } from 'react-icons/rx';
import { FaBarsStaggered } from 'react-icons/fa6';

const Sidebar = () => {

  const [ show, setShow ] = useState(true);

  const handleHide=()=>{
    setShow(!show);
  }

  return (
    <div className='sidebar' style={{flex: !show ? 0.001 : 0.1 }}>
        <div className="back-button" >
          { show ? <IoChevronBackCircleOutline size={30} onClick={handleHide} /> : <FaBarsStaggered size={30} onClick={handleHide} />}
        </div>         
       { show ?<div className="sidebar-heading">
        <BsFillBoxSeamFill size={25}/> <h2>Catalix</h2>               
        </div> :  <BsFillBoxSeamFill size={25}  style={{marginBottom:"2rem", marginTop:"2rem", alignSelf:"center"}}/>  }
        <div className="sidebar-options">
            <SidebarOption title="Home" icon={GoHome} show={show}/>
            <SidebarOption title="Activities" icon={IoMdStopwatch} show={show}/>
            <SidebarOption title="Analytics" icon={HiOutlineChartBarSquare} show={show}/>
            <SidebarOption title="Transformation" icon={RxRocket} show={show}/>
            <SidebarOption title="Library" icon={GoStack} show={show}/>
        </div>
        <div className="sidebar-footer">
            <SidebarOption title="Settings" icon={IoSettingsOutline } show={show}/>
            <SidebarOption title="LogOut" icon={IoExitOutline }  show={show}/>
        </div>
      
    </div>
  )
}

export default Sidebar
