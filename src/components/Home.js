
import TopBar from "./TopBar";
import './Home.css';
import { CiBellOn } from "react-icons/ci";
import { BsChatDots } from "react-icons/bs";
import Slider from "./Slider";
import {Container,Ratio} from 'react-bootstrap';

const Home = () => {
  return (
    <div className="home">
     
      <div className="middle">
       <TopBar page="home" />
      <h2>Set-up Catalix for Success</h2>
      <p>Get Catalix up to date or start your transformation by following the guide below</p>
      <Slider url={'https://picsum.photos/v2/list'} limit={'7'}/>
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
       <Container>
       <Ratio
        aspectRatio="16x9" 
        style={{ maxWidth: '800px' }} 
      >
        <iframe
          title="video"
          src="https://www.youtube.com/embed/mAg8UyDt_sw"
          allowFullScreen
        />
      </Ratio>
       </Container>
      </div>
      
    </div>
  );
}

export default Home
