import {
  Avatar,
  Box,
  Container,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography
} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const LeaderBoard = () => {
  return (
    <Container>
      {/* <Typography variant="h3" fontWeight="bold" align="center">
        Leaderboard
      </Typography> */}
      <Stack
        direction="row"
        justifyContent="center"
        gap={0}
        marginTop={10}
        sx={{
          backgroundImage: 'linear-gradient(180deg, #7abbfc00,#7abbfc80 500px)',
          borderRadius: '20px',
          py: 5
        }}>
        <Stack alignItems="center" sx={{ zIndex: '0' }}>
          <Typography variant="h5" fontWeight="bold">
            2nd
          </Typography>
          <Avatar
            src="https://i.imgur.com/2bvab7y.jpeg"
            sx={{
              height: 100,
              width: 100,
              borderColor: 'primary.main',
              boxShadow: '10px',
              borderWidth: 4,
              borderStyle: 'solid',
              zIndex: '0'
            }}
          />
          <Typography variant="caption">@ayush</Typography>
          <Typography variant="body1" fontWeight="bold" color="primary">
            2000
          </Typography>
        </Stack>
        <Stack alignItems="center" sx={{ transform: 'translateY(-20%) scale(170%)', zIndex: '1' }}>
          <Typography variant="h5" fontWeight="bold">
            1st
          </Typography>
          <Avatar
            src="https://i.imgur.com/rRiBj9B.jpeg"
            sx={{
              //   transform: 'scale(170%)',
              height: 80,
              width: 80,
              borderColor: 'primary.main',
              boxShadow: '10px',
              borderWidth: 4,
              borderStyle: 'solid',
              boxShadow: '0 0 30px #7abbfc'
            }}
          />
          <Typography variant="caption" sx={{ fontSize: 8 }}>
            @deepak
          </Typography>
          <Typography variant="caption" fontWeight="bold" color="primary">
            8021
          </Typography>
        </Stack>

        <Stack alignItems="center" sx={{ zIndex: '0' }}>
          <Typography variant="h5" fontWeight="bold">
            3rd
          </Typography>
          <Avatar
            src="https://i.imgur.com/laucyTf.jpeg"
            sx={{
              height: 100,
              width: 100,
              borderColor: 'primary.main',
              boxShadow: '10px',
              borderWidth: 4,
              borderStyle: 'solid',
              zIndex: '0'
            }}
          />
          <Typography variant="caption">@parth</Typography>
          <Typography variant="body1" fontWeight="bold" color="primary">
            1850
          </Typography>
        </Stack>
      </Stack>

      <Container maxWidth="sm">
        <TableContainer variant="outlined">
          <Table>
            <TableBody>
              <TableRow
                sx={{
                  '&:hover': {
                    backgroundColor: '#00000010'
                  }
                }}>
                <TableCell>
                  {/* <img
                      src={
                        logItem.icon || 'https://download.logo.wine/logo/Paytm/Paytm-Logo.wine.png'
                      }
                      width={50}
                    /> */}
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                      fontWeight: 'bold',
                      width: 150,
                      gap: 2
                    }}>
                    <Avatar
                      src="https://i.imgur.com/2bvab7y.jpeg"
                      sx={{
                        height: 50,
                        width: 50
                      }}
                    />
                    <Typography
                      component={Link}
                      to={'/'}
                      fontWeight="bold"
                      sx={{
                        color: 'primary.main',
                        textOverflow: 'ellipsis',
                        overflow: 'hidden',
                        ':visited': {
                          color: 'primary.main'
                        }
                      }}>
                      @deepak
                    </Typography>
                  </Box>
                </TableCell>

                <TableCell align="right">
                  <Stack alignItems="flex-start">
                    <Typography variant="h6">720</Typography>
                  </Stack>
                </TableCell>
              </TableRow>
              <TableRow
                sx={{
                  '&:hover': {
                    backgroundColor: '#00000010'
                  }
                }}>
                <TableCell>
                  {/* <img
                      src={
                        logItem.icon || 'https://download.logo.wine/logo/Paytm/Paytm-Logo.wine.png'
                      }
                      width={50}
                    /> */}
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                      fontWeight: 'bold',
                      width: 150,
                      gap: 2
                    }}>
                    <Avatar
                      src="https://i.imgur.com/2bvab7y.jpeg"
                      sx={{
                        height: 50,
                        width: 50
                      }}
                    />
                    <Typography
                      component={Link}
                      to={'/'}
                      fontWeight="bold"
                      sx={{
                        color: 'primary.main',
                        textOverflow: 'ellipsis',
                        overflow: 'hidden',
                        ':visited': {
                          color: 'primary.main'
                        }
                      }}>
                      @deepak
                    </Typography>
                  </Box>
                </TableCell>

                <TableCell align="right">
                  <Stack alignItems="flex-start">
                    <Typography variant="h6">720</Typography>
                  </Stack>
                </TableCell>
              </TableRow>
              <TableRow
                sx={{
                  '&:hover': {
                    backgroundColor: '#00000010'
                  }
                }}>
                <TableCell>
                  {/* <img
                      src={
                        logItem.icon || 'https://download.logo.wine/logo/Paytm/Paytm-Logo.wine.png'
                      }
                      width={50}
                    /> */}
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                      fontWeight: 'bold',
                      width: 150,
                      gap: 2
                    }}>
                    <Avatar
                      src="https://i.imgur.com/2bvab7y.jpeg"
                      sx={{
                        height: 50,
                        width: 50
                      }}
                    />
                    <Typography
                      component={Link}
                      to={'/'}
                      fontWeight="bold"
                      sx={{
                        color: 'primary.main',
                        textOverflow: 'ellipsis',
                        overflow: 'hidden',
                        ':visited': {
                          color: 'primary.main'
                        }
                      }}>
                      @deepak
                    </Typography>
                  </Box>
                </TableCell>

                <TableCell align="right">
                  <Stack alignItems="flex-start">
                    <Typography variant="h6">720</Typography>
                  </Stack>
                </TableCell>
              </TableRow>
              <TableRow
                sx={{
                  '&:hover': {
                    backgroundColor: '#00000010'
                  }
                }}>
                <TableCell>
                  {/* <img
                      src={
                        logItem.icon || 'https://download.logo.wine/logo/Paytm/Paytm-Logo.wine.png'
                      }
                      width={50}
                    /> */}
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                      fontWeight: 'bold',
                      width: 150,
                      gap: 2
                    }}>
                    <Avatar
                      src="https://i.imgur.com/2bvab7y.jpeg"
                      sx={{
                        height: 50,
                        width: 50
                      }}
                    />
                    <Typography
                      component={Link}
                      to={'/'}
                      fontWeight="bold"
                      sx={{
                        color: 'primary.main',
                        textOverflow: 'ellipsis',
                        overflow: 'hidden',
                        ':visited': {
                          color: 'primary.main'
                        }
                      }}>
                      @deepak
                    </Typography>
                  </Box>
                </TableCell>

                <TableCell align="right">
                  <Stack alignItems="flex-start">
                    <Typography variant="h6">720</Typography>
                  </Stack>
                </TableCell>
              </TableRow>
              <TableRow
                sx={{
                  '&:hover': {
                    backgroundColor: '#00000010'
                  }
                }}>
                <TableCell>
                  {/* <img
                      src={
                        logItem.icon || 'https://download.logo.wine/logo/Paytm/Paytm-Logo.wine.png'
                      }
                      width={50}
                    /> */}
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                      fontWeight: 'bold',
                      width: 150,
                      gap: 2
                    }}>
                    <Avatar
                      src="https://i.imgur.com/2bvab7y.jpeg"
                      sx={{
                        height: 50,
                        width: 50
                      }}
                    />
                    <Typography
                      component={Link}
                      to={'/'}
                      fontWeight="bold"
                      sx={{
                        color: 'primary.main',
                        textOverflow: 'ellipsis',
                        overflow: 'hidden',
                        ':visited': {
                          color: 'primary.main'
                        }
                      }}>
                      @deepak
                    </Typography>
                  </Box>
                </TableCell>

                <TableCell align="right">
                  <Stack alignItems="flex-start">
                    <Typography variant="h6">720</Typography>
                  </Stack>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Container>
  );
};

export default LeaderBoard;
