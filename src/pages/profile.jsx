import { Avatar } from "@mui/joy";
import Card from "@mui/joy/Card";
import Stack from "@mui/joy/Stack";
import { Typography } from "@mui/material";
import CreateIcon from '@mui/icons-material/Create';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import CommentBankIcon from '@mui/icons-material/CommentBank';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
function Profile(){
    return (
        <div>

            <Card size="sm" sx={{width:'80%' , marginRight:'auto' , marginLeft:'auto'}} >

            <Stack direction='row' justifyContent={'initial'} sx={{marginBottom:'2rem' , }}>
            
            <Avatar src="https://lens-storage.storage.googleapis.com/png/4cde995e-9c55-4ed0-8f6d-e9aebd5d5596"   sx={{marginRight:2 , width:'7%' , minWidth:80 , minHeight:80,height:'7%' }}  />
            <Typography sx={{marginTop:'1rem' , fontSize:28 , marginRight:2}} >Deepak Singh</Typography>
            <CreateIcon sx={{marginTop:'1.4rem' , color:'lightblue' , height:'3%' , width:'3%' , minWidth:30 , minHeight:30  }}/>
            </Stack>

            </Card>
            <Card size="sm" sx={{width:'80%' , marginRight:'auto' , marginLeft:'auto' , marginTop:1}} >

                <Stack direction='row' justifyContent={'initial'} sx={{marginBottom:'2rem' , }}>
                    <Avatar  sx={{ bgcolor: 'lightblue',marginTop:'1rem' , color:'black' , height:'14%' , width:'4%' , minWidth:50 , minHeight:50 ,marginRight:2  }}>
                <ReceiptLongIcon sx={{ height:'100%'}}/>
                </Avatar>
                <Typography sx={{marginTop:'1rem' , fontSize:28 , marginRight:2}} >Transaction History</Typography>
                
                </Stack>

            </Card>
            <Card size="sm" sx={{width:'80%' , marginRight:'auto' , marginLeft:'auto' , marginTop:1}} >

                <Stack direction='row' justifyContent={'initial'} sx={{marginBottom:'2rem' , }}>
                    <Avatar  sx={{ bgcolor: 'lightblue',marginTop:'1rem' , color:'black' , height:'14%' , width:'4%' , minWidth:50 , minHeight:50 ,marginRight:2  }}>
                <CommentBankIcon sx={{ height:'100%'}}/>
                </Avatar>
                <Typography sx={{marginTop:'1rem' , fontSize:28 , marginRight:2}} >Holdings</Typography>
                
                </Stack>

            </Card>
            <Card size="sm" sx={{width:'80%' , marginRight:'auto' , marginLeft:'auto' , marginTop:1}} >

                <Stack direction='row' justifyContent={'initial'} sx={{marginBottom:'2rem' , }}>
                    <Avatar  sx={{ bgcolor: 'lightblue',marginTop:'1rem' , color:'black' , height:'14%' , width:'4%' , minWidth:50 , minHeight:50 ,marginRight:2  }}>
                <AccountBalanceIcon sx={{ height:'100%'}}/>
                </Avatar>
                <Typography sx={{marginTop:'1rem' , fontSize:28 , marginRight:2}} >Check Balance</Typography>
                
                </Stack>

            </Card>
        </div>
    )
}

export default Profile;
