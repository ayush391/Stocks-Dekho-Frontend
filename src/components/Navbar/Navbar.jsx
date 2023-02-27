import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'
import Search from './Search'
import SearchBar from './SearchBar'

const Navbar = () => {
    return (
        <>
            <AppBar position='sticky' sx={{ top: 0 }}>
                <Toolbar>
                    <Typography>Stocks Dekho</Typography>
                    <Search />

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar