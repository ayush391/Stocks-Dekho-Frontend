
import { Box, Card, CardContent, CardHeader, CardMedia, Stack, Typography } from "@mui/material"
import { height } from "@mui/system"
export const NewsCard = (props) => {

    return (
        <Card
            variant='outlined'
            sx={{
                width: "100%",
                height: '100%',
                // backgroundImage: 'linear-gradient(0deg, #7abbfc30,#7abbfc00)',

            }}
        >
            <Stack
                justifyContent="space-between"
            >
                <CardMedia
                    component="img"
                    src={props.urlToImage}
                    sx={{
                        height: '200px',
                    }}
                />
                <CardContent sx={{
                }}>
                    <Stack
                        justifyContent="space-between"
                    >

                        <Typography variant="body1" height='100px'
                            textOverflow='ellipsis'
                        >
                            {props.title}
                        </Typography>
                        <Typography variant="caption" textAlign='right' justifySelf='flex-end'>
                            {new Date(props.publishedAt).toDateString()}
                        </Typography>
                    </Stack>
                </CardContent>
            </Stack >

        </Card >
    )
}