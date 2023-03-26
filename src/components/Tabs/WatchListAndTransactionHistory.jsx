import { Avatar, IconButton, Stack } from "@mui/material";
import AssignmentIcon from '@mui/icons-material/Assignment';
import AddIcon from '@mui/icons-material/Add';
import {Link } from 'react-router-dom'
import { app } from '../../components/Firebase';
import { getAuth } from "firebase/auth";



const WatchListAndTransactionHistory=({symbol})=>{
    const transactionUrl = '/transactionHistory'
    const auth = getAuth(app);
    return (
        <div>
            <Stack direction={'row'} justifyContent={'flex-end'} >
            <Avatar  sx={{ bgcolor: 'white' , marginRight:1 }} >
                <AddIcon />
            </Avatar>
            <Avatar  sx={{ bgcolor: 'green' }} component={Link} to={transactionUrl} state={{stockSymbol:symbol}}>
                <AssignmentIcon />
            </Avatar>
            </Stack>
        </div>
    )
}

export {WatchListAndTransactionHistory};