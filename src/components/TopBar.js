import { CiBellOn, CiSearch } from 'react-icons/ci';
import './TopBar.css';
import { BsChatDots } from 'react-icons/bs';
import { IoSettingsOutline } from 'react-icons/io5';

const TopBar = (props) => {
  return (
    <div className="topbar">
      <div className={props.page === "home" ? "search-bar-home" : "search-bar-stats"}>
        <CiSearch size={30} style={{marginLeft:"0.5rem", marginRight:"0.5rem"}}/>
        <input type="text" placeholder='Search by profile,setting,artifact etc'/>
      </div>
    { props.page === "home" ? "": <div className="group-icon">
        <div className="icon">
          <CiBellOn size={20} />
        </div>
        <div className="icon">
          <BsChatDots size={20} />
        </div>
        <div className="icon">
          <IoSettingsOutline size={20} />
        </div>
      </div>}
    </div>
  );
}

export default TopBar
