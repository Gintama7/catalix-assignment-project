import { CiBellOn, CiSearch } from 'react-icons/ci';
import './TopBar.css';
import { BsChatDots } from 'react-icons/bs';
import { IoSettingsOutline } from 'react-icons/io5';

const TopBar = () => {
  return (
    <div className="navbar">
      <div className="search-bar">
        <CiSearch style={{marginLeft:"0.5rem", marginRight:"0.5rem"}}/>
        <input type="text" placeholder='Search by profile,setting,artifact etc'/>
      </div>
      <div className="icon-group">
        <div className="icon">
          <CiBellOn size={20} />
        </div>
        <div className="icon">
          <BsChatDots size={20} />
        </div>
        <div className="icon">
          <IoSettingsOutline size={20} />
        </div>
      </div>
    </div>
  );
}

export default TopBar
