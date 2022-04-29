import Home from "./pages/home/Home";
import List from "./pages/list/List";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import JobList from "./pages/list/JobList";
import Login from "./pages/signIn/SignIn"; 
import CandidateList from './pages/list/CnadidateList';
import UploadDocument from './components/UploadDocument/UploadDocument';
import ViewDocumentList from './pages/list/ViewDocumentList';
import SubAdmin from './pages/forms/subadmin/SubAdmin';
import EditSubAdmin from './pages/forms/subadmin/EditSubAdmin';
import JobForm from './pages/forms/jobform/JobForm';
import EditJobForm from './pages/forms/jobform/EditJobForm';
import VendorForm from './pages/forms/vendor/VendorForm';
import CandiateForm from './pages/forms/candidate/CandiateForm';
import EditCandiateForm from './pages/forms/candidate/EditCandidateForm';
import MapCandidateToRequirement from "./components/MapCandidateToRequirement/MapCandidateToRequirement"
// import ProtectedRoute from "./components/protectedRoutes/ProtectedRoute";
import './App.css'

function App() {

  const token = localStorage.getItem('token');
  return (
    <div className= "app">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />} />
            {/* <Route index element={<Login />} /> */}
            <Route path="home" element={<Home />} />
            <Route path="/users">
              <Route index element={<List />} />
            
              <Route
                path="newvendor"
                element={<VendorForm/>}
              />
              <Route
                path="newsubadmin"
                element={<SubAdmin/>}
              />
              <Route
                path="editsubadmin"
                element={<EditSubAdmin/>}
              />
            </Route>
              <Route path="job">
              <Route index element={<JobList />} />
             
              <Route
                path="newjobrequirement"
                element={<JobForm/>}
              />
              
              {/* <Route
                path="newcandidate"
                element={<New inputs={userInputs} title="Add New Candidate Profile"
                form={subAdminForm}  setForm={(obj) => setSubAdminForm(obj)}
                 func={(e) => subAdminFormSubmit(e)} nav={"/users"} />}
              /> */}
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
                element={<CandiateForm/>}
              />
             
         
              
            </Route>

            <Route path="/candidate/editcandidate" element={<EditCandiateForm />} />
            
            <Route path='/vendor/document' element={ <UploadDocument/>}/>
          {/* </Route> */}
          <Route path='/vendor/uploaddocument' element={ <UploadDocument/>}/>
          <Route path='/vendor/viewdocument' element={ <ViewDocumentList/>}/>
          <Route path="/job/newrequirement" element={<JobForm/>}/>
          <Route path="/job/editrequirement" element={<EditJobForm/>}/>
           <Route path="/job/description"  element={<MapCandidateToRequirement/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;