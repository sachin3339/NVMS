import React, {  useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import axios from 'axios'



const Login=()=>{

    const paperStyle={padding :20,height:'60vh',width:280, margin:"20px auto" , marginTop: '100px'}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}


    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const [loginStatus , setLoginStatus] = useState(0)
    let navigate = useNavigate();
    let message = <p>Not Loged In</p>
 

     const emailHandler =  (event) => {
        setEmail(event.target.value)
        console.log(email)
     }
 const pssWordHandler = ( event) => {
    setPassword(event.target.value)
    console.log(password)
    }

const submitHandler = (e)=>{
  e.preventDefault()
  const formData = {
      email:email,
      password:password
  };
   
   axios.post('http://localhost:5000/user/login',formData)
   .then((res)=>{
    setLoginStatus(res.status)
        //getToken(res.data.token)
    localStorage.setItem('token', res.data.token);
    const cat = localStorage.getItem('token');

    console.log(cat)
    console.log(res)
    console.log(res.data)
    console.log(res.data.token)
    if(res.status===200){
       
        
        // <Redirect to='/home'/>
        navigate("/home");
        
       
        
   }
   }

   ).catch(err =>{
       console.log(err)
   })

   }



    
    return(
      <>
    
        <form onSubmit={submitHandler}>
                <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField label='Email'
                 placeholder='Enter email'
                 id="email"
                 onChange={emailHandler}
                  fullWidth required />
                <TextField label='Password'
                 placeholder='Enter password'
                  type='password'
                  id="password"
                  onChange={pssWordHandler} fullWidth required/>
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 />
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                <Typography >
                     <Link href="#" >
                        Forgot password ?
                </Link>
                </Typography>
               
            </Paper>
        </Grid>
        </form>
      </>
    )
}

export default Login