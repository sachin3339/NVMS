import "./list.scss"
import Sidebar from "../../components/sidebar/SideBar"
import Navbar from "../../components/navbar/NavBar"

import JobDataTable from "../../components/datatable/JobDataTable"

const JobList = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <JobDataTable/>
      </div>
    </div>
  )
}

export default JobList