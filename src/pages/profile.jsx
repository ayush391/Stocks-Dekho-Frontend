import { Typography, Card, Stack, Avatar, CardContent, IconButton, Button, Box, TableContainer, Table, TableBody, TableRow, TableCell } from "@mui/material";
import CreateIcon from '@mui/icons-material/Create';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import CommentBankIcon from '@mui/icons-material/CommentBank';
import CardActionArea from '@mui/material/CardActionArea';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { Link } from 'react-router-dom'
import { Container } from "@mui/system";
import { AccountBalanceWallet, ArrowRight, History, HistoryRounded, MonetizationOn, Wallet } from "@mui/icons-material";
function Profile() {
    return (
        <Container maxWidth='sm'>
            <Box sx={{
                backgroundImage: 'linear-gradient(180deg, #7abbfc80,#7abbfc00 300px)',
                borderRadius: '20px',
                py: 1,
                my: 2
            }}>
                <Stack alignItems='center' sx={{ my: 2 }}>
                    <Avatar src="https://lens-storage.storage.googleapis.com/png/4cde995e-9c55-4ed0-8f6d-e9aebd5d5596" sx={{ width: '150px', height: '150px' }} />
                    <Typography variant="h5" textAlign='center'>Deepak Singh</Typography>
                    <Stack direction='column' flex={1} justifyContent='center' marginTop={2}>
                        <Typography variant="caption" textAlign='center'>Current Balance</Typography>
                        <Typography variant="h1" fontWeight='bold' textAlign='center'>₹16.55</Typography>
                    </Stack>
                </Stack>

                <Stack direction='row' gap={2} flex={1} justifyContent='center'>
                    <Button  size="large" sx={{ display: 'flex', flexDirection: 'column', backgroundColor: 'primary.light', textTransform: 'none' }}>
                        <Link to={'/transactionHistory'}>
                        <AccountBalanceWallet fontSize="large" color="primary" />
                        </Link>
                        <Typography variant="caption" display='block'>Transaction</Typography>
                    </Button>

                    <Button size="large" sx={{ display: 'flex', flexDirection: 'column', backgroundColor: 'primary.light', textTransform: 'none' }}>
                        <History fontSize="large" color="primary" />
                        <Typography variant="caption" display='block'>History</Typography>
                    </Button>

                    <Button size="large" sx={{ display: 'flex', flexDirection: 'column', backgroundColor: 'primary.light', textTransform: 'none' }}>
                        <MonetizationOn fontSize="large" color="primary" />
                        <Typography variant="caption" display='block'>Balance</Typography>
                    </Button>

                    <Button size="large" sx={{ display: 'flex', flexDirection: 'column', backgroundColor: 'primary.light', textTransform: 'none' }}>
                        <Wallet fontSize="large" color="primary" />
                        <Typography variant="caption" display='block'>Holdings</Typography>
                    </Button>
                </Stack>

                <Box marginY={5}>
                    <Typography variant="h5" fontWeight='bold' gutterBottom>
                        Recent Transactions</Typography>
                    <TableContainer component={Card} variant='outlined'>
                        <Table>
                            <TableBody>
                                <TableRow
                                    sx={{
                                        '&:hover': {
                                            backgroundColor: '#00000010'
                                        }
                                    }}
                                >
                                    <TableCell >

                                        <img src='https://download.logo.wine/logo/Paytm/Paytm-Logo.wine.png' width={50} />
                                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', fontWeight: 'bold', width: 100 }}>
                                            <Typography
                                                fontWeight='bold'
                                                sx={{
                                                    textOverflow: 'ellipsis', overflow: 'hidden'
                                                }}
                                            >
                                                PAYTM
                                            </Typography>
                                            <Typography
                                                variant='caption'

                                                sx={{
                                                    textOverflow: 'ellipsis', overflow: 'hidden'
                                                }}
                                            >
                                                One97 Communications
                                            </Typography>
                                        </Box>
                                    </TableCell>
                                    <TableCell align="right">
                                        <Stack alignItems='center'>
                                            <Typography
                                                variant='h5'

                                                sx={{
                                                    textOverflow: 'ellipsis', overflow: 'hidden'
                                                }}
                                            >
                                                ₹{4502.55}
                                            </Typography>

                                        </Stack>
                                    </TableCell>
                                </TableRow>
                                <TableRow
                                    sx={{
                                        '&:hover': {
                                            backgroundColor: '#00000010'
                                        }
                                    }}
                                >
                                    <TableCell >
                                        <img src='https://download.logo.wine/logo/Paytm/Paytm-Logo.wine.png' width={50} />

                                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', fontWeight: 'bold', width: 100 }}>
                                            <Typography
                                                fontWeight='bold'
                                                sx={{
                                                    textOverflow: 'ellipsis', overflow: 'hidden'
                                                }}
                                            >
                                                PAYTM
                                            </Typography>
                                            <Typography
                                                variant='caption'

                                                sx={{
                                                    textOverflow: 'ellipsis', overflow: 'hidden'
                                                }}
                                            >
                                                One97 Communications
                                            </Typography>
                                        </Box>
                                    </TableCell>
                                    <TableCell align="right">
                                        <Stack alignItems='center'>
                                            <Typography
                                                variant='h5'

                                                sx={{
                                                    textOverflow: 'ellipsis', overflow: 'hidden'
                                                }}
                                            >
                                                ₹{4502.55}
                                            </Typography>

                                        </Stack>
                                    </TableCell>
                                </TableRow>
                                <TableRow
                                    sx={{
                                        '&:hover': {
                                            backgroundColor: '#00000010'
                                        }
                                    }}
                                >
                                    <TableCell >
                                        <img src='https://download.logo.wine/logo/Paytm/Paytm-Logo.wine.png' width={50} />

                                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', fontWeight: 'bold', width: 100 }}>
                                            <Typography
                                                fontWeight='bold'
                                                sx={{
                                                    textOverflow: 'ellipsis', overflow: 'hidden'
                                                }}
                                            >
                                                PAYTM
                                            </Typography>
                                            <Typography
                                                variant='caption'

                                                sx={{
                                                    textOverflow: 'ellipsis', overflow: 'hidden'
                                                }}
                                            >
                                                One97 Communications
                                            </Typography>
                                        </Box>
                                    </TableCell>
                                    <TableCell align="right">
                                        <Stack alignItems='center'>
                                            <Typography
                                                variant='h5'

                                                sx={{
                                                    textOverflow: 'ellipsis', overflow: 'hidden'
                                                }}
                                            >
                                                ₹{4502.55}
                                            </Typography>

                                        </Stack>
                                    </TableCell>
                                </TableRow>
                                <TableRow
                                    sx={{
                                        '&:hover': {
                                            backgroundColor: '#00000010'
                                        }
                                    }}
                                >
                                    <TableCell >
                                        <img src='https://download.logo.wine/logo/Paytm/Paytm-Logo.wine.png' width={50} />

                                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', fontWeight: 'bold', width: 100 }}>
                                            <Typography
                                                fontWeight='bold'
                                                sx={{
                                                    textOverflow: 'ellipsis', overflow: 'hidden'
                                                }}
                                            >
                                                PAYTM
                                            </Typography>
                                            <Typography
                                                variant='caption'

                                                sx={{
                                                    textOverflow: 'ellipsis', overflow: 'hidden'
                                                }}
                                            >
                                                One97 Communications
                                            </Typography>
                                        </Box>
                                    </TableCell>
                                    <TableCell align="right">
                                        <Stack alignItems='center'>
                                            <Typography
                                                variant='h5'

                                                sx={{
                                                    textOverflow: 'ellipsis', overflow: 'hidden'
                                                }}
                                            >
                                                ₹{4502.55}
                                            </Typography>

                                        </Stack>
                                    </TableCell>
                                </TableRow>

                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>

            </Box>
        </Container >
    )
}

export default Profile;
