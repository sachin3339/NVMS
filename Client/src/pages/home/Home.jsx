import Sidebar from "../../components/sidebar/SideBar";
import Navbar from '../../components/navbar/NavBar'
import "./home.scss";
import { Datatable } from "../../components/datatable/Databale";
import VendorDataTable from "../../components/datatable/VendorDataTable";
import JobDataTable from "../../components/datatable/JobDataTable";
import { DummyForadminHome } from "../../components/datatable/DummyForadminHome";


const Home = () => {
  // function checkForRoles(props){

  //   if( localStorage.getItem('role') === 'Super Admin'){
  //     return(
  //       <>
  //          <DummyForadminHome/>
  //       </>
  //     )
   

  //   }
  //   else{
  //     if( localStorage.getItem('role') === ' Admin')
  //     {
  //       return(
  //         <>
  //         <VendorDataTable/>
  //         <JobDataTable/>
  //         </>
      

  //       )
  //     }
       
  //   }

  // }
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        {/* <>
        <checkForRoles/>
        </> */}
       </div>
    </div>
  );
};

export default Home;
