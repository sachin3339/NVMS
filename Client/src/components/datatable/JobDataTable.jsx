import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { jobColumns  } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from 'axios'

const JobDataTable = () => {
  const [data, setData] = useState();

   //store acces token
   const accesToken = localStorage.getItem('token');
   const apiUrl= 'http://localhost:5000'
   console.log(accesToken ,"job component")
 
   const authAxios = axios.create({
     baseURL : apiUrl,
     headers:{
       Authorization: `Bearer ${accesToken}`
     }
   })
 // gett all job requirement data
useEffect(() => {
  authAxios.get(`http://localhost:5000/requirement/all`)
  .then((res)=>{
    const jobData = res.data.post
    setData(jobData)
    console.log("joba component" )
    console.log(jobData)
  })
  .catch((err)=>{
    console.log(err)
  })
}, [])

 
  

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

function CheckforRole(props) {
   if (localStorage.getItem('role')==='Admin') {
    return(<>
        <div className="datatable">
        <div className="datatableTitle">
        <Link to="/job/newrequirement" className="link">
          Add New Requirement
       </Link>
        
       </div>
        
       <div className="datatableTitle">
     
       All Job Requirement List
       </div>
       <DataGrid
       getRowId={(row) => row._id}
         className="datagrid"
         rows={data}
         columns={ jobColumns.concat(actionColumn)}
         pageSize={9}
         rowsPerPageOptions={[9]}
         checkboxSelection
       />
    
     </div>
    
    </>)
   
  
   }  else
  {

  //hello
  return(<>
   <div className="datatable">
    <div className="datatableTitle">


</div>

<div className="datatableTitle">

All Job Requirement List
</div>
<DataGrid
getRowId={(row) => row._id}
className="datagrid"
rows={data}
columns={ jobColumns.concat(actionColumn)}
pageSize={9}
rowsPerPageOptions={[9]}
checkboxSelection
/>

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
