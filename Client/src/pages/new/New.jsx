

import "./new.scss";
import Sidebar from "../../components/sidebar/SideBar";
import Navbar from "../../components/navbar/NavBar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const New = ({ inputs, title , func , form , setForm, nav}) => {
  const [file, setFile] = useState("");
  let navigate = useNavigate();
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
            <form >
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

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} value={form[input.id]} onChange={(e) => {
let obj = {...form};
obj[input.id] = e.target.value;
setForm(obj);
}}/>
                </div>
                
              ))}
              <button onClick={(e)=>{func(e)
              
               navigate(nav);
              }}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;