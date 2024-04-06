import './SidebarOption.css';


const SidebarOption = (props) => {
  return (
    <div className='sidebar-option'>
        <props.icon/>
      <h4>{props.title}</h4>
    </div>
  )
}

export default SidebarOption
