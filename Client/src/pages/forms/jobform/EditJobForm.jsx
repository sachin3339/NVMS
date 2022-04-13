import "./new.scss";
import Sidebar from "../../../components/sidebar/SideBar";
import Navbar from "../../../components/navbar/NavBar"
//import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import DevelopmentUrl from "../../../data/api";
import axios from 'axios'


const EditJobForm = () => {

  //store acces token
  const accesToken = localStorage.getItem('token');

  const [reqDetails, setReqDetails] = useState("");
  const [majorSkills, setMajorSkills] = useState("");
  //const [details, setDetails] = useState("");
  const [client, setClient] = useState("");
  const [location, setLocation] = useState("");
  const [eoy, setEoy] = useState("");
  //const [expectNumProfile, setexpectNumProfile] = useState("");
  const [experyDate, setExperyDate] = useState("");

  //input handlers

  const reqDetalsHandler = (e) => {
    setReqDetails(e.target.value)
  }
  const majorSkillsHandler = (e) => {
    setMajorSkills(e.target.value)
  }

  const clientHandler = (e) => {
    setClient(e.target.value)
  }
  const locationHandler = (e) => {
    setLocation(e.target.value)
  }
  const eoyHandler = (e) => {
    setEoy(e.target.value)
  }
  // const expectNumProfileHandler = (e) => {
  //   setexpectNumProfile(e.target.value)
  // }
  const experyDateHandler = (e) => {
    setExperyDate(e.target.value)
  }

  //job form data handler and submi
  const jobFormSubmit = (e) => {

    e.preventDefault()
    // console.log(jobForm)
    let jobFormData = {
      Details: reqDetails,
      Skills: majorSkills,
      Client: client,
      Location: location,
      EOY: eoy,
      Expiry_date: experyDate,

    }

    axios.post(DevelopmentUrl + `/requirement/create`, jobFormData, {
      headers: {
        "Content-type": "application/json",
        "Authorization": `bearer ${accesToken}`
      }
    })
      .then((res) => {

        console.log(res)

          alert("Job requiremnet updated Successfully")

        
      }

      ).catch(err => {
        alert("Something went wrong")

      })

  }


  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Update Job Requirement</h1>
        </div>
        <div className="bottom">

          <div className="right">
            <form onSubmit={jobFormSubmit}>

              <div className="formInput" >
                <label>Requirement Details</label>
                <input type='text' placeholder='Requirement Details' onChange={reqDetalsHandler} />
              </div>
              <div className="formInput" >
                <label>Major Skills</label>
                <input type='text' placeholder='Major Skills ' onChange={majorSkillsHandler} />
              </div>

              <div className="formInput" >
                <label>Client</label>
                <input type='text' placeholder='Client' onChange={clientHandler} />
              </div>
              <div className="formInput" >
                <label>Location</label>
                <input type='text' placeholder='Location' onChange={locationHandler} />
              </div>
              <div className="formInput" >
                <label>Expected Years of experience</label>
                <input type='text' placeholder='Expected Years of experience' onChange={eoyHandler} />
              </div>

              <div className="formInput" >
                <label>Expire Date</label>
                <input type='date' placeholder='Expire Date' onChange={experyDateHandler} />
              </div>
              <button type="submit">Update</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditJobForm;