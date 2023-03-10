
import { Box, Card, CardContent, CardHeader, CardMedia, Stack, Typography } from "@mui/material"
import { height } from "@mui/system"
export const NewsCard = (props) => {

    return (
        <Card
            variant='outlined'
            sx={{
                width: "100%",
                minWidth: '250px',
                height: '100%',
                backgroundImage: `url(${props.urlToImage})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                borderRadius: '20px',
                // backgroundImage: 'linear-gradient(0deg, #7abbfc30,#7abbfc00)',
                display: 'flex',
                flexDirection: 'column'

            }}
        >
            <Stack
                justifyContent="flex-end"
                sx={{
                    height: '100%',
                    flex: 1,
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
                    backdropFilter: 'blur(10px) brightness(50%)',
                    color: '#fff',

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