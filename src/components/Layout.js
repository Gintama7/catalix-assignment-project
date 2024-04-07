import { Fragment } from "react"
import Sidebar from "./Sidebar"
import './Layout.css';


const Layout = ({children}) => {
  return (
    <Fragment>
        <Sidebar/>
        <main>{children}</main>
    </Fragment>
  )
}

export default Layout
