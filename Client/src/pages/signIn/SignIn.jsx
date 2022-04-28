// import React, {  useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import jwt_decode from "jwt-decode";
// import axios from 'axios'
// import DevelopmentUrl from '../../data/api';



// const Login=()=>{


//     const paperStyle={padding :20,height:'60vh',width:280, margin:"20px auto" , marginTop: '100px'}
//     const avatarStyle={backgroundColor:'#1bbd7e'}
//     const btnstyle={margin:'8px 0'}


//     const [email , setEmail] = useState('')
//     const [password , setPassword] = useState('')
//     const [loginStatus , setLoginStatus] = useState(0)
//     let navigate = useNavigate();
//     let message = <p>Not Loged In</p>
//     const [error,setError]=useState("")
   
  
 

//      const emailHandler =  (event) => {
//         setEmail(event.target.value)
//         console.log(email)
//      }
//  const pssWordHandler = ( event) => {
//     setPassword(event.target.value)
//     console.log(password)
//     }

// const submitHandler = (e)=>{
//   e.preventDefault()
//   const formData = {
//       email:email,
//       password:password
//   };
   
//    axios.post(DevelopmentUrl+'/user/login',formData, {
//     headers: {
//       'Access-Control-Allow-Origin': '*',
//       "Content-type": "application/json",
//     } 
//     })
//    .then((res)=>{
//     setLoginStatus(res.status)
//         //getToken(res.data.token)
//     localStorage.setItem('token', res.data.token);
//     let token =res.data.token
//     if(token)
//   { 
//     try{
//         var decode =  jwt_decode(token);
//         localStorage.setItem('role', decode.role);
//         localStorage.setItem('logedUser', decode.username);
//         // decoding vendor details
//         localStorage.setItem('email', decode.email);
//         localStorage.setItem('id', decode._id);
        

//       console.log(localStorage.getItem('role'));
//       console.log(localStorage.getItem('logedUser'));
//       console.log(localStorage.getItem('email'));
//       console.log(localStorage.getItem('mobile'));

//    }
//  catch(e){
//    setError(e.message)
//  }

// }
//     const cat = localStorage.getItem('token');

//     console.log(cat)
//     console.log(res)
//     console.log(res.data)
//     console.log(res.data.token)
//     if(res.status===200){
       
        
//         // <Redirect to='/home'/>
//         navigate("/home");
        
       
        
//    }
//    }

//    ).catch(err =>{
//        console.log(err)
//    })

//    }



    
//     return(
//       <>
    
//         <form onSubmit={submitHandler}>
//                 <Grid>
//             <Paper elevation={10} style={paperStyle}>
//                 <Grid align='center'>
//                      <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
//                     <h2>Sign In</h2>
//                 </Grid>
//                 <TextField label='Email'
//                  placeholder='Enter email'
//                  id="email"
//                  onChange={emailHandler}
//                   fullWidth required />
//                 <TextField label='Password'
//                  placeholder='Enter password'
//                   type='password'
//                   id="password"
//                   onChange={pssWordHandler} fullWidth required/>
//                 <FormControlLabel
//                     control={
//                     <Checkbox
//                         name="checkedB"
//                         color="primary"
//                     />
//                     }
//                     label="Remember me"
//                  />
//                 <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
//                 <Typography >
//                      <Link href="#" >
//                         Forgot password ?
//                 </Link>
//                 </Typography>
               
//             </Paper>
//         </Grid>
//         </form>
//       </>
//     )
// }

// export default Login



import React, { useState } from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import jwt_decode from "jwt-decode";
import axios from 'axios';
import DevelopmentUrl from '../../data/api';
import { useNavigate } from 'react-router-dom';
import './signin.css'


const LoginPage = () => {
   


    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const [loginStatus , setLoginStatus] = useState(0)
    let navigate = useNavigate();
    let message = <p>Not Loged In</p>
     const [ setError ] = useState()


      const emailHandler =  (event) => {
        setEmail(event.target.value)
        console.log(email)
     }


    const passWordHandler = ( event) => {
    setPassword(event.target.value)
    console.log(password)
    }

     const submitHandler = (e)=>{
     e.preventDefault()
     const formData = {
      email:email,
      password:password
    };
   
   axios.post(DevelopmentUrl+'/user/login',formData, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      "Content-type": "application/json",
    } 
    })
   .then((res)=>{
    setLoginStatus(res.status)
        //getToken(res.data.token)
    localStorage.setItem('token', res.data.token);
    let token =res.data.token
    if(token)
  { 
    try{
        var decode =  jwt_decode(token);
        localStorage.setItem('role', decode.role);
        localStorage.setItem('logedUser', decode.username);
        // decoding vendor details
        localStorage.setItem('email', decode.email);
        localStorage.setItem('id', decode._id);
        

      console.log(localStorage.getItem('role'));
      console.log(localStorage.getItem('logedUser'));
      console.log(localStorage.getItem('email'));
      console.log(localStorage.getItem('mobile'));

   }
 catch(e){
   setError(e.message)
 }

}
    const cat = localStorage.getItem('token');

    console.log(cat)
    console.log(res)
    console.log(res.data)
    console.log(res.data.token)
    if(res.status===200){
       
        
        // // <Redirect to='/home'/>
        navigate("/home");
        
       
        
   }
   }

   ).catch(err =>{
       console.log(err)
       alert("Something went wrong!")

   })

   }




   
    return (
        <>
        
            <Container style={{color:"blue"}}>
                <h1 className="shadow-sm   mt-5 p-3 text-center rounded ">VMS LOGIN</h1>
                <Row className="mt-6">
                    <Col lg={5} md={6} sm={12} className="p-5 m-auto  rounded-lg loginform">
                        <Form onSubmit={submitHandler}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label >Email address</Form.Label>
                                <Form.Control 
                                onChange={emailHandler}  type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label >Password</Form.Label>
                                <Form.Control onChange={passWordHandler} type="password" placeholder="Password" />
                            </Form.Group>

                            <Button variant="btn btn-outline-primary" type="submit"
                           >
                                Login
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
            
        </>
    );
};

export default LoginPage;