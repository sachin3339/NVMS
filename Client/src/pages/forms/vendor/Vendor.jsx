import "./new.scss";
import Sidebar from "../../../components/sidebar/SideBar";
import Navbar from "../../../components/navbar/NavBar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

const Vendor = ({ inputs, title }) => {
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
                  Logo: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>
              <div className="formInput">
                  <label>Vendor Id</label>
                  <input type="text" placeholder="Enter your vendor id" />
                </div>
                <div className="formInput">
                  <label>Vendor Name</label>
                  <input type="text" placeholder="Enter your vendor Name" />
                </div>
                <div className="formInput">
                  <label>Service Location</label>
                  <input type="text" placeholder="Enter your Service Location" />
                </div>
                <div className="formInput">
                  <label>GST Number</label>
                  <input type="number" placeholder="Enter your Gst number" />
                </div>
                <div className="formInput">
                  <label>Registerd Office Addres</label>
                  <input type="text" placeholder="Enter your Registerd Office Addres" />
                </div>
                <div className="formInput">
                  <label>Vender Contact Name</label>
                  <input type="text" placeholder="Enter your Vender Contact Name" />
                </div>
                <div className="formInput">
                  <label>Mobile Number</label>
                  <input type="number" placeholder="Enter your Mobile Number" />
                </div>
                <div className="formInput">
                  <label>EmailId</label>
                  <input type="text" placeholder="Enter your Email Id" />
                </div>
                <div className="formInput">
                  <label>Vender Contact Name</label>
                  <input type="text" placeholder="Enter your Vender Contact Name" />
                </div>
                
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vendor;