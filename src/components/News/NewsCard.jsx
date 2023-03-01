
import { Box, Card, CardContent, CardHeader, CardMedia, Typography } from "@mui/material"
import { Stack } from "@mui/material"
export const NewsCard = (props) => {

    return (
        <Card
            variant='elevation'
            sx={{
                width: "280px"
            }}
        >
            <Box
                display='flex'
                flexDirection='column'
            >
                <CardMedia
                    component="img"
                    src={props.urlToImage}
                    sx={{
                        height: '200px',
                    }}
                />

                <CardContent sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                }}>
                    <Typography variant="h7" fontWeight='bold' >
                        {props.title}
                    </Typography>
                    <Typography variant="caption" textAlign='right' justifySelf='flex-end'>
                        {new Date(props.publishedAt).toDateString()}
                    </Typography>

                </CardContent>
            </Box>
        </Card >
    )
}