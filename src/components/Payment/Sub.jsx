import { Box, Container, Heading, VStack } from '@chakra-ui/react'
import React from 'react'

const Sub = () => {
  return (
    <Container>
        <Heading children="Welcome" my={'8'} textAlign={'center'}/>
        <VStack boxShadow={'lg'} alignItems={"stretch"} borderRadius={'lg'} spacing={'0'}>
            <Box bg={'yellow.400'} p={'4'} css={{borderRadius:'8px spx 0 0 '}}>
                <Text children={'Pro Pack - 299'}/>
            </Box>
            <Box p={"4"}>
                <VStack>
                    <Text color="black" children={"   hh"}/>
                    <Heading size='md' children={"dfh"}/>
                </VStack>
            </Box>
            <Box bg="blackAlpha.600" p={"4"} css={{borderRadius: '0 0 8px 8px'}}>
                <Heading color={'white'} textTransform={'uppercase'} size={'sm'} children={"100% percent ret"}/>
                <Text fontSize={'xs' } color="white" children=''/>
            </Box>
        </VStack>
    </Container>
  )
}

export default Sub