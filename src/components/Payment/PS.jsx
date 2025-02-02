import { Box, Button, Container, Heading, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const PS = () => {
  return (
    <Container h={'90vh'} p={16}>
        <Heading my={'8'} textAlign={"center"} children={'u ha f'}/>
        <VStack boxShadow={'lg'} pb={'16'} alignItems={'center'} borderRadius={'lg'} >
            <Box w={'full'} bg={'yellow.400'} p="4">
                <Text>Payment  Success</Text>
            </Box>
            <Box p='4'>
                <VStack textAlign={'center'} px={'8'} spacing={'8'}>
                <Text
                    children="Congrats, PRO .... <3"
                />
 
                <Heading children={<RiCheckboxCircleFill/>}/> 

                </VStack>
            </Box>

            <Link to="/profile">
                <Button variant="ghost">
                    go to profile
                </Button>
            </Link>
            <Heading size={'xs'} children={'Reference : 575adfs77ggsfg778'}/>

        </VStack>
    </Container>
  )
}

export default PS