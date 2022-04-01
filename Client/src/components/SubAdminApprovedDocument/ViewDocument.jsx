import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import "../SubAdminApprovedDocument/approved.css"
import { useLocation } from "react-router-dom";
import DevelopmentUrl from "../../data/api";

const ViewDocument = () => {
  const accesToken = localStorage.getItem('token');
  const location = useLocation();
  const { from } = location.state;

  const [comment, setComment] = useState('');

  const commentHandler = (event) => {

    setComment(event.target.value);
    console.log(comment);
  };


  let approved = (event) => {

    event.preventDefault();

    let formdata = {
      Comment: comment,
      IsApproved: true
    };
    alert("Vendor documents are approved" +comment);

    axios.patch(DevelopmentUrl+`/${from[0]}`, formdata, {
      headers: {
        "Content-type": "application/json",
        "Authorization": `bearer ${accesToken}`
      }
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }
  let disapproved = (event) => {

    event.preventDefault();
   
    let formdata = {
      Comment: comment,
      IsApproved: false
    };
    alert("Vendor documents are disapproved due to " +comment);

    axios.patch(DevelopmentUrl+`/superadmin/approve/${from[0]}`, formdata, {
      headers: {
        "Content-type": "application/json",
        "Authorization": `bearer ${accesToken}`
      }
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }


  return (
    <>
      <table className="table   table-hover">
        <thead>
          <tr>

            <th scope="col">Documments</th>
            <th scope="col" >View</th>


          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              AUDIT SHEET
            </td>
            <td>
              <button className='viewButton'><a href={DevelopmentUrl+`/uploads/${from[1].slice(8)}`} target="_blank">Download</a></button>
            </td>
          </tr>
          <tr>
            <td>
              COI
            </td>
            <td>
              <button className='viewButton'><a href={DevelopmentUrl+`/uploads/${from[2].slice(8)}`} target="_blank">Download</a> </button>
            </td>
          </tr>
          <tr>
            <td >
              DSC
            </td>
            <td>
              <button className='viewButton'><a href={DevelopmentUrl+`/uploads/${from[3].slice(8)}`} target="_blank">Download</a></button>

            </td>
          </tr>
          <tr>
            <td>
              ESIC CAL
            </td>
            <td>
              <button className='viewButton'><a href={DevelopmentUrl+`/uploads/${from[4].slice(8)}`} target="_blank">Download</a></button>
            </td>
          </tr>
          <tr>
            <td>
              ESIC CHALLAN
            </td>
            <td>
              <button className='viewButton'><a href={DevelopmentUrl+`/uploads/${from[5].slice(8)}`} target="_blank">Download</a></button>
            </td>
          </tr>
          <tr>
            <td>
              ESTABLISHMENT CA
            </td>
            <td>
              <button className='viewButton'><a href={DevelopmentUrl+`/uploads/${from[6].slice(8)}`} target="_blank">Download</a></button>
            </td>
          </tr>
          <tr>
            <td>
              FORM 5A
            </td>
            <td>
              <button className='viewButton'><a href={DevelopmentUrl+`/uploads/${from[7].slice(8)}`} target="_blank">Download</a></button>
            </td>
          </tr>
          <tr>
            <td>
              GST CERT
            </td>
            <td>
              <button className='viewButton'><a href={DevelopmentUrl+`/uploads/${from[8].slice(8)}`} target="_blank">Download</a></button>
            </td>
          </tr>
          <tr>
            <td>
              LWF
            </td>
            <td>
              <button className='viewButton'><a href={DevelopmentUrl+`/uploads/${from[9].slice(8)}`} target="_blank">Download</a></button>
            </td>
          </tr>
          <tr>
            <td>
              PF_CAL
            </td>
            <td>
              <button className='viewButton'><a href={DevelopmentUrl+`/uploads/${from[10].slice(8)}`} target="_blank">Download</a></button>
            </td>
          </tr>
          <tr>
            <td>
              PF_CHALLAN
            </td>
            <td>
              <button className='viewButton'><a href={DevelopmentUrl+`/uploads/${from[11].slice(8)}`} target="_blank">Download</a></button>
            </td>
          </tr>
          <tr>
            <td>
              PT RC
            </td>
            <td>
              <button className='viewButton'><a href={DevelopmentUrl+`/uploads/${from[12].slice(8)}`} target="_blank">Download</a></button>
            </td>
          </tr>
          <tr>
            <td>
              <label> Your Comment <sup style={{ color: "red" }}>*</sup></label>
              <textarea rows="4" cols="40" onChange={commentHandler}></textarea>
            </td>
            <td>

              <button className="Approvebtn" onClick={approved} >Approve</button>
              <button className="deleteButton" onClick={disapproved} >Disapprove</button>
              {/* <div className="Submitbtnn" >Submit</div> */}
            </td>




          </tr>
        </tbody>

      </table>

    </>

  )
}

export default ViewDocument