import { Avatar, Button, Center, Container, HStack, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Profile = () => {
  return (
    <Container minH={'95vh'} maxW='container.lg' py={'8'}>
            <Heading children="Profile" m="8" textTansform={'uppercase'} />
            <Stack padding="8" justifyContent={'flex-start'} direction={["column","row"]}>
                <VStack>
                    <Avatar boxSize={'48'}/>
                    <Button variant='Ghost'>
                        Change Photo
                    </Button>
                </VStack>
                <VStack spacing={'4'} alignItems={['center', 'flex-start']}>
                    <HStack>
                        <Text children="Name" fontWeight = {'bold'}/>
                        <Text childrern={user.name}/>
                    </HStack>
                    <HStack>
                        <Text children="CreatedAt" fontWeight = {'bold'}/>
                        <Text childrern={user.CreatedAt.split('T')[0]}/>
                    </HStack>
                    {
                        user.role !=='admin' && (
                    <HStack>
                        <Text children="Subscription" fontWeight = {'bold'}/>
                        {user.subscription.status ==='active'? (
                            
                            <Button>Cancel Subscription</Button>
                            

                        ):(
                            <Link to='/subscribe'>
                            <Button>Subscribe</Button>
                            </Link>
                        )}
                        <Text childrern={user.name}/>
                    </HStack>
                        )
                    }
                    <Stack direction={['column','row']} alignItems={'center'}>
                        <Link to='/updateprofile'>
                            <Button>Update Profile</Button>
                        </Link>
                        <Link to='/changepassword'>
                            <Button>Change Password</Button>
                        </Link>
                    </Stack>
                    
                </VStack>
            </Stack>
            <Heading size={'md'} my={'10'}>Playlist</Heading>
    </Container>
  )
}

export default Profile