import "../../forms/new.css"
import Sidebar from "../../../components/sidebar/SideBar";
import Navbar from "../../../components/navbar/NavBar";
import { useState } from "react";
import DevelopmentUrl from "../../../data/api";
import { useLocation } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const EditSubAdmin = () => {
    let navigate = useNavigate();
    const location = useLocation();
    const { from } = location.state;

    //console.log(from);

    //store acces token
    const accesToken = localStorage.getItem('token');


    //   const [name, setName] = useState("");
    //   const [email, setEmail] = useState("");
    const [reportingManager, setReportingManager] = useState("");
    const [empID, setEmpID] = useState("");
    //   const [password, setPassword] = useState("");
    //   const [gst, setGst] = useState("");
    //   const [mobile, setMobile] = useState("");
    //input handlers 
    //   const nameHanlder = (e) => {
    //     setName(e.target.value)
    //     console.log(name)
    //   }

    //   const emailHanlder = (e) => {
    //     setEmail(e.target.value)
    //   }
    const reportingManagerHanlder = (e) => {
        setReportingManager(e.target.value)
    }
    const empIDHanlder = (e) => {
        setEmpID(e.target.value)
    }
    //   const passwordHanlder = (e) => {
    //     setPassword(e.target.value)
    //   }
    //   const gstHanlder = (e) => {
    //     setGst(e.target.value)
    //   }
    //   const mobileHanlder = (e) => {
    //     setMobile(e.target.value)
    //   }

    //sub admin  form data handler and submi
    const subAdminFormSubmit = (e) => {
        e.preventDefault();


        let subadminFormData = {
            EMP_ID: empID,
            //   User: {
            //     username: name,
            //     email: email,
            //     role: 'Admin',
            //     mobile: mobile,
            //     password: password,

            //   },
            //   Created_by: localStorage.getItem('logedUser'),
            //   GST: gst,
            Reporting_Manager: reportingManager

        }
        axios.post(DevelopmentUrl + `/superadmin/onboardadmin`, subadminFormData, {
            headers: {
                "Content-type": "application/json",
                "Authorization": `bearer ${accesToken}`

            }
        })
            .then(res => {
                console.log(res);
                if(res.status===200){
       
        
                    // // <Redirect to='/home'/>
                    navigate("/users");}
                alert("Subadmin updated Successfully")
            })
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
                    <h1>Edit Sub Admin</h1>
                </div>
                <div className="bottom">

                    <div className="right">
                        <form >

                            {/* <div className="formInput"  style={{display:"flex", flexDirection:"column"}}>
                <label>Name</label>
                <input type="text" placeholder="Enter your Name" onChange={nameHanlder} />
              </div> */}
                            {/* <div className="formInput" style={{display:"flex", flexDirection:"column"}}>
                <label>Email</label>
                <input type="mail" placeholder="Enter your email" onChange={emailHanlder} 
               pattern={`^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$`}  />
               <span className="spandiv">It should be a valid email address!</span>
              </div> */}
                             
                            <div className="formInput" style={{ display: "flex", flexDirection: "column" }}>
                                <label>Reporting Manager</label>
                                <input type="text" placeholder="Enter your Reporting manager" onChange={reportingManagerHanlder} />
                            </div>
                            <div className="formInput" style={{ display: "flex", flexDirection: "column" }}>
                                <label>Employee Id</label>
                                <input type="text" placeholder="Enter your Emp Id" onChange={empIDHanlder} />
                            </div>

                            {/* <div className="formInput" style={{ display: "flex", flexDirection: "column" }}>
                                <label>GST</label>
                                <input type="text" placeholder="Enter your GST" onChange={gstHanlder}
                                    pattern={`^([0][1-9]|[1-2][0-9]|[3][0-7])([a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}[1-9a-zA-Z]{1}[zZ]{1}[0-9a-zA-Z]{1})+$`}
                                />
                                <span className="spandiv">Enter vslid GST!</span>
                            </div> */}
                            <div>
                            <button type="submit" style={{ height: "50px", marginTop: '50px' }}>Edit</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditSubAdmin;