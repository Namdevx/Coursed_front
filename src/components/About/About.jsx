import { Avatar, Container, HStack, Heading, Stack, VStack } from '@chakra-ui/react'
import React from 'react'

const Founder = ( ) => (
    <Stack direction={['column', 'row']}
    spacing = {['4','16']}
    padding = {'8'}>

    <VStack>
        <Avatar boxShadow={['40',48]}/>
        <Text children="Co-founder" opacity='0.7'/>

    </VStack>
    <VStack justifyContent={"center"} alignItems={["center", "flex-start"]}>
        <Heading children="Shubham Gaur" size={['md','xl']}/>
        <Text textAlign={["center", "left"]} children={'mai ninja hattori'} />
    </VStack>
    </Stack>
);

const VP =()=>(
    <Video src=""> </Video>
)

const TandC = () => (
    <Box>
        <Heading size={'md'} children="T&C" textAlign={["center", "left"]} my={'4'}/>
        <Box h="sm" p="4" >
            <Text fontFamily={'headig'} letterSpacing={'widest'} textAlign={["center", "left"]}>
             {termsAndCondition}   
             </Text>
             {/* <Heading */}
        </Box>
    </Box>
)

const About = () => {
  return (
    <Container maxW={'container.lg'} padding  boxsShadow = {'lg'} >
        <Heading children='ABout us' textAlign={['center', 'left']}/>

        <Founder />
        <Stack m={'8'} direction={['column','row']} alignItems={'center'}>
            <Text fontFamily = {"cursive"} m="8" textAlign={["center","left" ]}>

            </Text>
        </Stack>

        <Link to="/subscribe">
            <Button variant="ghost" colorScheme="yellow">
                Checkout our plans
            </Button>
        </Link>
        <VP/>
        <TandC termsAndCondition={'termsAndCondition'} />

        <HStack my={'4'} p={'4'}>
            <RiSecurePaymentFill />
            <Heading size={"xs"} fontFamily="sans-serif" children="Payment is secured by RazorPay"/>
        </HStack>

    </Container>
  )
}

export default About