// import "./datatable.scss";
// import { DataGrid } from "@mui/x-data-grid";
// import { userColumns,jobColumns,vendorColumns, candidatesColumns ,jobRows } from "../../datatablesource";
// import { Link } from "react-router-dom";
// import { useState,useEffect } from "react";
// import axios from 'axios'
// import DevelopmentUrl from "../../data/api";

// const  CandidateDataTable = () => {
//   const [data, setData] = useState();
// //   const [candidatedata, setCandiateDate] = useState();
//    //store acces token
//    const accesToken = localStorage.getItem('token');
//    const apiUrl= DevelopmentUrl
//    console.log(accesToken ,"job component")
 
//    const authAxios = axios.create({
//      baseURL : apiUrl,
//      headers:{
//        Authorization: `Bearer ${accesToken}`
//      }
//    })

   
  
//    useEffect(() => {
//     authAxios.get(DevelopmentUrl+`/candidate/all`)
//     .then((res)=>{
//       const candidateData = res.data.post
//       console.log(candidateData)
//       setData(candidateData)
//     //   let userArray = [];
//     //   for(let i=0;i<vendorData.length;i++){
//             //console.log(vendorData[i].User);
//             // userArray.push(vendorData[i].User);
//     // }
//       //const vendorDataUser = vendorData.User[0]
//     //   setData(candidateData)
//     //   setUser( userArray);
//     //   console.log("candidate component" );
//     //             let userArray = []
//     //    for(let i = 0; i< candidateData.length; i++){
//     //         userArray.push(candidateData[i]['User'])
//     //         delete candidateData[i]['User']

//     //    }
//     //    console.log(userArray)
//     //   console.log(candidateData);
      
      
//       //console.log("user component", vendorDataUser )
//       // console.log(userdata)
//     })
//     .catch((err)=>{
//       console.log(err)
//     })
//   }, [])
 
// //console.log(user);

//   const handleDelete = (id) => {
//     setData(data.filter((item) => item.id !== id));
//   };
  
//   const actionColumn = [
//     {
//       field: "action",
//       headerName: "Action",
//       width: 200,
//       renderCell: (params) => {
//         return (
//           <div className="cellAction">
//             <Link to="/users/test" style={{ textDecoration: "none" }}>
//               <div className="viewButton">View</div>
//             </Link>
//             <div
//               className="deleteButton"
//               onClick={() => handleDelete(params.row.id)}
//             >
//               Delete
//             </div>
//           </div>
//         );
//       },
//     },
//   ];
//   return (
//     <div className="datatable">
//        <div className="datatableTitle">
//         <Link to="/candidate/newcandidate" className="link">
//           Add New Candidate
//         </Link>
       
//         </div>
        
//       <div className="datatableTitle">
     
//       Candidate List
//       </div>
//       <DataGrid
//        getRowId={(row) => row._id}
//         className="datagrid"
//         rows={data}
//         columns={ candidatesColumns.concat(actionColumn)}
//         pageSize={12}
//         rowsPerPageOptions={[12]}
//         checkboxSelection
//       />
    
//     </div>
//   );
// };

// export default CandidateDataTable;



import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import Pagination from '../pagination/Pagination'
import './Table.css'
import DevelopmentUrl from '../../data/api'
const CandidateDataTable = () => {


  const [data , setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
 //store acces token
 const accesToken = localStorage.getItem('token');
 const apiUrl= DevelopmentUrl
  console.log(accesToken ,"vendor  component")

 const authAxios = axios.create({
   baseURL : apiUrl,
   headers:{
     Authorization: `Bearer ${accesToken}`
   }
 })


  useEffect(()=>{
   authAxios.get(DevelopmentUrl + "/candidate/all")
     .then((res)=>{
     setData( res.data.post)
       console.log( res.data.post)
    })
 .catch((err)=>{
   console.log(err)
 })
 },[])

// //delete the vendor by id 
 const deleteHandler = (id) =>{
//   //  e.preventDefault()
   console.log(id)
//   // authAxios.delete(`http://localhost:5000/superadmin/deletevendor/${id}`)
//   // .then((res)=>{
//   //   console.log(res.message)
//   // })
//   // .catch(err =>{
//   //   console.log(err.message)
//   // })
// // console.log(id)
} 


// get current posts  for pagination
const indexOfLastPost = currentPage * postsPerPage
const indexOfFirstPost = indexOfLastPost - postsPerPage

const currentPosts = data.slice(indexOfFirstPost , indexOfLastPost)

// Change page
const paginate = pageNumber => setCurrentPage(pageNumber);


  return (
    <>
    <div className="datatable">
    <div className="datatableTitle">
        <Link to="/candidate/newcandidate" className="link">
          Add New Candidate
        </Link>
       
         </div>
    <div className="datatableTitle">
     Candidate List
     </div>
    <div className="tablestyle">


    <table className="table table-hover">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Name</th>
        <th scope='col'>Email</th>
        <th scope="col">Notice Period</th>
        <th scope="col">Current_CTC</th>
        <th scope="col">Expected CTC</th>
        <th scope="col">Registered ID</th>
        <th scope='col'>Action</th>
      </tr>
    </thead>
    <tbody>
     
          {currentPosts.map((item, index)=>{
            return (
              <tr>
        
              <th scope="row">{index+1}</th>
              <td key={index}>
               {item.Name}
            </td>
               
               <td>
                   {item.email}
               </td>
                    <td >
                      {item.Notice_Period}
                    </td>
                    <td >
                      {item.Current_CTC}
                    </td>  
                    <td>
                        {item.Expected_CTC}
                        </td>   
                        <td>
                            {item.req_id}
                        </td>
            <td>
            <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
             <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={()=> deleteHandler(item._id)}
            >
               Delete
            </div>
           </div>
              {/* <button className='' onClick={deleteHandler(item._id)}>Delete</button> */}
            </td>
               </tr>  )
           })}  
    </tbody>
  
  </table>
  
    </div>
    <Pagination
        postsPerPage={postsPerPage}
        totalPosts={data.length}
        paginate={paginate}
      />
      </div>
  </>
  )
}

export default CandidateDataTable