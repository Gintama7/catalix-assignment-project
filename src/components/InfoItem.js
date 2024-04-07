import './Analytics.css';

const InfoItem = (props) => {
  return (
    <div className='info-item'>
      <h4>{props.title}</h4>
      <p>{props.first}</p>
      <p>{props.second}</p>
      <p>{props.third}</p>
    </div>
  )
}

export default InfoItem
