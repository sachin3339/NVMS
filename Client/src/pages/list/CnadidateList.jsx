import "./list.scss"
import Sidebar from "../../components/sidebar/SideBar"
import Navbar from "../../components/navbar/NavBar"

import JobDataTable from "../../components/datatable/JobDataTable"
import CandidateDataTable from "../../components/datatable/CandidateDataTable"

const CandidateList = () => {

 
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <CandidateDataTable />
      </div>
    </div>
  )
}

export default CandidateList