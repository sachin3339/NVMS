import "../../forms/new.css"
import Sidebar from "../../../components/sidebar/SideBar";
import Navbar from "../../../components/navbar/NavBar";
import { useState } from "react";
import axios from "axios";
import DevelopmentUrl from "../../../data/api";
import { useNavigate } from 'react-router-dom';
const VendorForm = ({ inputs, title }) => {
  let navigate = useNavigate();
  const accesToken = localStorage.getItem('token');
  
  const [company , setCompany] = useState("");
  const [gst , setGst] = useState("");
  const [pan , setPan] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [poc , setPoc] = useState("");
  const [user , setUser] = useState("");
  const [mobile , setMobile] = useState("");
  const [password , setPassword] = useState("");
  const [email , setEmail] = useState("");


  const companyHandler = (event) => {
    
    setCompany(event.target.value);
    console.log(company);
  };

  const gstHandler = (event) => {
    setGst(event.target.value);
  };

  const panHandler = (event) => {
    setPan(event.target.value);
  };

  const aadharHandler = (event) => {
    setAadhar(event.target.value);
  };

  const contactHandler = (event) => {
    setPoc(event.target.value);
  };

  const userHandler = (event) => {
    setUser(event.target.value);
  };

  const mobileHandler = (event) => {
    setMobile(event.target.value);
  };


  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };



  const vendorFormSubmit = (e) =>{
    
    e.preventDefault()
      // console.log(vendorForm)
    let vendorFormData ={
      POC: poc,
      User: {
        username:user,
        email:email,
        role:"Vendor",
        mobile:mobile,
        password:password
      } ,
      GST: gst,
      PAN: pan,
      CName: company,
      Aadhar:aadhar,
      // Document:vendorForm[11]
    }

    axios.post(DevelopmentUrl+'/superadmin/onboarvendor',vendorFormData, {
      headers: {
        "Content-type": "application/json",
        "Authorization": `bearer ${accesToken}`
      }
    })
      .then(res => {console.log(res)
        if(res.status===200){
       
        
          // // <Redirect to='/home'/>
          navigate("/users");
          
         
          
     }
      alert("vender added successfully")})
      
      .catch(err => {console.log(err)
        alert("Something went wrong!")

      });

 }







  


  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New Vendor</h1>
        </div>
        <div className="bottom">
        <div className="right">
            <form onSubmit={vendorFormSubmit}>
            <div className="container">
            <div class="mb-3">

<div class="row justify-content-around">
  <div class=" col-sm">
  <div class="form-floating mb-3">
  <input type="text" placeholder="Enter your Company Name" onChange={companyHandler}
  class="form-control" id="floatingInput"/>
  <label for="floatingInput">Company Name</label>
</div>
  </div>
<div class="col-sm">
<div class="form-floating mb-3">
  <input type="text" placeholder="Enter your Gst Number" onChange={gstHandler} 
   class="form-control" id="floatingInput" 
   />
  <label for="floatingInput">Company GST Number</label>
</div>
 
</div>
   </div>
   </div>

   <div class="mb-3">

<div class="row justify-content-around">
  <div class=" col-sm">
  <div class="form-floating mb-3">
  <input type="text" placeholder="Enter your Pan Number" onChange={panHandler}
  class="form-control" id="floatingInput"/>
  <label for="floatingInput">Company Pan NUmber</label>
</div>
  </div>
<div class="col-sm">
<div class="form-floating mb-3">
  <input  type="text" placeholder="Enter your Aadhar Number" 
                  onChange={aadharHandler} 
   class="form-control" id="floatingInput" 
   />
  <label for="floatingInput">Aadhar Number</label>
</div>
 
</div>
   </div>
   </div>
   <div class="mb-3">

<div class="row justify-content-around">
  <div class=" col-sm">
  <div class="form-floating mb-3">
  <input type="text" placeholder="Enter your contact person" onChange={contactHandler}
  class="form-control" id="floatingInput"/>
  <label for="floatingInput">Point of Contact</label>
</div>
  </div>
<div class="col-sm">
<div class="form-floating mb-3">
  <input  type="text" placeholder="Enter your User name" onChange={userHandler}
   class="form-control" id="floatingInput" 
   />
  <label for="floatingInput">User Name</label>
</div>
 </div>
</div>
   </div>

   <div class="mb-3">

<div class="row justify-content-around">
  <div class=" col-sm">
  <div class="form-floating mb-3">
  <input type="tel" placeholder="Enter your Mobile Number" onChange={mobileHandler}
  class="form-control" id="floatingInput"/>
  <label for="floatingInput">Mobile Number</label>
</div>
  </div>
<div class="col-sm">
<div class="form-floating mb-3">
  <input  type="text" placeholder="Enter your Email Id" onChange={emailHandler} 
   class="form-control" id="floatingInput" 
   />
  <label for="floatingInput">Email Id</label>
</div>
 </div>
</div>
   </div>
   <div class="mb-3">

<div class="row justify-content-around">
  <div class=" col-sm">
  <div class="form-floating mb-3">
  <input type="password" placeholder="Enter your password" onChange={passwordHandler}
  class="form-control" id="floatingInput"/>
  <label for="floatingInput">Password</label>
</div>
  </div>
<div class="col-sm">
<div class="form-floating mb-3">
<button type="submit" className="">Submit</button>
</div>
 </div>
</div>
   </div>
   </div>
  
      
            </form>
         
         
          </div>
          {/* <div className="right">
            <form onSubmit={vendorFormSubmit}>
             
            <div className="formInput" style={{display:"flex", flexDirection:"column"}}>
                  <label>Company Name</label>
                  <input type="text" placeholder="Enter your Company Name" onChange={companyHandler} />
                </div>
                <div className="formInput" style={{display:"flex", flexDirection:"column"}}>
                  <label>Company GST Number</label>
                  <input type="text" placeholder="Enter your Gst Number" onChange={gstHandler} 
                   pattern={`^([0][1-9]|[1-2][0-9]|[3][0-7])([a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}[1-9a-zA-Z]{1}[zZ]{1}[0-9a-zA-Z]{1})+$`}

                  />
                      <span className="spandiv">Enter valid GST Number!</span>
                </div>
                <div className="formInput" style={{display:"flex", flexDirection:"column"}}>   

                     <label> Company Pan NUmber</label>
                  <input type="text" placeholder="Enter your Pan Number" onChange={panHandler}
                  pattern={`[A-Z]{5}[0-9]{4}[A-Z]{1}`}/>
                  <span className="spandiv">Enter valid PAN Number(with capital letters)! </span>
                </div>
                <div className="formInput" style={{display:"flex", flexDirection:"column"}}>         
                         <label>Aadhar Number</label>
                  <input type="text" placeholder="Enter your Aadhar Number" 
                  onChange={aadharHandler} 
                  // pattern={"^[2-9]{1}[0-9]{3}\\s[0-9]{4}\\s[0-9]{4}$"}
                  />
                  <span className="spandiv">Enter valid Adhar Number(in  ** ** ** formate )! </span>
                </div>
                <div className="formInput" style={{display:"flex", flexDirection:"column"}}>
                  <label>Point of Contact</label>
                  <input type="text" placeholder="Enter your contact person" onChange={contactHandler}/>
                </div>
                <div className="formInput" style={{display:"flex", flexDirection:"column"}}>
                  <label>User Name</label>
                  <input type="text" placeholder="Enter your User name" onChange={userHandler} />
                </div>
                <div className="formInput" style={{display:"flex", flexDirection:"column"}}>
                  <label>Mobile Number</label>
                  <input type="tel" placeholder="Enter your Mobile Number" onChange={mobileHandler}
                  
                  pattern={`[7-9]{1}[0-9]{9}`}  max={10}/>
                  <span className="spandiv">Enter Valid mobile Number!</span>
                </div>
                <div className="formInput" style={{display:"flex", flexDirection:"column"}}>
                  <label>Email Id</label>
                  <input type="text" placeholder="Enter your Email Id" onChange={emailHandler} 
                   pattern={`^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$`}  />
                   <span className="spandiv">It should be a valid email address!</span>
                </div>
                <div className="formInput" style={{display:"flex", flexDirection:"column"}}>
                  <label>Password</label>
                  <input type="password" placeholder="Enter your password" onChange={passwordHandler} />
                </div>
                <div>
                <button type="submit" className="">Submit</button>

                </div>

            </form>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default VendorForm;