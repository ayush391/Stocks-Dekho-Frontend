import { AccountCircle } from '@mui/icons-material'
import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'
import SearchBar from './SearchBar'

const Navbar = () => {
    return (
        <>
            <AppBar position='sticky' sx={{ top: 0 }}>
                <Toolbar
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}
                >
                    <Button variant='text' component={Link} to='/'>
                        <Typography variant='h5' fontWeight='bold' color='white' textTransform='none'
                            fontFamily='Righteous'
                        >StoxDekho</Typography>
                    </Button>

                    <Search />

                    <Button variant='contained' color='warning' disableElevation component={Link} to='/login'>
                        <AccountCircle />
                        <Typography color='white' textTransform='none' marginX={1}>Login</Typography>
                    </Button>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar