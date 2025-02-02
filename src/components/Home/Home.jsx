import React from 'react';
import { Box, Button, HStack, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import './home.css';
// import { CgGoogle } from 'react-icons/cg'


export const Home = () => {
  return (
    <section className='home'>
        <div className='container'>
            <Stack direction={["column","row"]} height="100%" justifyContent={["center", "flex-end"]} alignItems="center" spacing={["16","56"]}>
                <VStack width={"full"}>
                    <Heading children="learn" size={'2xl'}>
                        <Text children="DLK"/>
                        <Link to="/courses">
                            <Button size={"lg"} colorScheme='yellow'>
                                Explore
                            </Button>
                        </Link>
                    </Heading>
                </VStack> 
            </Stack>
        </div>

        <Box>
            <Heading textAlign={'center'} fontFamily={"body"} color={'yellow.400'} children="Our Brands"/>
            <HStack className='brandsbanner' justifyContent={'space-evenly'} marginTop="4">
                {/* <CgGoogle/> */}
            </HStack>
        </Box>
        <div className='container2'>
            <video autoPlay controls controlsList="nofullscreen noremoteplayback" src=''></video>
        </div>
    </section>
  )
}

export default Home