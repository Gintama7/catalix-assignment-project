
import { IoIosArrowDown } from 'react-icons/io';
import './Analytics.css';
import TableEntry from './TableEntry';


const StatTable = () => {

  return (
    <div className="stat-table">
      <div className="table-header">
        <p>
          PAGEVIEWS <IoIosArrowDown />
        </p>
        <div className="timeline">
          <button >Today</button>
          <button>Yesterday</button>
          <button>Week</button>
          <button style={{backgroundColor:"lightblue"}}>Month</button>
          <button>Quarter</button>
          <button>Year</button>
          <button className="period">
            Select Period <IoIosArrowDown />
          </button>
        </div>
      </div>
      <div className="table-middle">
        <div className="first-column">
          <p>Page</p>
        </div>
        <div className="sec-column">
          <p>Pageviews</p>
          <h5>356,928</h5>
          <img
            src="https://i.ibb.co/mR07ZVJ/graph1.jpg"
            alt="graph1"
            border="0"
          ></img>
        </div>
        <div className="thr-column">
          <p>Unique pageviews</p>
          <h5>275,588</h5>
          <img
            src="https://i.ibb.co/mtw2Y18/graph2.jpg"
            alt="graph2"
            border="0"
          ></img>
        </div>
        <div className="fou-column">
          <p>Average time on page</p>
          <h5>00:03:51</h5>
          <img
            src="https://i.ibb.co/vV990ht/graph3.jpg"
            alt="graph3"
            border="0"
          ></img>
        </div>
        <div className="fif-column">
          <p>Entrances</p>
          <h5>315,643</h5>
          <img
            src="https://i.ibb.co/YNvLkQG/graph4.jpg"
            alt="graph4"
            border="0"
          ></img>
        </div>
        <div className="six-column">
          <p>%Exit</p>
          <h5>39,84%</h5>
          <img
            src="https://i.ibb.co/xF6z8CN/graph5.jpg"
            alt="graph5"
            border="0"
          ></img>
        </div>
        <div className="sev-column">
          <p>Page Value</p>
          <h5>$19,983</h5>
          <img
            src="https://i.ibb.co/cDGLv2q/graph6.jpg"
            alt="graph6"
            border="0"
          ></img>
        </div>
      </div>
      <div className="table-content">
        <TableEntry
          first="Defect Arrival Rate"
          second="872,337(15.82%)"
          third="574,332 (15.33%)"
          fourth="00:05:43"
          fifth="802,873 (16.75%)"
          sixth="25.96%"
          sev="1093 (5.11)%"
        />
        <TableEntry first="ready features" second="872,337(15.82%)" third="574,332 (15.33%)"
            fourth="00:05:43" fifth="802,873 (16.75%)" sixth="25.96%" sev="1093 (5.11)%"
            />
            <TableEntry first="Fixed Rate" second="872,337(15.82%)" third="574,332 (15.33%)"
            fourth="00:05:43" fifth="802,873 (16.75%)" sixth="25.96%" sev="1093 (5.11)%"
            />
            <TableEntry first="cycle time" second="872,337(15.82%)" third="574,332 (15.33%)"
            fourth="00:05:43" fifth="802,873 (16.75%)" sixth="25.96%" sev="1093 (5.11)%"
            />
            <TableEntry first="lead time" second="872,337(15.82%)" third="574,332 (15.33%)"
            fourth="00:05:43" fifth="802,873 (16.75%)" sixth="25.96%" sev="1093 (5.11)%"
            />
            <TableEntry first="new features" second="872,337(15.82%)" third="574,332 (15.33%)"
            fourth="00:05:43" fifth="802,873 (16.75%)" sixth="25.96%" sev="1093 (5.11)%"
            />
        
      </div>
    </div>
  );
}

export default StatTable
