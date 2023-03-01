import { AccountCircle } from '@mui/icons-material'
import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'
import SearchBar from './SearchBar'

const Navbar = () => {
    return (
        <>
            <AppBar position='sticky' color='transparent' elevation='0' sx={{
                top: 0,
                backgroundImage: 'linear-gradient(45deg,#73b9ff,#73b9ff20)',
                backdropFilter: 'blur(5px)'
            }}>
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

                    <Button variant='contained' disableElevation component={Link} to='/login'
                        sx={{
                            backgroundColor: 'linear-gradient(55deg,#73b9ff,#73b9ff20)'
                        }}
                    >
                        <AccountCircle />
                        <Typography color='white' textTransform='none' marginX={1}>Login</Typography>
                    </Button>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar