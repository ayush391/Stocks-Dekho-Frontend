import { AccountCircle } from '@mui/icons-material'
import { AppBar, Button, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'
import Hamburger from 'hamburger-react'
import { useState, useEffect } from 'react'
import TemporaryDrawer from './Slidebar'
import { getAuth, signOut } from "firebase/auth";
import { app } from '../Firebase'
import { Avatar } from '@chakra-ui/react'
import { useAuthState } from "react-firebase-hooks/auth";

const Navbar = () => {
    const [isOpen, setOpen] = useState(false)
    const [loggedIn, setLoggedIn] = useState(false)
    const auth = getAuth(app)
    const [user, loading, error] = useAuthState(auth);

    const RenderSideBar = (props) => {

        if (props.condition) {

            return (<TemporaryDrawer />)

        }

    }
    const Logout = () => {
        // user = getAuth(app)
        if (user != null) {

            signOut(auth).then(() => {
                console.log('logging out')
                setLoggedIn(false)
            }).catch(e => alert(e))
        }
    }
    const LoggedInComponent = () => {
        return (
            <>
                <Avatar style={{ maxWidth: 50 }} src='#' onClick={Logout} />
            </>
        )
    }
    const RenderComponent = (props) => {
        const user = getAuth(app)
        if (user.currentUser != null) {
            return <LoggedInComponent />
        } else {
            return (
                <>
                    <IconButton size='small' variant='contained' disableElevation component={Link} to='/login'
                        sx={{
                            backgroundColor: 'linear-gradient(55deg,#73b9ff,#73b9ff20)'
                        }}

                    >
                        <AccountCircle fontSize='large' color='info' />
                        {/* <Typography color='white' textTransform='none' marginX={1}>Login</Typography> */}
                    </IconButton>
                </>
            )
        }
    }
    useEffect(() => {

        if (loading) {

        } else {
            const user = getAuth(app)
            console.log(user.currentUser)
            if (user.currentUser != null) {
                setLoggedIn(true)
            } else {
                setLoggedIn(false)
            }
        }
    }, [user, loading])
    return (
        <>
            <AppBar position='sticky' color='transparent' elevation={0} sx={{
                top: 0,
                backgroundImage: 'linear-gradient(45deg,#73b9ff,#73b9ff40)',
                backdropFilter: 'blur(5px)'
            }}>
                <Button variant='text' component={Link} to='/'>
                    <Typography variant='h4' fontWeight='bold' color='white' textTransform='none'
                        fontFamily='Righteous'
                    >StoxDekho</Typography>
                </Button>
                <Toolbar
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: 3
                    }}
                >
                    <Stack direction='row'>
                        <Hamburger color='white' toggled={isOpen} toggle={setOpen} />
                        {/* <Button variant='text' component={Link} to='/'>
                            <Typography variant='h5' fontWeight='bold' color='white' textTransform='none'
                                fontFamily='Righteous'
                            >StoxDekho</Typography>
                        </Button> */}
                    </Stack>

                    <Search />

                    <RenderComponent loggedIn={loggedIn} />
                </Toolbar>
                <TemporaryDrawer open={isOpen} onClose={() => setOpen(false)} />
            </AppBar>
            {/* <RenderSideBar condition={isOpen} onClose={() => setOpen(false)} /> */}
        </>
    )
}

export default Navbar