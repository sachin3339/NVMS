export const userColumns = [
    { field: "_id", headerName: "ID", width: 70 },
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
  
    // {
    //   field: "phone",
    //   headerName: "Phone Number",
    //   width: 150,
    // },
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
  
  //temporary data
  export const userRows = [
    {
      id: 1,
      username: "Snow",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      status: "active",
      email: "1snow@gmail.com",
      phone: 35342452345,
    },
    {
      id: 2,
      username: "Jamie Lannister",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "2snow@gmail.com",
      status: "passive",
      phone: 42232323,
    },
    {
      id: 3,
      username: "Lannister",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "3snow@gmail.com",
      status: "pending",
      phone: 4523232323,
    },
    {
      id: 4,
      username: "Stark",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "4snow@gmail.com",
      status: "active",
      phone: 1632323233,
    },
    {
      id: 5,
      username: "Targaryen",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "5snow@gmail.com",
      status: "passive",
      phone: 22232323,
    },
    {
      id: 6,
      username: "Melisandre",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "6snow@gmail.com",
      status: "active",
      phone: 153232323,
    },
    {
      id: 7,
      username: "Clifford",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "7snow@gmail.com",
      status: "passive",
      phone: 4432323232,
    },
    {
      id: 8,
      username: "Frances",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "8snow@gmail.com",
      status: "active",
      phone: 36323232323,
    },
    {
      id: 9,
      username: "Roxie",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "snow@gmail.com",
      status: "pending",
      phone: 65323232323,
    },
    {
      id: 10,
      username: "Roxie",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "snow@gmail.com",
      status: "active",
      phone: 65232323232,
    },
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

  // export const jobRows = [{
  //       id: 1,
  //   Details: "React Developer",
  //   Skills: "react react-rputer, next",
  //   Client: "ReactDEV",
  //   Locations: "BEngaluru",
  //   EOY: "5",
  //   Expiry_date: "2022-05-10",
  // }]

  export const vendorColumns = [
    { field: "_id", headerName: "ID", width: 70 },
    {
      field: "POC",
      headerName: "POC",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.User[0].profilePic 
            || "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"} alt="avatar" />
            {params.row.POC}
           
          </div>
        );
      },
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
      field: "User",
      headerName: "Email",
      width: 150,
valueFormatter: ({ User }) => User[1].email 
      
    },
  
    {
      field: "User",
      headerName: "Phone Number",
      width: 150,
      valueFormatter: ({ User }) => User[0].mobile 
    },
    {
      field: "User",
      headerName: "Phone Number",
      width: 150,
      valueFormatter: ({ value }) => value[0].mobile 
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