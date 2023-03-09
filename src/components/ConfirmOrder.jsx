import { IconButton } from '@chakra-ui/react'
import { Close } from '@mui/icons-material'
import { Box, Button, Card, CardContent, CardHeader, Container, Divider, Modal, Stack, Typography } from '@mui/material'
import React from 'react'

const ConfirmOrder = ({ open, icon, reviewOrder, onClose }) => {


    return (
        <>
            <Modal open={open}>
                <Container maxWidth='sm'>

                    <Card sx={{ borderRadius: '20px' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', padding: '1rem' }}>
                            <IconButton onClick={onClose} sx={{}}>
                                <Close />
                            </IconButton>
                        </Box>
                        <Typography textAlign='center' variant='h4' sx={{ marginY: '1rem' }}>Confirm Order</Typography>

                        <Stack direction='column' alignItems='center'>
                            <img width={100} src={icon}></img>
                            <Typography textAlign='center' variant='h5'>{reviewOrder.stockSymbol}</Typography>
                        </Stack>

                        <Typography textAlign='center' variant='h4' sx={{ color: '#1565c0', fontWeight: 'bold' }}>₹{reviewOrder.orderAmount}</Typography>

                        <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 3, marginY: '1rem' }}>
                            <Stack direction='row' justifyContent='space-between'>
                                <Typography sx={{ color: '#a0a4a8' }}>Payment Method</Typography>
                                <Typography sx={{ color: '#52565b' }}>CNC</Typography>
                            </Stack>
                            <Divider />
                            <Stack direction='row' justifyContent='space-between'>
                                <Typography sx={{ color: '#a0a4a8' }}>Quantity</Typography>
                                <Typography sx={{ color: '#52565b' }}>{reviewOrder.quantity}</Typography>
                            </Stack>
                            <Divider />
                            <Stack direction='row' justifyContent='space-between'>
                                <Typography sx={{ color: '#a0a4a8' }}>Transaction Fee</Typography>
                                <Typography sx={{ color: '#52565b' }}>Free</Typography>
                            </Stack>
                        </CardContent>
                        <Button size='large' variant='contained' fullWidth>Place Order</Button>
                    </Card>
                </Container>
            </Modal>
        </>
    )
}

export default ConfirmOrder