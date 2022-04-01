import "./datatable.scss";
import { Link } from "react-router-dom";
import { useState , useEffect} from "react";
import axios from 'axios'
import VendorDataTable from "./VendorDataTable";
import DevelopmentUrl from "../../data/api";
import AdminTable from "./AdminTable ";

export  const Datatable = () => {
  const [data, setData] = useState();
  
   //store acces token
   const accesToken = localStorage.getItem('token');
   const apiUrl= DevelopmentUrl
 
   const authAxios = axios.create({
     baseURL : apiUrl,
     headers:{
       Authorization: `Bearer ${accesToken}`
     }
   })
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
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  //gett all Admin data
useEffect(() => {
  
  authAxios.get(DevelopmentUrl+`/superadmin/showadmins`)
  .then((res)=>{

    const adminData = res.data.post
    // setData(adminData)
    
let userArray = []
for(let i = 0; i< adminData.length; i++){
userArray.push(adminData[i]['User'])
delete adminData[i]['User']
adminData[i]['id']=i+1

}

let completeuserArray = []
for(let i = 0 ; i < adminData.length; i++){
  adminData[i] = {...adminData[i],...userArray[i]}

}
console.log(adminData)
 setData(adminData)

    
    console.log("admin component" )
    console.log(adminData)
    
    

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
        </div>
     <AdminTable/>
    <VendorDataTable/>
   </div>
     </>)
  }  else
  // if login is done by admin 
  if(localStorage.getItem('role')==='Admin'){
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
