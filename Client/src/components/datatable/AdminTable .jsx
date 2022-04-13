import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'

import Pagination from '../pagination/Pagination'
import DevelopmentUrl from '../../data/api';
// import Pagination from '../pagination/Pagination';


const AdminTable = () => {


  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  //store acces token
  const accesToken = localStorage.getItem('token');



  useEffect(() => {
    axios.get(DevelopmentUrl + "/superadmin/showadmins", {
      headers: {
        "Authorization": `bearer ${accesToken}`
      }
    })
      .then((res) => {
        setData(res.data.post)
        //console.log(res.data.post)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  //delete the vendor by id 
  //  const deleteHandler = (id) =>{
  //   //  e.preventDefault()
  //    console.log(id)
  //   // authAxios.delete(`http://localhost:5000/superadmin/deletevendor/${id}`)
  //   // .then((res)=>{
  //   //   console.log(res.message)
  //   // })
  //   // .catch(err =>{
  //   //   console.log(err.message)
  //   // })
  // // console.log(id)
  // } 


  // get current posts  for pagination
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage

  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost)

  // Change page
  // const paginate = pageNumber => setCurrentPage(pageNumber);


  return (
    <>

      <div className="datatableTitle" style={{ marginTop: "20px" }}>
        Sub Admin List
      </div>
      <div className="tablestyle" style={{ height: "400px", overflow: "auto" }}>


        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">EMP ID</th>
              <th scope='col'>Username</th>
              <th scope="col">Email</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>

            {currentPosts.map((item, index) => {
              return (
                <tr>

                  <th scope="row">{index + 1}</th>
                  <td key={index}>
                    {item.EMP_ID}
                  </td>

                  <td>
                    {item.User.username}
                  </td>
                  <td >
                    {item.User.email}
                  </td>
                  <td >
                    {item.User.mobile}
                  </td>
                  <td>
                    <div className="cellAction">

                      <button style={{ width: "100px", height: "42px", borderRadius: "10px" }}>
                        <Link to="/users/editsubadmin" 
                          state={{from: [item.Reporting_Manager, item.EMP_ID]}}
                        >
                          Edit
                        </Link>
                      </button>

                      <button style={{ width: "100px", height: "42px", borderRadius: "10px", backgroundColor: "#e14c4ce8" }}>
                        Delete
                      </button>
                    </div>
                    {/* <button className='' onClick={deleteHandler(item._id)}>Delete</button> */}
                  </td>
                </tr>)
            })}
          </tbody>

        </table>

      </div >
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

export default AdminTable