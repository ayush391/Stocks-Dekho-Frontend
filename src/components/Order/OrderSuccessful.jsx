import { IconButton } from '@chakra-ui/react'
import { Close } from '@mui/icons-material'
import { Box, Button, Card, CardContent, Container, Divider, Modal, Slide, Stack, Typography } from '@mui/material'
import React from 'react'
import axios from 'axios'
import { getAuth } from 'firebase/auth'
import { app } from '../Firebase'

import OrderSuccessfullImg from '../../assets/orderSuccessfull.png'
import { useNavigate , useRoutes } from 'react-router-dom'

const OrderSuccessfull = ({ open, icon, reviewOrder, onClose, transactionType }) => {
    const navigate = useNavigate()
    
    const handleClick = () => {
        navigate(-1)
    }
    return (
        <Container maxWidth='sm'>
            <Card sx={{ borderRadius: '20px' }}>
                <CardContent>
                    <Stack justifyContent='center' alignItems='center'>
                        <img src={OrderSuccessfullImg} width={120} />
                        <Typography textAlign='center' variant='h3' color='primary' fontWeight='bold' sx={{ marginY: '1rem' }}>Thank You!</Typography>
                        <Typography textAlign='center' variant='h6' sx={{ marginY: '1rem' }}>Your transaction was successful</Typography>
                    </Stack>
                    <Button size='large' variant='contained' fullWidth onClick={handleClick}>Done</Button>
                </CardContent>
            </Card>
        </Container>
    )
}

export default OrderSuccessfull