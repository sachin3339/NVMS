import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns,jobColumns,vendorColumns, userRows ,jobRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from 'axios'

const VendorDataTable = () => {
  const [data, setData] = useState();
  const [user, setUser] = useState();
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
  
   useEffect(() => {
    authAxios.get(`http://localhost:5000/superadmin/showvendors`)
    .then((res)=>{
      const vendorData = res.data.post;
      let userArray = [];
      for(let i=0;i<vendorData.length;i++){
            //console.log(vendorData[i].User);
            userArray.push(vendorData[i].User);
    }
      //const vendorDataUser = vendorData.User[0]
      setData(vendorData)
      setUser( userArray);
      console.log("vendor component" );
      //console.log(vendorDat);
      
      
      //console.log("user component", vendorDataUser )
      // console.log(userdata)
    })
    .catch((err)=>{
      console.log(err)
    })
  }, [])
 
//console.log(user);

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
  return (
    <div className="datatable">
      
        
      <div className="datatableTitle">
     
      Vendor List
      </div>
      <DataGrid
      getRowId={(row) => row._id}
        className="datagrid"
        rows={data}
        columns={ vendorColumns.concat(actionColumn)}
        pageSize={12}
        rowsPerPageOptions={[12]}
        checkboxSelection
      />
    
    </div>
  );
};

export default VendorDataTable;
