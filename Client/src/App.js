
import Home from "./pages/home/Home";

import List from "./pages/list/List";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import {userInputs , vendorInputs, RequirementInputs} from './formSource'

import JobList from "./pages/list/JobList";
import Login from "./pages/signIn/SignIn";
// import JobForm from "./pages/forms/jobform/JobForm";
import SubAdmin from "./pages/forms/subadmin/SubAdmin";
import Vendor from "./pages/forms/vendor/Vendor";
import New from "./pages/new/New"
import {useState} from 'react'
function App() {
 
  const [jobForm ,setJobForm]= useState({1:'' , 2:'', 3:'' , 4: '' , 5: '', 6:'', 7:'',8:'',9:''})
  const [formone ,setFormone]= useState({})

  const jobFormSubmit = (e) =>{
    e.preventDefault()
      console.log(jobForm)
    let jobFormData ={
      Details: jobForm[1],
      Skills: jobForm[2],
      Client: jobForm[4],
      Location: jobForm[5],
      EOY: jobForm[6],
      Expiry_date: jobForm[8],
      email: jobForm[4],
    }

    console.log(jobFormData)
      setTimeout(function() {setJobForm({1:'' , 2:'', 3:'' , 4: '' , 5: '', 6:'', 7:'',8:'',9:''})}, 2000)
  }

  return (
    <div className= "app">
      <BrowserRouter>
        <Routes>

    

        
          <Route path="/">
            <Route index element={<Login />} />
            <Route path="home" element={<Home />} />
            <Route path="users">
              <Route index element={<List />} />
            
              <Route
                path="newvendor"
                element={<Vendor inputs={vendorInputs} title="Add New Vendor" />}
              />
              <Route
                path="newsubadmin"
                element={<SubAdmin inputs={userInputs} title="Add New Sub-Admin" />}
              />
            </Route>
            <Route path="job">
              <Route index element={<JobList />} />
             
              <Route
                path="newrequirement"
                element={<New inputs={RequirementInputs} title="Add New Job Requrement"
                form={jobForm}  setForm={(obj) => setJobForm(obj)}
                 func={(e) => jobFormSubmit(e)} />}
              />
            </Route>
          </Route>
    
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

