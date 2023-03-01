
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
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 2
                }}
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
                }}>
                    <Typography variant="h6" fontWeight='bold'>
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