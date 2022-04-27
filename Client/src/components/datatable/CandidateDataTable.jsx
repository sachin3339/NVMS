import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import Pagination from '../pagination/Pagination'
import './Table.css'
import DevelopmentUrl from '../../data/api'
const CandidateDataTable = () => {

  let obj = [];
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  //store acces token
  const accesToken = localStorage.getItem('token');
  const id = localStorage.getItem('id');
  const apiUrl = DevelopmentUrl
  console.log(accesToken, "vendor  component")

  const authAxios = axios.create({
    baseURL: apiUrl,
    headers: {
      "Authorization": `Bearer ${accesToken}`,
      "Content-Type": "application/json"
    }
  })


  useEffect(() => {
    authAxios.get(DevelopmentUrl + `/candidate/show/${id}`)
      .then((res) => {
        setData(res.data.post)
        console.log(res.data.post)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  // //delete the vendor by id 
  const deleteHandler = (id) => {

    //  console.log(id)
    // state, before delete anything
    const currentCandidate = data;
    setData(currentCandidate.filter(candidate => candidate._id !== id))
    authAxios.delete(DevelopmentUrl + `/candidate/delete/${id}`)
      .then((res) => {
        console.log(res.status);
      })
      .catch(err => {

        console.log(err.message)
        setData(currentCandidate);
      })
    //  console.log(id)
  }

  for (let i = 0; i < data.length; i++) {

    obj.push({
      "value": data[i]._id,
      "label": data[i].Name
    });
  }
  // get current posts  for pagination
  // const indexOfLastPost = currentPage * postsPerPage
  // const indexOfFirstPost = indexOfLastPost - postsPerPage

  // const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost)

  // // Change page
  // const paginate = pageNumber => setCurrentPage(pageNumber);


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
        <div className="tablestyle table-responsive " style={{height:"400px", overflow:"auto"}}>


          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope='col'>Email</th>
                <th scope="col">Notice Period</th>
                <th scope="col">Current_CTC</th>
                <th scope="col">Expected CTC</th>
                {/* <th scope="col">Registered ID</th> */}
                <th scope='col'>Action</th>
              </tr>
            </thead>
            <tbody>

              {data.map((item, index) => {
                return (
                  <tr>

                    <th scope="row">{index + 1}</th>
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
                    {/* <td>
                            {item.req_id}
                        </td> */}
                    <td>
                      <div className="cellAction">

                        <Link to="/candidate/editcandidate" 
                          state={{ from: [item._id, item.Name, item.email, item.Notice_Period, item.Current_CTC, item.Expected_CTC]}}
                        >
                          <button style={{ width: "100px", height: "42px", borderRadius: "10px" }}

                          // onClick={()=> deleteHandler(item._id)}
                          >
                            Edit
                          </button>
                        </Link>

                        <button style={{  height: "42px", borderRadius: "10px", backgroundColor: "#e14c4ce8" }}

                          onClick={() => deleteHandler(item._id)}
                        >
                          Delete
                        </button>
                      </div>
                      {/* <button className='' onClick={deleteHandler(item._id)}>Delete</button> */}
                    </td>
                  </tr>)
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
      </div>
    </>
  )
}

export default CandidateDataTable