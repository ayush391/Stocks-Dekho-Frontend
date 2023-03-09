import { Box, Button, Card, CardContent, CardHeader, Container, Divider, Modal, Stack, Typography } from '@mui/material'

export const TransactionLogCard=()=>{
    return(
        <Container>
            
            <Card>
                <CardContent >
                <Stack direction={'row'} justifyContent={'space-evenly'}>
                    <Typography>Stock Symbol</Typography>
                    <Typography >QTY</Typography>

                    <Typography >Total Price</Typography>
                    
                </Stack>
                </CardContent>
            </Card>
            <Card>
                <CardContent >
                <Stack direction={'row'} justifyContent={'space-evenly'}>
                    <Typography>INFY</Typography>
                    <Typography >5</Typography>

                    <Typography sx={{border:'1px solid', borderRadius:1 , paddingLeft:2 , paddingRight:2 , color:'green'}}>6500</Typography>
                    
                </Stack>
                </CardContent>
            </Card>
            <Card>
                <CardContent >
                <Stack direction={'row'} justifyContent={'space-evenly'}>
                    <Typography>WIPRO</Typography>
                    <Typography >3</Typography>

                    <Typography sx={{border:'1px solid', borderRadius:1 , paddingLeft:2 , paddingRight:2 , color:'green'}}>1289</Typography>
                    
                </Stack>
                </CardContent>
            </Card>
            
           

        </Container>
    )
}