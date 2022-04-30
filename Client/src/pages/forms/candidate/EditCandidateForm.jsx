import "../../forms/new.css"
import Sidebar from "../../../components/sidebar/SideBar";
import Navbar from "../../../components/navbar/NavBar";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import DevelopmentUrl from "../../../data/api";


const EditCandiateForm = () => {

    const location = useLocation();
    const { from } = location.state;

    console.log(from);  
  const accesToken = localStorage.getItem('token');
  const candiadteId = from[0];

  const [name, setName] = useState(from[1]);
  const [email, setEmail] = useState(from[2]);
  const [notice, setNotice] = useState(from[3]);
  const [cctc, setCctc] = useState(from[4]);
  const [ectc, setEctc] = useState(from[5]);
//   const [resume, setResume] = useState(null);


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

//   const resumeHandler = (event) => {
//     setResume(event.target.files[0]);
//     console.log(resume)
//   };

  //candiate form submintionhANDLER

  const addingCandidateFormSubmit = (e) => {

    e.preventDefault()
    // const formData = new FormData();
    // formData.append("Name", name);
    // formData.append("email", email);
    // formData.append("Notice_Period", notice);
    // formData.append("Current_CTC", cctc);
    // formData.append("Expected_CTC", ectc);
    // formData.append("CV", resume);
    let candidateForm = {
      Name: name,
      email: email,
      Notice_Period: notice,
      Current_CTC: cctc,
      Expected_CTC: ectc
    }

    axios.patch(DevelopmentUrl + `/candidate/update/${candiadteId}`, candidateForm, {
      headers: {
        "Content-type": "application/json",
        "Authorization": `bearer ${accesToken}`
      }
    })

      .then((res) => {

        console.log(res)
        console.log(candidateForm)
        if (res.status === 200) {
          console.log(candidateForm)
        }
        alert("candidate Updated Successfully")
      }

      ).catch(err => {
        console.log(err)
        alert("Something went wrong!")

      })

  }



  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Update Candidate </h1>
        </div>
        <div className="bottom">

          <div className="right">
            <form onSubmit={addingCandidateFormSubmit}>

            <div className="container">
            <div class="mb-3">

<div class="row justify-content-around">
  <div class=" col-sm">
  <div class="form-floating mb-3">
  <input type="text" name = "Name" value={name} onChange={nameHandler}
  class="form-control" id="floatingInput"/>
  <label for="floatingInput">Name</label>
</div>
  </div>
<div class="col-sm">
<div class="form-floating mb-3">
  <input type="text" name = "email" value={email}  onChange={emailHandler} 
   class="form-control" id="floatingInput" />
  
  <label for="floatingInput">Email</label>
</div>
 
</div>
   </div>
   </div>

   <div class="mb-3">

<div class="row justify-content-around">
  <div class=" col-sm">
  <div class="form-floating mb-3">
  <input type="text" name = "Notice_Period" value={notice}  onChange={noticeHandler}
  class="form-control" id="floatingInput"/>
  <label for="floatingInput">Notice Period</label>
</div>
  </div>
<div class="col-sm">
<div class="form-floating mb-3">
  <input type="text" name = "Current_CTC" value={cctc}  onChange={currentHandler}
   class="form-control" id="floatingInput" 
   />
  <label for="floatingInput">Current CTC</label>
</div>
 
</div>
   </div>
   </div>
   <div class="mb-3">

<div class="row justify-content-around">
  <div class=" col-sm">
  <div class="form-floating mb-3">
  <input type="text" name = "Expected_CTC" value={ectc} onChange={expectedHandler} 
  class="form-control" id="floatingInput"/>
  <label for="floatingInput">Expected CTC</label>
</div>
  </div>
<div class="col-sm">

<button type="submit" >Submit</button>
 </div>
</div>
   </div>

   
   </div>
               

              {/* <div className="formInput">
                <label>Name</label>
                <input type="text" name = "Name" value={name} onChange={nameHandler} />
              </div>
              <div className="formInput">
                <label>Email</label>
                <input type="text" name = "email" value={email}  onChange={emailHandler} />
              </div>
              <div className="formInput">
                <label>Notice Period</label>
                <input type="text" name = "Notice_Period" value={notice}  onChange={noticeHandler} />
              </div>
              <div className="formInput">
                <label>Current CTC</label>
                <input type="text" name = "Current_CTC" value={cctc}  onChange={currentHandler} />
              </div>
              <div className="formInput" style={{marginLeft:"-190px"}}>
                <label>Expected CTC</label>
                <input type="text" name = "Expected_CTC" value={ectc} onChange={expectedHandler} />
              </div> */}
              {/* <div className="formInput">
                <label>Resume</label>
                <input type="file" name="CV" placeholder="Enter your Resume" onChange={resumeHandler} />
              </div> */}
               {/* <div style={{marginTop:"20px", marginLeft:"-200px"}}>
               <button type="submit">Update</button>
              </div> */}
             
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCandiateForm;