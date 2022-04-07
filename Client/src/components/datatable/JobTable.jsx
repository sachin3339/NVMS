import React, { useEffect, useState } from 'react'

import axios from 'axios';
import { Link } from 'react-router-dom'

import Pagination from '../pagination/Pagination'
import DevelopmentUrl from '../../data/api';
import './Table.css'


const JobTable = () => {
  const role = localStorage.getItem('role')

  const [data , setData] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [postsPerPage] = useState(100);

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
    authAxios.get(DevelopmentUrl +"/requirement/all")
    .then((res)=>{
    setData( res.data.post)
      console.log( res.data.post)
    })
.catch((err)=>{
  console.log(err)
})
},[])

//delete the vendor by id 
//  const deleteHandler = (id) =>{
  //  e.preventDefault()
  //  console.log(id)
  // authAxios.delete(`http://localhost:5000/superadmin/deletevendor/${id}`)
  // .then((res)=>{
  //   console.log(res.message)
  // })
  // .catch(err =>{
  //   console.log(err.message)
  // })
// console.log(id)
// } 


// get current posts  for pagination
// const indexOfLastPost = currentPage * postsPerPage
// const indexOfFirstPost = indexOfLastPost - postsPerPage

// const currentPosts = data.slice(indexOfFirstPost , indexOfLastPost)

// Change page
// const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <>
    <div className="datatableTitle">
     Job requirement List
     </div>
    <div className="tablestyle" style={{height:"400px", overflow:"auto"}}>


    <table className="table table-hover">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Job</th>
        <th scope='col'>Skills</th>
        <th scope="col">Client</th>
        <th scope="col">EOY</th>
        {/* <th scope='col'>Expiry Date</th> */}
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
     
          {data.map((item, index)=>{
            return (
              <tr>
        
              <th scope="row">{index+1}</th>
              <td key={index}>
               {item.Details}
            </td>
                    <td >
                      {item.Skills}
                    </td>
                    <td >
                      {item.Client}
                    </td>     
                    <td>
                        {item.EOY}
                    </td>
                    {/* <td>
                        {item.Expiry_date}
                    </td> */}
            <td>
          {
            (role === 'Vendor' ?  
            <>
             <div className="cellAction">
            <Link to="/job/description" style={{ textDecoration: "none" }}
              state={{ from: [item._id,item.Details, item.Skills, item.Client, item.EOY, item.Expiry_date]}}
            >
             <div className="viewButton" style={{backgroundColor:"teal", color:"white" , padding:"5px"}}>Add Candidate</div>
            </Link>
            {/* <div
              className="deleteButton"
              // onClick={()=> deleteHandler(item._id)}
            >
               Delete
            </div> */}
           </div>
            </>: 
            <>
             <div className="cellAction">
            
            <Link to="/job/editrequirement"
              state={{ from: [item._id,item.Details, item.Skills, item.Client, item.EOY, item.Expiry_date]}}
            >
              
                <button style={{ width: "100px", height: "42px", borderRadius: "10px"}}>Edit</button>
                
                
                
            </Link>
            <button style={{ width: "100px", height: "42px", borderRadius: "10px", backgroundColor: "#e14c4ce8" }}>
Delete
</button>
          
           </div>
            </>
           
           
           )
          }
              {/* <button className='' onClick={deleteHandler(item._id)}>Delete</button> */}
            </td>
               </tr>  )
           })}  
    </tbody>
  
  </table>
  
    </div>
    <div className="paginateDiv"> 
    {/* <Pagination
        postsPerPage={postsPerPage}
        totalPosts={data.length}
        paginate={paginate}
      /> */}
    </div>
  </>
  )
}

export default JobTable