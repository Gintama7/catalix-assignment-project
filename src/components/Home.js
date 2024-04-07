
import TopBar from "./TopBar";
import './Home.css';
import { CiBellOn } from "react-icons/ci";
import { BsChatDots } from "react-icons/bs";


const Home = () => {
  return (
    <div className="home">
     
      <div className="middle">
       <TopBar page="home" />
      <h2>Set-up Catalix for Success</h2>
      <p>Get Catalix up to date or start your transformation by following the guide below</p>
      </div>
      <div className="right">
        <div className="icon-group">
      <div className="icon">
          <CiBellOn size={20} />
        </div>
        <div className="icon">
          <BsChatDots size={20} />
        </div></div>
        <h2>Get ready to transform</h2>
        <p>Here's a video to get started. As your transformation progresses, you'll get fresh tips and insights here</p>
      </div>
    </div>
  );
}

export default Home
