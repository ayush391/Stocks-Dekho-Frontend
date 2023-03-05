import { Box, Card, Skeleton, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material'
import React from 'react'

const TableSkeleton = ({ rows = 5, columns = 4 }) => {
    return (
        <TableContainer component={Card} variant='outlined'>
            <Table>
                <TableBody>
                    {
                        [...Array(rows)].map(() => {
                            return (
                                <TableRow>
                                    {
                                        [...Array(columns)].map((val, idx) => {

                                            return (
                                                <TableCell width={idx ? 10 : 100} height={50}>
                                                    <Typography>
                                                        <Skeleton variant="rounded" />
                                                    </Typography>
                                                </TableCell>
                                            )
                                        }
                                        )
                                    }
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>


        </TableContainer>
    )
}

export default React.memo(TableSkeleton)