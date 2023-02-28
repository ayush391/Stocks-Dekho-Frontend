
import { Card , CardBody , CardFooter} from "@chakra-ui/react"
import { Stack  } from "@chakra-ui/react"
import { Button , Heading , Text , Image } from "@chakra-ui/react"
export const StockNews=(props)=>{

    const stock = props.items
    // console.log(stock)
    return(
        <div style={{marginBottom:10}}>
            <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        >
        <Image
            objectFit='cover'
            maxW={{ base: '100%', sm: '200px' }}
            src={ stock.urlToImage || 'https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'}
            
        />

        <Stack>
            <CardBody>
            <Heading size='md'>{stock.title}</Heading>

            <Text py='2'>
               {stock.description}
            </Text>
            </CardBody>

            {/* <CardFooter>
            <Button variant='solid' colorScheme='blue'>
                Buy Latte
            </Button>
            </CardFooter> */}
        </Stack>
        </Card>

        </div>
    )
}