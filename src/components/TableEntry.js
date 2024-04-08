import './TableEntry.css';

const TableEntry = (props) => {
  return (
    <div className='table-entry'>
      <p className='first-entry'>/{props.first}</p>
      {/* <div className="other-entries"> */}
         <p>{props.second}</p>
      <p>{props.third}</p>
      <p>{props.fourth}</p>
      <p>{props.fifth}</p>
      <p>{props.sixth}</p>
      <p>${props.sev}</p>
      {/* </div> */}
     
    </div>
  )
}

export default TableEntry
