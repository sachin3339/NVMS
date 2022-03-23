import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns,jobColumns,vendorColumns, candidatesColumns ,jobRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from 'axios'

const  CandidateDataTable = () => {
  const [data, setData] = useState();
//   const [candidatedata, setCandiateDate] = useState();
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
    authAxios.get(`http://localhost:5000/candidate/all`)
    .then((res)=>{
      const candidateData = res.data.post;
    //   let userArray = [];
    //   for(let i=0;i<vendorData.length;i++){
            //console.log(vendorData[i].User);
            // userArray.push(vendorData[i].User);
    // }
      //const vendorDataUser = vendorData.User[0]
      setData(candidateData)
    //   setUser( userArray);
      console.log("candidate component" );
      console.log(candidateData);
      
      
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
        <Link to="/candidate/newcandidate" className="link">
          Add New Candidate
        </Link>
       
        </div>
        
      <div className="datatableTitle">
     
      Candidate List
      </div>
      <DataGrid
       getRowId={(row) => row._id}
        className="datagrid"
        rows={data}
        columns={ candidatesColumns.concat(actionColumn)}
        pageSize={12}
        rowsPerPageOptions={[12]}
        checkboxSelection
      />
    
    </div>
  );
};

export default CandidateDataTable;
