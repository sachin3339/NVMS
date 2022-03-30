import React, { useState } from "react";
import "./upload.css";
import Sidebar from "../sidebar/SideBar";
import Navbar from "../navbar/NavBar";
import axios from "axios";

function UploadDocument() {

  const email = localStorage.getItem("email");
  const token = localStorage.getItem("token");
  //  console.log(token);

  const [esic, setEsic] = useState(null);
  const [pfallotment, setPfallotment] = useState(null);
  const [pfchallanECR, setPFchallanECR] = useState(null);
  const [esicchallan, setEsicchallan] = useState(null);
  const [PTRegistration, setPTRegistration] = useState(null);
  const [CompanyAudited, setCompanyAudited] = useState(null);
  const [Form5A, setForm5A] = useState(null);
  const [Shopestablishmentcertificate, setShopestablishmentcertificate] = useState(null);
  const [DSC, setDSC] = useState(null);
  const [Incorporation, setIncorporation] = useState(null);
  const [GST, setGST] = useState(null);
  const [LWF, setLWF] = useState(null);
  
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  // const accesToken = localStorage.getItem("token");
  // const apiUrl = "http://localhost:5000";

  // const authAxios = axios.create({
  //   baseURL: apiUrl,
  //   headers: {
  //     Authorization: `Bearer ${accesToken}`,
  //   },
  // });
  // console.log(accesToken);

  // const [formData, setFormData] = useState(0)

  //input handler
  // const emailHandler = (event) => {
  //   setEmail(event.target.value);
  //   console.log(email);
  // };
  // const passwordHandler = (event) => {
  //   setEmail(event.target.value);
  //   console.log(password);
  // };
 
  const esiHandler = (event) => {
    
    setEsic(event.target.files[0]);
    console.log(esic);
  };

  const Form5AHandler = (event) => {
    setForm5A(event.target.files[0]);
    console.log(Form5A);
  };

  const pfallotmentHandler = (event) => {
    setPfallotment(event.target.files[0]);
    console.log(pfallotment);
  };

  const pfchallanECRHandler = (event) => {
    setPFchallanECR(event.target.files[0]);
    console.log(pfchallanECR);
  };

  const esicchallanHandler = (event) => {
    setEsicchallan(event.target.files[0]);
    console.log(esicchallan);
  };

  const CompanyAuditedHandler = (event) => {
    setCompanyAudited(event.target.files[0]);
    console.log(CompanyAudited);
  };

  const PTRegistrationHandler = (event) => {
    setPTRegistration(event.target.files[0]);
    console.log(PTRegistration);
  };

  const ShopestablishmentcertificateHandler = (event) => {
    setShopestablishmentcertificate(event.target.files[0]);
    console.log(Shopestablishmentcertificate);
  };

  const DSCHandler = (event) => {
    setDSC(event.target.files[0]);
    console.log(DSC);
  };

  const IncorporationHandler = (event) => {
    setIncorporation(event.target.files[0]);
    console.log(Incorporation);
  };

  const GSTHandler = (event) => {
    setGST(event.target.files[0]);
    console.log(GST);
  };

  const LWFHandler = (event) => {
    setLWF(event.target.files[0]);
    console.log(LWF);
  };

  const send = async(event) => {
    event.preventDefault();
    const data = new FormData();
    
    data.append("ESIC_CAL", esic);
    data.append("PF_CHALLAN", pfchallanECR);
    data.append("ESIC_CHALLAN", esicchallan);
    data.append("PT_RC", PTRegistration);
    data.append("AUDIT_SHEET", CompanyAudited);
    data.append("FORM_5A", Form5A);
    data.append("ESTABLISHMENT_CA", Shopestablishmentcertificate);
    data.append("DSC", DSC);
    data.append("COI", Incorporation);
    data.append("GST_CERT", GST);
    data.append("LWF", LWF);
    data.append("PF_CAL", pfallotment);


    axios.patch(`http://localhost:5000/superadmin/updatevendor/${email}`, data,{
          headers: {
            "Content-type": "multipart/form-data",
            "Authorization": `bearer ${token}`
          }
        })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };
  // let formSubmitHandler = (event) => {
  //   event.preventDefault();
  //   const formData = {
      
  //     ESIC_CAL: esic,
  //     PF_CHALLAN: pfchallanECR,
  //     ESIC_CHALLAN: esicchallan,
  //     PT_RC: PTRegistration,
  //     AUDIT_SHEET: CompanyAudited,
  //     FORM_5A: Form5A,
  //     ESTABLISHMENT_CA: Shopestablishmentcertificate,
  //     DSC: DSC,
  //     COI: Incorporation,
  //     GST_CERT: GST,
  //     LWF: LWF,
  //     PF_CAL: pfallotment,
  //   };
  //   console.log(formData);
  //   axios.patch(`http://localhost:5000/superadmin/updatevendor/${email}`, formData, {
  //     headers: {
  //       "Content-Type": "text/plain",
  //       "Authorization": `bearer ${token}`
  //     }
  //   })
  //     .then((res) => {
  //       let { data } = res;
  //       console.log(data);
  //     }).catch((err) => console.log(err))
  // };
  return (
    <>
      <div className="new">
        <Sidebar />
        <div className="newContainer">
          <Navbar />
          <div className="right">
            <div className="formInput">
              <form onSubmit={send}>
                <div className="container">
                  <div className="top">
                    <h1>Upload All The Documents </h1>
                  </div>
                  <div class="mb-3">
                    <label>ESIC code allotment letter</label>
                    <input
                      type="file"
                      name="ESIC_CAL"
                      onChange={esiHandler}
                    />
                  </div>
                  <div class="mb-3">
                    <lable>The last month PF challan with the ECR</lable>
                    <input
                      type="file"
                      name="PF_CHALLAN"
                      onChange={pfchallanECRHandler}
                    />
                  </div>
                  <div class="mb-3">
                    <lable>Paid ESIC challan with the contribution History</lable>
                    <input
                      type="file"
                      name="ESIC_CHALLAN"
                      onChange={esicchallanHandler}
                    />
                  </div>
                  <div class="mb-3">
                    <lable>PT Registration certificate (if applicable)</lable>
                    <input
                      type="file"
                      name="PT_RC"
                      onChange={PTRegistrationHandler}
                    />
                  </div>
                  <div>
                    <lable>Company Audited Balance sheet for last 3 years</lable>
                    <input
                      type="file"
                      name="AUDIT_SHEET"
                      onChange={CompanyAuditedHandler}
                    />
                  </div>
                  <lable>Form 5A under PF act</lable>
                  <input
                    type="file"
                    name="FORM_5A"
                    onChange={Form5AHandler}
                  />
                  <div class="mb-3">
                    <lable>Shop and establishment certificate</lable>
                    <input
                      type="file"
                      name="ESTABLISHMENT_CA"
                      onChange={ShopestablishmentcertificateHandler}
                    />
                  </div>
                  <div class="mb-3">
                    <lable>DSC (Digital Signature Certificate)</lable>
                    <input
                      type="file"
                      name="DSC"
                      onChange={DSCHandler} />
                  </div>
                  <div class="mb-3">
                    <lable>Certificate of Incorporation</lable>
                    <input
                      type="file"
                      name="COI"
                      onChange={IncorporationHandler} />
                  </div>
                  <div class="mb-3">
                    <lable>GST Certificate</lable>
                    <input
                      type="file"
                      name="GST_CERT"
                      onChange={GSTHandler} />
                  </div>
                  <div>
                    <lable> LWF for the state</lable>
                    <input
                      type="file"
                      name="LWF"
                      onChange={LWFHandler} />
                  </div>

                  <div class="mb-3">
                    <lable> PF code allotment letter</lable>
                    <input
                      type="file"
                      name="PF_CAL"
                      onChange={pfallotmentHandler} />
                  </div>
                  {/*  
         <div class="container">
  <div class="row align-items-start">
    <div class="col">
    <label>ESIC code allotment letter</label>
                    <input
                      type="file"
                      name="picture"
                      id="exampleFormControlFile1"
                      onChange={esiHandler}
                    />
    </div>
    <div class="col">
                <lable>The last month PF challan with the ECR</lable>
                    <input
                      type="file"
                      name="picture"
                      onChange={pfchallanECRHandler}
                    />
    </div>
    <div class="col">
                 <lable>Paid ESIC challan with the contribution History</lable>
                    <input
                      type="file"
                      name="picture"
                      onChange={esicchallanHandler}
                    />
    </div>
  </div>
  <div class="row align-items-center">
    <div class="col">
                  <lable>PT Registration certificate (if applicable)</lable>
                    <input
                      type="file"
                      name="picture"
                      onChange={PTRegistrationHandler}
                    />
    </div>
    <div class="col">
               <lable>Company Audited Balance sheet for last 3 years</lable>
                    <input
                      type="file"
                      name="picture"
                      onChange={CompanyAuditedHandler}
                    />
    </div>
    <div class="col">
    <lable>Form 5A under PF act</lable>
                    <input
                      type="file"
                      name="picture"
                      onChange={Form5AHandler}
                    />
    </div>
  </div>
  <div class="row align-items-end">
    <div class="col">
    <lable>Shop and establishment certificate</lable>
                    <input
                      type="file"
                      onChange={ShopestablishmentcertificateHandler}
                    />
    </div>
    <div class="col">
                <lable>DSC (Digital Signature Certificate)</lable>
                    <input type="file" onChange={DSCHandler} />
    </div>
    <div class="col">
               <lable>Certificate of Incorporation</lable>
                    <input type="file" onChange={IncorporationHandler} />
    </div>

  </div>

  <div class="row align-items-start">
    <div class="col">
              <lable>GST Certificate</lable>
                    <input type="file" onChange={GSTHandler} />
    </div>
    <div class="col">
           <lable> LWF for the state</lable>
                    <input type="file" onChange={LWFHandler} />
    </div>
    <div class="col">
           <lable> PF code allotment letter</lable>
                    <input type="file" onChange={pfallotmentHandler} />
    </div> 
  </div> */}
                  {/* </div> */}

                  <button>Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UploadDocument;



