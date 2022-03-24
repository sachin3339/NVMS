export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "username",
      headerName: "User",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.profilePic || "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
     } alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 230,
    },
  
    {
      field: "mobile",
      headerName: "Phone Number",
      width: 150,
    },
    // {
    //   field: "status",
    //   headerName: "Status",
    //   width: 160,
    //   renderCell: (params) => {
    //     return (
    //       <div className={`cellWithStatus ${params.row.status}`}>
    //         {params.row.status}
    //       </div>
    //     );

    // },
      
    // },
 
  ];
  
 
  
  export const jobColumns = [
    { field: "_id", headerName: "ID", width: 170 },
    {
      field: "Details",
      headerName: "Job",
      width: 230,
      // renderCell: (params) => {
      //   return (
      //     <div className="cellWithImg">
      //       <img className="cellImg" src={params.row.img} alt="avatar" />
      //       {params.row.username}
      //     </div>
      //   );
      // },
    },
    {
      field: "Skills",
      headerName: "Skills",
      width: 230,
    },
  
    {
      field: "Client",
      headerName: "Client",
      width: 150,
    },
    // {
    //   field: "status",
    //   headerName: "Status",
    //   width: 160,
    //   renderCell: (params) => {
    //     return (
    //       <div className={`cellWithStatus ${params.row.status}`}>
    //         {params.row.status}
    //       </div>
    //     );

    // },
      
    // },
    {
      field: "Location",
      headerName: "Location",
      width: 150,
    },
    {
      field: "EOY",
      headerName: "EOY",
      width: 150,
    },
    {
      field: "Expiry_date",
      headerName: "Expiry Date",
      width: 150,
    },
  ];

  

  export const vendorColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "POC",
      headerName: "POC",
      width: 230,
    
    },
   

    
     {
      field: "email",
      headerName: "Email",
      width: 150,
  
      
    },
  
    {
      field: "role",
      headerName: "Role",
      width: 150,
      // valueFormatter: ({ value }) => value.role 
    },
    {
      field: "mobile",
      headerName: "Phone Number",
      width: 150,
      // valueFormatter: ({ value }) => value.mobile 
    },
    {
      field: "GST",
      headerName: "GST",
      width: 150,
    },
    {
      field: "PAN",
      headerName: "PAN ",
      width: 150,
    },
    {
      field: "Aadhar",
      headerName: "Aadhar ",
      width: 150,
    },
  ];


  export const candidatesColumns = [
    { field: "_id", headerName: "ID", width: 70 },
    {
      field: "Name",
      headerName: "Name",
      width: 230,
    
    },
   

    
     {
      field: "email",
      headerName: "Email",
      width: 150,
 
      
    },
  
    {
      field: "Notice_Period",
      headerName: "Notice Period",
      width: 150,
    },
    {
      field: "Current_CTC",
      headerName: "Current_CTC",
      width: 150,
    },
    {
      field: "Expected_CTC",
      headerName: "Expected CTC",
      width: 150,
    },
    {
      field: "req_id",
      headerName: "registered ID ",
      width: 150,
    },
   
  ];