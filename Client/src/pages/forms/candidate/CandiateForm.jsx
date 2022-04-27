import "./new.css";
import Sidebar from "../../../components/sidebar/SideBar";
import Navbar from "../../../components/navbar/NavBar";
import { useState } from "react";
import axios from "axios";
import DevelopmentUrl from "../../../data/api";


const CandiateForm = () => {

  const accesToken = localStorage.getItem('token');
  const id = localStorage.getItem('id')

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [notice, setNotice] = useState("");
  const [cctc, setCctc] = useState("");
  const [ectc, setEctc] = useState("");
  const [resume, setResume] = useState(null);


  //input handlers
  const nameHandler = (event) => {

    setName(event.target.value);
    console.log(name);
  };

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const noticeHandler = (event) => {
    setNotice(event.target.value);
  };

  const currentHandler = (event) => {
    setCctc(event.target.value);
  };

  const expectedHandler = (event) => {
    setEctc(event.target.value);
  };

  const resumeHandler = (event) => {
    setResume(event.target.files[0]);
    console.log(resume)
  };

  //candiate form submintionhANDLER

  const addingCandidateFormSubmit = (e) => {

    e.preventDefault()
    const formData = new FormData();
    formData.append("Name", name);
    formData.append("email", email);
    formData.append("Notice_Period", notice);
    formData.append("Current_CTC", cctc);
    formData.append("Expected_CTC", ectc);
    formData.append("CV", resume);
    // let candidateForm = {
    //   Name: name,
    //   email: email,
    //   Notice_Period: notice,
    //   Current_CTC: cctc,
    //   Expected_CTC: ectc,
    //   CV: resume
    // }

    axios.post(DevelopmentUrl + `/candidate/submit/${id}`, formData, {
      headers: {
        "Content-type": "multipart/form-data",
        "Authorization": `bearer ${accesToken}`
      }
    })

      .then((res) => {

        console.log(res)
        console.log(formData)
        if (res.status === 200) {
          console.log(formData)
        }
        alert("candidate Added Successfully")
      }

      ).catch(err => {
        console.log(err)
      })

  }



  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New Candidate </h1>
        </div>
        <div className="bottom">

          <div className="right">
            <form onSubmit={addingCandidateFormSubmit}>

              <div className="formInput">
                <label>Name</label>
                <input type="text" name = "Name" placeholder="Enter Candidate Name" onChange={nameHandler} />
              </div>
              <div className="formInput" style={{display:"flex", flexDirection:"column"}}>
                <label>Email</label>
                <input type="text" name = "email" placeholder="Enter your Email" onChange={emailHandler}
                  pattern={`^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$`}  />
                  <span className="spandiv">It should be a valid email address!</span>
              </div>
              <div className="formInput">
                <label>Notice Period</label>
                <input type="text" name = "Notice_Period" placeholder="Enter Notice Period" onChange={noticeHandler} />
              </div>
              <div className="formInput">
                <label>Current CTC</label>
                <input type="text" name = "Current_CTC" placeholder="Enter Current CTC" onChange={currentHandler} />
              </div>
              <div className="formInput">
                <label>Expected CTC</label>
                <input type="text" name = "Expected_CTC" placeholder="Enter Expected CTC" onChange={expectedHandler} />
              </div>
              <div className="formInput">
                <label>Resume</label>
                <input type="file" name="CV" placeholder="Enter your Resume" onChange={resumeHandler} />
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandiateForm;