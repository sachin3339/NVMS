

import "./new.scss";
import Sidebar from "../../../components/sidebar/SideBar";
import Navbar from "../../../components/navbar/NavBar"
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

const JobForm = ({ inputs, title }) => {
  const [file, setFile] = useState("");

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />   
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Resume: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

             
               <div className="formInput" >
                  <label>Requirement Id</label>
                  <input type='text' placeholder='Requirement Id' />
                </div>
                <div className="formInput" >
                  <label>Requirement Details</label>
                  <input type='text' placeholder='Requirement Details' />
                </div>
                <div className="formInput" >
                  <label>Major Skills</label>
                  <input type='text' placeholder='Major Skills ' />
                </div>
                <div className="formInput" >
                  <label>Details</label>
                  <input type='text' placeholder='Details ' />
                </div>
                <div className="formInput" >
                  <label>Client</label>
                  <input type='text' placeholder='Client' />
                </div>
                <div className="formInput" >
                  <label>Location</label>
                  <input type='text' placeholder='Location' />
                </div>
                <div className="formInput" >
                  <label>Expected Years of experience</label>
                  <input type='text' placeholder='Expected Years of experience' />
                </div>
                <div className="formInput" >
                  <label>Expected Number of profiles</label>
                  <input type='text' placeholder='Expected Number of profiles' />
                </div>
                <div className="formInput" >
                  <label>Expire Date</label>
                  <input type='text' placeholder='Expire Date' />
                </div>
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobForm;