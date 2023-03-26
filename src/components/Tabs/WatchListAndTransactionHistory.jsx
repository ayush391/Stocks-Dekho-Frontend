import { Avatar, IconButton, Stack } from "@mui/material";
import AssignmentIcon from '@mui/icons-material/Assignment';
import AddIcon from '@mui/icons-material/Add';
const WatchListAndTransactionHistory=()=>{
    return (
        <div>
            <Stack direction={'row'} justifyContent={'flex-end'} >
            <Avatar  sx={{ bgcolor: 'white' , marginRight:1 }} >
                <AddIcon />
            </Avatar>
            <Avatar  sx={{ bgcolor: 'green' }}>
                <AssignmentIcon/>
            </Avatar>
            </Stack>
        
        </div>
    )
}

export {WatchListAndTransactionHistory};