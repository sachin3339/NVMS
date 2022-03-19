import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns,jobColumns, userRows ,jobRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";

const JobDataTable = () => {
  const [data, setData] = useState(jobRows);
  

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
        <div className="datatableTitle">
        <Link to="/job/newrequirement" className="link">
          Add New Requirement
        </Link>
        
        </div>
        
      <div className="datatableTitle">
     
      All Job Requirement List
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={ jobColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    
    </div>
  );
};

export default JobDataTable;
