import './Analytics.css';
import InfoItem from './InfoItem';
import TopBar from './TopBar'

const Analytics = () => {
  return (
    <div className='analytics'>
      <TopBar/>
      <div className='option-buttons'>
        <button style={{backgroundColor:"#407088", color:"white"}}>+ Create Report</button>
        <button>Share this dashboard</button>
        <button>Select Duration</button>
        <button>Compare with Duration</button>
      </div>
      <div className="img-group">
        <img src="https://i.ibb.co/q9N6xmw/first.jpg" alt="" />
        <img src="https://i.ibb.co/q73hBhn/second.jpg" alt="" />
        <img src="https://i.ibb.co/CB1p95Q/third.jpg" alt="" />
        <img src="https://i.ibb.co/SrTdB5H/fourth.jpg" alt="" />
      </div>
      <div className="info-group">
        
          <InfoItem title="On Time" first="Completed Iterations 7"
          second="Total Iterations 9"
          third="% Iterations Done 77.8%"/>
          <InfoItem title="On Scope" first="Story Points Done 3200"
          second="Total Story Points 4230"
          third="% Stories Done 70.9%"/>
           <InfoItem title="On Velocity" first="Average Velocity 428.6"
          second="Required Velocity 615.0"
          third=""/>
        
      </div>
    </div>
  )
}

export default Analytics
