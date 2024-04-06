import './SidebarOption.css';


const SidebarOption = (props) => {
  return (
    <div className='sidebar-option'>
        <props.icon/>
      <p>{props.title}</p>
    </div>
  )
}

export default SidebarOption
