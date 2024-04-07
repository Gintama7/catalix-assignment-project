import './SidebarOption.css';


const SidebarOption = (props) => {
  return (
    <div className={props.show ? 'sidebar-option' : 'sidebar-option-hide'}>
        <props.icon size={!props.show ? 20: 20}/>
      <p>{props.title}</p>
    </div>
  )
}

export default SidebarOption
