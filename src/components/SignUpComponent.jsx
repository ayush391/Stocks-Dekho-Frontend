import { Avatar, Box } from "@mui/material"
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import { Button } from '@mui/material';
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword  , sendEmailVerification} from "firebase/auth";
import {app} from './Firebase'
import axios from "axios";
import { Stack } from "@mui/system";
export const SignUp = () =>{
    const [name , setName] = useState("")
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const auth = getAuth(app)
    const handleEmail=(event)=>{
        setEmail(event.target.value)
    }
    const handlePassword=(event)=>{
        setPassword(event.target.value)
    }

    const handleText=(event)=>{
        setName(event.target.value)
    }
    const SignBtnHandler =()=>{
        createUserWithEmailAndPassword(auth , email , password).then(async(userCred)=>{
            const user = userCred.user
            const response = await axios.post(process.env.REACT_APP_BASE_URL +'/user/signup',{
                userId:user.uid.toString()

                
            })
            sendEmailVerification(user).then(()=>{
                console.log('email sent sucessfully')
            })

        }).catch(e=>alert(e))
    }
    return (
        <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1 },display:'flex',flexDirection:'column'
        }}
        noValidate
        autoComplete="off"
      >
        
        <Avatar sx={{margin:'auto'}}></Avatar>
        
        <FormControl variant="standard">
            <InputLabel htmlFor="component-simple" >Name</InputLabel>
            <Input id="component-simple" defaultValue="" type="text" onChange={handleText}/>
        </FormControl>
        <FormControl variant="standard">
            <InputLabel htmlFor="component-simple" >Email</InputLabel>
            <Input id="component-simple" defaultValue="" type="email" onChange={handleEmail}/>
        </FormControl>
        <FormControl variant="standard">
            <InputLabel htmlFor="component-simple" >Password</InputLabel>
            <Input id="component-simple" defaultValue="" type="password" onChange={handlePassword}/>
        </FormControl>
        
        <Button onClick={SignBtnHandler}>SignUp</Button>

        </Box>
    )
}