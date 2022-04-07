import "./datatable.scss";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from 'axios'
import DevelopmentUrl from "../../data/api";
import JobTable from "./JobTable";

const JobDataTable = () => {
  const [data, setData] = useState();

   //store acces token
   const accesToken = localStorage.getItem('token');
   const apiUrl= DevelopmentUrl
   console.log(accesToken ,"job component")
 
   const authAxios = axios.create({
     baseURL : apiUrl,
     headers:{
       Authorization: `Bearer ${accesToken}`
     }
   })

function CheckforRole(props) {
   if (localStorage.getItem('role')==='Admin') {
     
  
    return(<>
        <div className="datatable">
        <div className="datatableTitle">
        <Link to="/job/newrequirement" className="link">
          Add New Requirement
       </Link> 
        
       </div>
        
       
      <JobTable/>
    
     </div>
    
    </>)
   
  
   }  else
  {
    
 
      
  //hello
  return(<>
  
   <div className="datatable">
    <div className="datatableTitle">


</div>


<JobTable />

</div> 
   </>)
 }


}

  return (
       <>
       <CheckforRole/>
       </>
 
 
   );
};

 
export default JobDataTable;
