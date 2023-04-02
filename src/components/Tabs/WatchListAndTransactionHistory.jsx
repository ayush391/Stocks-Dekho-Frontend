import { Avatar, Button, IconButton, Stack } from "@mui/material";
import AssignmentIcon from '@mui/icons-material/Assignment';
import AddIcon from '@mui/icons-material/Add';
import {Link } from 'react-router-dom'
import { app } from '../../components/Firebase';
import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import axios from 'axios';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { async } from "@firebase/util";
const WatchListAndTransactionHistory=({symbol})=>{
    const transactionUrl = '/transactionHistory'
    const auth = getAuth(app);
    const [btnColor , setBtnColor] = useState("gray")
    const [isClick, setClick] = useState(false);
    const [inWatchlist , setWatchlist] = useState(false)
    const [user , loading , error] = useAuthState(auth)
    const url =  import.meta.env.VITE_BASE_URL

    const handleWatchListBtn =async()=>{
        if(inWatchlist){
            if(user){
            const response  = await axios.put(url+"/watchlist/"+user.uid,{stockSymbol:symbol});
            if (response.status == 200){
                setBtnColor("gray");
                setWatchlist(false)
            }
            }
        }else{
            if(user){
            const response  = await axios.put(url+"/watchlist",{stockSymbol:symbol , userId:user.uid});
            if(response.status == 200){
                setBtnColor("pink")
                setWatchlist(true)
            }
            }

        }
    }
    useEffect(()=>{
        if(loading){

        }else{
            async function checkInWatchlist(){
                const response = await axios.get(url+"/watchlist/checkIfInWatchList/"+user.uid+"?stockSymbol="+symbol.toString())
                if(response.data.isInWatchlist == true){
                    setBtnColor('pink')
                    setWatchlist(true)
                }
            }

            checkInWatchlist()
        }
    },[loading,user])
    return (
        <div>
            <Stack direction={'row'} justifyContent={'flex-end'} >
            <Avatar sx={{color:btnColor, backgroundColor:'#fff'  ,padding:2 , marginRight:2}} component={IconButton} onClick={handleWatchListBtn}>
                <FavoriteIcon />
            </Avatar>
            <Avatar  sx={{ color: 'green', backgroundColor:'#fff'  }} component={Link} to={transactionUrl} state={{stockSymbol:symbol}}>
                <AssignmentIcon />
            </Avatar>
            </Stack>
        </div>
    )
}

export {WatchListAndTransactionHistory};