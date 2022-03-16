import React, { useState } from 'react'

import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
const Login=()=>{

    const paperStyle={padding :20,height:'60vh',width:280, margin:"20px auto" , marginTop: '100px'}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}


    const [userName , setUserName] = useState('')
    const [password , setPassword] = useState('')

//      const userNameHandler =  (event) = {
//         setUserName(event.target.value)
//         console.log(userName)
//      }
//  const pssWordHandler = ( event) = {
//     setPassword(event.target.value)
//     console.log(password)
//     }

    function userNameHandler(event){
       
        setUserName(event.target.value)
        console.log(userName)
    }
    function pssWordHandler(event){
        setPassword(event.target.value)
        console.log(password)
    }
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField label='Username'
                 placeholder='Enter username'
                 onChange={userNameHandler}
                  fullWidth required />
                <TextField label='Password'
                 placeholder='Enter password'
                  type='password'
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
                {/* <Typography > Do you have an account ?
                     <Link href="/signup" >
                        Sign Up 
                </Link>
                </Typography> */}
            </Paper>
        </Grid>
    )
}

export default Login