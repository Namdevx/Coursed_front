import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

const ResetPassword = () => {
  const [password, setPassword  ] = useState(''); 
  const params = useParams(); 
  return (
    <Container py={"16"} h="90vh">
        <form>
            <Heading children="fp" my={"16"} textTransform={"uppercase"} 
            textAlign= {['center', 'left']}/>

            <VStack spacing={"8"}>
                <Input required id="email" value={password} onChange={e=> setPassword(e.target.value)} placeholder="New Password" type={'email'} focusBorderColor = "yellow.500" />

            </VStack>
            <Button type='submit' w={'full'} colorScheme='yellow'>
                Reset Password
            </Button>
        </form>
    </Container>
  )
}

export default ResetPassword