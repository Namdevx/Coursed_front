import React from 'react'
import { ColorModeSwitcher } from "../../../ColorModeSwitcher";
import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, HStack, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const LinkB = ({url = "/", tittle = "Home"}) => {
    <Link to={url} title={tittle}/>
}

const isAuth= false;
// const user 

const Header = () => {
  return (
    <>
    <ColorModeSwitcher/>

    <Drawer placement="left" 
    // onClose={onClose} isOpen={isOpen}
    >
        <DrawerOverlay/>
        <DrawerContent>
            <DrawerHeader borderBottomWidth={'1px'}>COURSED</DrawerHeader>
            <DrawerBody>
                <VStack spacing={'4'} alignItems="flex-start">
                <LinkB url="/" tittle="Home"/>
                <LinkB url="/" tittle="Home"/>
                <LinkB url="/" tittle="Home"/>
                <LinkB url="/" tittle="Home"/>
                <LinkB url="/" tittle="Home"/>

                <HStack justifyContent={'space-evenly'} position={'absolute'} bottom={'2rem'} width="80%"> 
                    {isAuth? <>
                    <VStack>
                        <HStack>
                            <Link to='/profile'>
                                <Button variant={'ghost'} colorScheme='yellow'>
                                    Profile
                                </Button>
                            </Link>
                            <Button variant={'ghost'} colorScheme='yellow'>
                                    Logout
                                </Button>
                        </HStack>
                        {/* { user 
                        && user.role=== 'admin'
                         && (
                            <Link to='/admin/dashboard' >
                                <Button colorScheme='purple' variant={'ghost'}>
                                    Dashboard
                                </Button>
                            </Link>
                        )} */}
                        </VStack></>: 
                        <HStack></HStack> }
                </HStack>
                </VStack>
            </DrawerBody>
        </DrawerContent>
    </Drawer>
    </>
  )
}

export default Header