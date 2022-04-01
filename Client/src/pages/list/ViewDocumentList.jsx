import "./list.scss"
import Sidebar from "../../components/sidebar/SideBar"
import Navbar from "../../components/navbar/NavBar"
import ViewDocument from '../../components/SubAdminApprovedDocument/ViewDocument'


const ViewDocumentList = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <ViewDocument/>
       
      </div>
    </div>
  )
}

export default ViewDocumentList