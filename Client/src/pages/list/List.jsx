import "./list.scss"
import Sidebar from "../../components/sidebar/SideBar"
import Navbar from "../../components/navbar/NavBar"
import {Datatable} from "../../components/datatable/Databale"


const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable/>
       
      </div>
    </div>
  )
}

export default List