import React, { useState, useEffect } from 'react';
import Navbar from '../navbar/NavBar';
import Sidebar from '../sidebar/SideBar';
import PropTypes from 'prop-types';
import { DataGrid, GridToolbar, GridActionsCellItem } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import "../SubAdminApprovedDocument/approved.css"
//import DevelopmentUrl from "../../../data/api"

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import axios from "axios";

import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TextareaAutosize } from "@material-ui/core";

// import Collapse from '@mui/material/Collapse';
// import IconButton from '@mui/material/IconButton';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Typography from '@mui/material/Typography';
// import Paper from '@mui/material/Paper';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import { Button } from '@mui/material';



export default function CollapsibleTable() {
  

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [rows, setDataRow] = useState([]);
  const token = localStorage.getItem("token");
  useEffect(() => {
    axios.get('http://localhost:5000/superadmin/showvendorsdocuments', {
      headers: {
        "Content-Type": "text/plain",
        "Authorization": `bearer ${token}`
      }
    })
      .then(res => {
        setDataRow(res.data.result);
        //console.log(res.data.rows);
      })
      .catch(err => console.error("YO YOU GOT AN ERROR IN AXIOS ", err))

  }, [])
  return (
    <>
      <div className="new">
        <Sidebar />
        <div className="newContainer">
          <Navbar />
          <div className="right">

            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>Review Comments</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Reason for Disapproved
                </DialogContentText>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Review"
                  type="text"
                  fullWidth
                  variant="standard"
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleClose}>ok</Button>
              </DialogActions>
            </Dialog>
            <div className="widgetLg">
              {/* <h3 className="widgetLgTitle" style={{ color: "darkblue" }}>Inactive Employees</h3> */}
              <table className="widgetLgTable">
                <tr className="widgetLgTr">
                <th className="widgetLgTh" style={{ color: "darkblue" }}>Status</th>
                  <th className="widgetLgTh" style={{ color: "darkblue" }}>ESIC_CAL</th>
                  <th className="widgetLgTh" style={{ color: "darkblue" }}>PF_CAL</th>

                  <th className="widgetLgTh" style={{ color: "darkblue" }}>PF_CHALLAN</th>
                  <th className="widgetLgTh" style={{ color: "darkblue" }}>ESIC_CHALLAN</th>
                  <th className="widgetLgTh" style={{ color: "darkblue" }}>PT_RC</th>

                  <th className="widgetLgTh" style={{ color: "darkblue" }}>AUDIT_SHEET</th>
                  <th className="widgetLgTh" style={{ color: "darkblue" }}>FORM_5A</th>
                  <th className="widgetLgTh" style={{ color: "darkblue" }}>ESTABLISHMENT_CA</th>

                  <th className="widgetLgTh" style={{ color: "darkblue" }}>DSC</th>
                  <th className="widgetLgTh" style={{ color: "darkblue" }}>COI</th>
                  <th className="widgetLgTh" style={{ color: "darkblue" }}>GST_CERT</th>

                  <th className="widgetLgTh" style={{ color: "darkblue" }}>LWF</th>
                </tr>
                {rows.map((name) => (
                  <tr className="widgetLgTr">
                    <td className="widgetLgUser">

                      <span className="widgetLgDate">
                        <EditIcon onClick={handleClickOpen}/>
                      </span>
                      <span className="widgetLgDate">
                      <button>Approve</button>
                      </span>
                    </td>
                    <td className="widgetLgDate">{(name.ESIC_CAL !== 'Yet to be uploaded' ? <Link to ="/">View</Link>:name.ESIC_CAL)} </td>
                     <td className="widgetLgDate">{(name.PF_CAL !== 'Yet to be uploaded' ? <Link to ="/">View</Link>:name.PF_CAL)}</td> 
                    <td className="widgetLgDate">{(name.PF_CHALLAN !=='Yet to be uploaded' ? <Link to ="/">View</Link>:name.PF_CHALLAN)}</td>
                    <td className="widgetLgDate">{(name.ESIC_CHALLAN !=='Yet to be uploaded' ? <Link to ="/">View</Link>:name.ESIC_CHALLAN) }</td>
                    <td className="widgetLgDate">{(name.PT_RC !=='Yet to be uploaded' ? <Link to ="/">View</Link>:name.PT_RC)}</td>
                    <td className="widgetLgAmount">{(name.AUDIT_SHEET !=='Yet to be uploaded' ? <Link to ="/">View</Link>:name.AUDIT_SHEET)}</td>
                    <td className="widgetLgDate">{(name.FORM_5A !=='Yet to be uploaded' ? <Link to ="/">View</Link>:name.FORM_5A)}</td>
                    <td className="widgetLgAmount">{(name.ESTABLISHMENT_CA !=='Yet to be uploaded' ? <Link to ="/">View</Link>:name.ESTABLISHMENT_CA)}</td>
                    <td className="widgetLgDate">{(name.DSC !=='Yet to be uploaded' ? <Link to ="/">View</Link>:name.DSC)}</td>
                    <td className="widgetLgAmount">{(name.COI !=='Yet to be uploaded' ? <Link to ="/">View</Link>:name.COI)}</td>
                    <td className="widgetLgDate">{(name.GST_CERT !=='Yet to be uploaded' ? <Link to ="/">View</Link>:name.GST_CERT)}</td>
                    <td className="widgetLgAmount">{(name.LWF !=='Yet to be uploaded' ? <Link to ="/">View</Link>:name.LWF)}</td>

                  </tr>
                ))}

              </table>
            </div>




          </div>
        </div>
      </div>

    </>
  );
}

