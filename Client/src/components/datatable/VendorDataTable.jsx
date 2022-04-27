import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Pagination from '../pagination/Pagination'
import './Table.css'
import DevelopmentUrl from '../../data/api'


const VendorDataTable = () => {

  const [data , setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);
  const role = localStorage.getItem('role')
  
  
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

  //getting ALL vwndor data to table
  useEffect(()=>{
    authAxios.get(DevelopmentUrl + `/superadmin/showvendors`)
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

//pagination part
// get current posts  for pagination
const indexOfLastPost = currentPage * postsPerPage
const indexOfFirstPost = indexOfLastPost - postsPerPage
const currentPosts = data.slice(indexOfFirstPost , indexOfLastPost)

// Change page
const paginate = pageNumber => setCurrentPage(pageNumber);
//end of pagination part 
  return (
    <>
    <div className="tablecontainer">
    <div className="datatableTitle">
     
     Vendor List
     </div>
    <div className="tablestyle table-responsive " style={{height:"400px", overflow:"auto"}}>


    <table className="table  table-hover ">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">POC</th>
        <th scope="col">Company</th>
        <th scope="col" >Status</th>
        <th scope="col">Email</th>
        <th scope="col">Mobile</th>
        <th scope="col">GST</th>
        <th scope="col">PAN</th>
        <th scope="col">Aadhar</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
     
          {data.map((item, index)=>{
            let status= item.IsApproved;
            return (
              <tr>
        
              <th scope="row">{index+1}</th>
              <td key={index}>
               {item.POC}
            </td>
            <td>
              {item.CName}
            </td>  
                    <td style={{color:(status === true)?"RGB(50,64,168)":"RGB(168,50,56)"}} >
                      {(status === true)?"Approved":"Disapproved"}
                    </td>
                    
                    <td >
                      {item.User.email}
                    </td>
                    <td >
                      {item.User.mobile}
                    </td>
            <td >
               {item.GST}
            </td>
            <td >
               {item.PAN}
            </td>
            <td>
               {item.Aadhar}
            </td>
            <td>
            <div className="cellAction">
            {
              (role === 'Admin') ? 
              <>
              <Link to="/vendor/viewdocument" style={{ textDecoration: "none" }}
             state={{ from: [item._id, item.AUDIT_SHEET, 
              item.COI,
              item.DSC,item.ESIC_CAL,
              item.ESIC_CHALLAN,
              item.ESTABLISHMENT_CA,
              item.FORM_5A,
              item.GST_CERT,
              item.LWF, 
              item.PF_CAL, 
              item.PF_CHALLAN, 
              item.PT_RC ]      
            }}
            >
                    <button style={{ width: "100px", height: "42px", borderRadius: "10px" }}>
View
</button>
            </Link>
              </>
              : null
            }
                   <button style={{ width: "100px", height: "42px", borderRadius: "10px", backgroundColor: "#e14c4ce8" }}>
Delete
</button>
           </div>
              
              {/* <button className='' onClick={deleteHandler(item._id)}>Delete</button> */}
            </td>
               </tr>  )
           })}  
    </tbody>
  
  </table>
  
    </div>
    {/* calling pagination component from pagination component   */}
    <div className="paginateDiv"> 
    {/* <Pagination
        postsPerPage={postsPerPage}
        totalPosts={data.length}
        paginate={paginate}
      /> */}
    </div>
      </div>
  </>
  )
}

export default VendorDataTable