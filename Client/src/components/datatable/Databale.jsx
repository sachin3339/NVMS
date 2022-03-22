import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows ,vendorColumns} from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState , useEffect} from "react";
import axios from 'axios'
import VendorDataTable from "./VendorDataTable";

export  const Datatable = () => {
  const [data, setData] = useState();
  

  
   //store acces token
   const accesToken = localStorage.getItem('token');
   const apiUrl= 'http://localhost:5000'
 
   const authAxios = axios.create({
     baseURL : apiUrl,
     headers:{
       Authorization: `Bearer ${accesToken}`
     }
   })
   const handleDelete = (_id) => {
    setData(data.filter((item) => item._id !== _id));
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
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  //gett all job requirement data
useEffect(() => {
  // let isMounted = true;
  authAxios.get(`http://localhost:5000/superadmin/showadmins`)
  .then((res)=>{
    // if (isMounted) {
    const adminData = res.data.post
    setData(adminData)
    console.log("admin component" )
    console.log(adminData)
    
    // return () => { isMounted = false };

  })
  .catch((err)=>{
    console.log(err)
  })
  
}, [])


function CheckforRole(props) {
  if (localStorage.getItem('role')==='Super Admin') {
    return(<>
      <div className="datatable">
        <div className="datatableTitle">
        <Link to="/users/newsubadmin" className="link">
          Add New Sub-Admin
        </Link>
        <Link to="/users/newvendor" className="link">
        Add New Vendor 
        </Link>
        </div>
        
      <div className="datatableTitle">
     
      Sub-Admin List
      </div>
      <DataGrid
        getRowId={(row) => row._id}
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
   
      <VendorDataTable/>
    </div>
    
    </>)
   
  
  }  else
  if(localStorage.getItem('role')==='Admin'){

  //hello
  return(<>
    <div className="datatable">
        <div className="datatableTitle">
       
        <Link to="/users/newvendor" className="link">
        Add New Vendor 
        </Link>
        </div>
         <VendorDataTable/>
    </div>
  </>)
}




  
};

return (
  <>
  <CheckforRole/>
  </>

)

}
