
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
  const accesToken = localStorage.getItem('token');
  const apiUrl= 'http://localhost:5000'

  const authAxios = axios.create({
    baseURL : apiUrl,
    headers:{
      Authorization: `Bearer ${accesToken}`
    }
  })
  console.log(accesToken)

 
  const [jobForm ,setJobForm]= useState({1:'' , 2:'',  4: '' , 5: '', 6:'', 7:'',8:'',9:''})
  const [formData, setFormData]=useState(0)
 
  const [subAdminForm ,setSubAdminForm]= useState({1:'' , 2:'', 3:'' , 4: '' , 5: '',6:''})
  const [vendorForm, setvendorForm ]= useState({1:'' , 2:'', 3:'' , 4: '' , 5: '', 6:'', 7:'',8:'',9:'',10:''})

  
//job form data handler and submi
  const jobFormSubmit = (e) =>{
    
    e.preventDefault()
      console.log(jobForm)
    let jobFormData ={
      Details: jobForm[1],
      Skills: jobForm[2],
      Client: jobForm[3],
      Location: jobForm[4],
      EOY: jobForm[5],
      Expiry_date: jobForm[8],
      email: '',
    }

    authAxios.post(`http://localhost:5000/requirement/create`,jobFormData)
    .then((res)=>{
      setFormData(res.status)
     console.log(res)
     if(res.status===200){
        
      console.log(jobFormData)
      setTimeout(function() {setJobForm({1:'' , 2:'', 4: '' , 5: '', 6:'', 7:'',8:'',9:''})}, 2000)

         // <Redirect to='/home'/>
        //  navigate("/home");     
    }
    }
 
    ).catch(err =>{
        console.log(err)
    })

   }
   //sub admin  form data handler and submi
   const subAdminFormSubmit = (e) =>{
    
    e.preventDefault()
      console.log(subAdminForm)
    let subadminFormData ={
      username: subAdminForm[1],
      email: subAdminForm[2],
      role: subAdminForm[3],
      password:subAdminForm[6],
     
    }

    authAxios.post('http://localhost:5000/superadmin/onboardadmin',subadminFormData)
    .then((res)=>{
      setFormData(res.status)
     console.log(res)
     if(res.status===200){
        
      console.log(subadminFormData)
      setTimeout(function() {setSubAdminForm({1:'' , 2:'', 3:'' , 4: '' , 5: '',6:''})}, 2000)

         // <Redirect to='/home'/>
        //  navigate("/home");     
    }
    }
 
    ).catch(err =>{
        console.log(err)
    })

   }
   // vendor formdata
   const vendorFormSubmit = (e) =>{
    
    e.preventDefault()
      console.log(vendorForm)
    let vendorFormData ={
      POC: vendorForm[5],
      User: {
        username:vendorForm[6],
        email:vendorForm[7],
        role:vendorForm[8],
        mobile:vendorForm[9],
        password:vendorForm[10]
      } ,
      GST: vendorForm[2],
      PAN: vendorForm[3],
      CNAME: vendorForm[1],
      Aadhar:vendorForm[4],

    }

    authAxios.post(`${apiUrl}/superadmin/onboarvendor`,vendorFormData)

    .then((res)=>{
      setFormData(res.status)
     console.log(res)
     if(res.status===200){
      console.log(vendorFormData)
      setTimeout(function() {setvendorForm({1:'' , 2:'', 3:'' , 4: '', 5: '', 6:'', 7:'',8:'',9:'',10:''})}, 2000)  
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
                element={<New inputs={vendorInputs} title="Add New Vendor"
                form={vendorForm} setForm={(vendorFormData) => setvendorForm(vendorFormData)} 
                func={(e) => vendorFormSubmit(e)} />}
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

