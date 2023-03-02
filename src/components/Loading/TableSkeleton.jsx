import { Box, Card, Skeleton, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material'
import React from 'react'

const TableSkeleton = () => {
    return (
        <TableContainer component={Card} >
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell >
                            <Skeleton variant="text" />
                        </TableCell>
                        <TableCell align="right">
                            <Skeleton variant="text" />
                        </TableCell>
                        <TableCell align="right">
                            <Skeleton variant="text" />
                        </TableCell>
                        <TableCell align="right">
                            <Skeleton variant="text" />
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>


        </TableContainer>
    )
}

export default TableSkeleton