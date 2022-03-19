
import Home from "./pages/home/Home";

import List from "./pages/list/List";

import { BrowserRouter, Routes, Route ,useNavigate} from "react-router-dom";

import {userInputs , vendorInputs, RequirementInputs} from './formSource'

import JobList from "./pages/list/JobList";
import Login from "./pages/signIn/SignIn";
// import JobForm from "./pages/forms/jobform/JobForm";
import SubAdmin from "./pages/forms/subadmin/SubAdmin";
import Vendor from "./pages/forms/vendor/Vendor";
import New from "./pages/new/New"
import {useState} from 'react'
import axios from 'axios' 

function App() {
 
  const [jobForm ,setJobForm]= useState({1:'' , 2:'', 3:'' , 4: '' , 5: '', 6:'', 7:'',8:'',9:''})
  const [formData, setFormData]=useState(0)
 
  const [subAdminForm ,setSubAdminForm]= useState({1:'' , 2:'', 3:'' , 4: '' , 5: ''})


  // let navigate = useNavigate();

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

    axios.post('http://localhost:5000/requirement/create',jobFormData)
    .then((res)=>{
      setFormData(res.status)
     console.log(res)
     if(res.status===200){
        
      console.log(jobFormData)
      setTimeout(function() {setJobForm({1:'' , 2:'', 3:'' , 4: '' , 5: '', 6:'', 7:'',8:'',9:''})}, 2000)

         // <Redirect to='/home'/>
        //  navigate("/home");     
    }
    }
 
    ).catch(err =>{
        console.log(err)
    })

   }
   const subAdminFormSubmit = (e) =>{
    
    e.preventDefault()
      console.log(subAdminForm)
    let subadminFormData ={
      username: subAdminForm[1],
      email: subAdminForm[2],
      role: subAdminForm[4],
     
    }

    axios.post('http://localhost:5000/superadmin/onboardadmin',subadminFormData)
    .then((res)=>{
      setFormData(res.status)
     console.log(res)
     if(res.status===200){
        
      console.log(subadminFormData)
      setTimeout(function() {setSubAdminForm({1:'' , 2:'', 3:'' , 4: '' , 5: ''})}, 2000)

         // <Redirect to='/home'/>
        //  navigate("/home");     
    }
    }
 
    ).catch(err =>{
        console.log(err)
    })

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
                element={<New inputs={userInputs} title="Add New Sub Admin"
                form={subAdminForm}  setForm={(obj) => setSubAdminForm(obj)}
                 func={(e) => subAdminFormSubmit(e)} />}
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

