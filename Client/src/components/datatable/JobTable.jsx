import React, { useEffect, useState } from 'react'

import axios from 'axios';
import { Link } from 'react-router-dom'

import Pagination from '../pagination/Pagination'
import DevelopmentUrl from '../../data/api';
import './Table.css'


const JobTable = () => {


  const [data , setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

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
 const deleteHandler = (id) =>{
  //  e.preventDefault()
   console.log(id)
  // authAxios.delete(`http://localhost:5000/superadmin/deletevendor/${id}`)
  // .then((res)=>{
  //   console.log(res.message)
  // })
  // .catch(err =>{
  //   console.log(err.message)
  // })
// console.log(id)
} 


// get current posts  for pagination
const indexOfLastPost = currentPage * postsPerPage
const indexOfFirstPost = indexOfLastPost - postsPerPage

const currentPosts = data.slice(indexOfFirstPost , indexOfLastPost)

// Change page
const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <>
    <div className="datatableTitle">
     Job requirement List
     </div>
    <div className="tablestyle">


    <table className="table table-hover">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Job</th>
        <th scope='col'>Skills</th>
        <th scope="col">Client</th>
        <th scope="col">EOY</th>
        <th scope='col'>Expiry Date</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
     
          {currentPosts.map((item, index)=>{
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
                    <td>
                        {item.Expiry_date}
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
  </>
  )
}

export default JobTable