import {useState,useEffect} from 'react'
import Home from "./pages/home/Home";

import List from "./pages/list/List";

import { BrowserRouter, Routes, Route ,useNavigate, Navigate} from "react-router-dom";

import {userInputs , vendorInputs, RequirementInputs,CandidateProfileInputs} from './formSource'

import JobList from "./pages/list/JobList";
import Login from "./pages/signIn/SignIn";
// import JobForm from "./pages/forms/jobform/JobForm";
import SubAdmin from "./pages/forms/subadmin/SubAdmin";
import Vendor from "./pages/forms/vendor/Vendor";
import New from "./pages/new/New"

import axios from 'axios' 
import CandidateList from './pages/list/CnadidateList';

function App() {
  //store acces token
  const accesToken = localStorage.getItem('token');
  const apiUrl= 'http://localhost:5000'

  const authAxios = axios.create({
    baseURL : apiUrl,
    headers:{
      Authorization: `Bearer ${accesToken}`
    }
  })
  console.log(accesToken)

//  let navigate = useNavigate(); 
  const [jobForm ,setJobForm]= useState({1:'' , 2:'',  4: '' , 5: '', 6:'', 7:'',8:'',9:''})
  const [formData, setFormData]=useState(0)
  const [adcandidateForm ,setAdCandidateForm]= useState({1:'' , 2:'', 3:'' , 4: '' , 5: '',6:''})
  const [subAdminForm ,setSubAdminForm]= useState({1:'' , 2:'', 3:'' , 4: '' , 5: '',6:'', 7:'',8:''})
  const [vendorForm, setvendorForm ]= useState({1:'' , 2:'', 3:'' , 4: '' , 5: '', 6:'', 7:'',8:'',9:'',10:''})

  const [jobListData , setJobListData]=useState([])
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
      
    }

    authAxios.post(`http://localhost:5000/requirement/create`,jobFormData)
    .then((res)=>{
      setFormData(res.status)
     console.log(res)
     if(res.status===200){
        
      console.log(jobFormData)
      setTimeout(function() {setJobForm({1:'' , 2:'', 4: '' , 5: '', 6:'', 7:'',8:'',9:''})}, 2000)

         // <Redirect to='/home'/>
        //  navigate("/job");     
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
      EMP_ID:subAdminForm[5],
      User:{
        username: subAdminForm[1],
        email: subAdminForm[2],
        role: subAdminForm[3],
        mobile:subAdminForm[8],
        password:subAdminForm[6],

      },
   
      GST:subAdminForm[7],
      Reporting_Manager:subAdminForm[4]
     
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

    authAxios.post(`http://localhost:5000/superadmin/onboarvendor`,vendorFormData)

    .then((res)=>{
      setFormData(res.status)
     console.log(res)
     if(res.status===200){
      
     
      console.log(res.status)
      console.log(vendorFormData)
      setTimeout(function() {setvendorForm({1:'' , 2:'', 3:'' , 4: '', 5: '', 6:'', 7:'',8:'',9:'',10:''})}, 2000)  
      // return <Navigate to="/home" />
     }
     
  }

  ).catch(err =>{
      console.log(err)
  })

 }

 //adding candidate 
 const addingCandidateFormSubmit = (e) =>{
    
  e.preventDefault()
  console.log(adcandidateForm)
  let candidateForm ={
   Name: adcandidateForm[1],
      email: adcandidateForm[2],
      Notice_Period: adcandidateForm[3],
      Current_CTC:adcandidateForm[4],
      Expected_CTC:adcandidateForm[5],
      CV:adcandidateForm[6]
  }

  authAxios.post(`http://localhost:5000/candidate/submit`,candidateForm)

  .then((res)=>{
    setAdCandidateForm(res.status)
   console.log(res)
   if(res.status===200){
    
   
    console.log(res.status)
    console.log(adcandidateForm)
    setTimeout(function() {setAdCandidateForm({1:'' , 2:'', 3:'' , 4: '', 5: '', 6:''})}, 2000)  
    // return <Navigate to="/home" />
   }
  }

  ).catch(err =>{
      console.log(err)
  })

 }

//gett all job requirement data
// useEffect(() => {
//   authAxios.get(`http://localhost:5000/requirement/all`)
//   .then((res)=>{
//     const jobData = res.data
//     setJobListData(jobData)
//     console.log(jobData)
//   })
//   .catch((err)=>{
//     console.log(err)
//   })

  
// }, [])

    


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
                func={(e) => vendorFormSubmit(e)} nav={"/users"} />}
              />
              <Route
                path="newsubadmin"
                element={<New inputs={userInputs} title="Add New Sub Admin"
                form={subAdminForm}  setForm={(obj) => setSubAdminForm(obj)}
                 func={(e) => subAdminFormSubmit(e)} nav={"/users"} />}
              />
            </Route>
            <Route path="job">
              <Route index element={<JobList />} />
             
              <Route
                path="newrequirement"
                element={<New inputs={RequirementInputs} title="Add New Job Requrement"
                form={jobForm}  setForm={(obj) => setJobForm(obj)}
                 func={(e) => jobFormSubmit(e)} nav={"/job"}/>}
              />
              <Route
                path="newcandidate"
                element={<New inputs={userInputs} title="Add New Candidate Profile"
                form={subAdminForm}  setForm={(obj) => setSubAdminForm(obj)}
                 func={(e) => subAdminFormSubmit(e)} nav={"/users"} />}
              />
            </Route>
            <Route path="candidate">
              <Route index element={<CandidateList />} />
             
              {/* <Route
                path="newrequirement"
                element={<New inputs={RequirementInputs} title="Add New Job Requrement"
                form={jobForm}  setForm={(obj) => setJobForm(obj)}
                 func={(e) => jobFormSubmit(e)} nav={"/job"}/>}
              /> */}
              <Route
                path="newcandidate"
                element={<New inputs={CandidateProfileInputs} title="Add New Candidate Profile"
                form={adcandidateForm}  setForm={(obj) => setSubAdminForm(obj)}
                 func={(e) => addingCandidateFormSubmit(e)} nav={"/users"} />}
              />
            </Route>
          </Route>
    
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

