import { Box } from "@mui/material"
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import { Button } from '@mui/material';
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {app} from './Firebase'
export const SignUp = () =>{
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const auth = getAuth(app)
    const handleEmail=(event)=>{
        setEmail(event.target.value)
    }
    const handlePassword=(event)=>{
        setPassword(event.target.value)
    }
    const SignBtnHandler =()=>{
        createUserWithEmailAndPassword(auth , email , password).then((userCred)=>{
            const user = userCred.user
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