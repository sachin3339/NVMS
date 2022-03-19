import "./new.scss";
import Sidebar from "../../../components/sidebar/SideBar";
import Navbar from "../../../components/navbar/NavBar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

const SubAdmin = ({ inputs, title }) => {
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
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>
              <div className="formInput">
                  <label>Nmae</label>
                  <input type="text" placeholder="Enter your Name" />
                </div>
              <div className="formInput">
                  <label>Email</label>
                  <input type="mail" placeholder="Enter your email" />
                </div>
                <div className="formInput">
                  <label>Role</label>
                  <input type="text" placeholder="Enter your Role" />
                </div>
                <div className="formInput">
                  <label>Reporting Manager</label>
                  <input type="text" placeholder="Enter your Reporting manager" />
                </div>
                <div className="formInput">
                  <label>Employee Id</label>
                  <input type="number" placeholder="Enter your Emp Id" />
                </div>
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubAdmin;