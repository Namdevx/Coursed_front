import { Avatar, Box, Button, Center, Container, FormLabel, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import { Form } from 'formik'

const Register = () => {
    const [email , setEmail] = useState('');
    const [name, setName]   = useState('');
    const [password, setPassword] = useState('');
    const [imagePrev, setImagePrev] = useState('');

    const changeImageHandler = (e)  => {
        const file = e.target.value[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImagePrev(reader.result);
        };
    };

  return (
  <Container h={'95'}>
    <VStack h={'full'} justifyContent="center">
        <Heading children={'Registration'} spacing={'16'}/>

        <form style={{width : '100%'}}>
            <Box my={'4'} display={'flex'} justifyContent={'center'} >
                <Avatar src={imagePrev} size={'2xl'}/>
            </Box>
        <Box my={'4'}>
            <FormLabel htmlFor = "name" children = "name"/>
            <Input required id='name' value={name} onChange={e => setName(e.target.value)} placeholder="Name" type={'text'} focusBorderColor='yellow.500'/>
            </Box>

            <Box my={'4'}>
            <FormLabel htmlFor = "email" children = "email add."/>
            <Input required id='email' value={email} onChange={e => setEmail(e.target.value)} placeholder="abc@gmail.com" type={'email'} focusBorderColor='yellow.500'/>
            </Box>
            
            <Box my={'4'}>
            <FormLabel htmlFor = "password" children = "password add."/>
            <Input required id='password' value={password} onChange={e => setPassword(e.target.value)} placeholder="password" type={'password'} focusBorderColor='yellow.500'/>
            </Box>
            <Box my={'4'}>
                <FormLabel htmlFor="chooseAvatar" children="Choose Avatar"/>
                <Input accept="image" required id="chooseAvatar" type={"file"} focusBorderColor = "yellow.500" />
            </Box>
            <Box>
                <Link to="/forgetpassword">
                    <Button fontSize={'sm'} variant="link">
                        Forget Password?
                    </Button>
                </Link>

            </Box>
            <Button my={'4'} colorScheme={'yellow'} type='submit'>
                Logins
            </Button>

            <Box my={"4"}>
                New User?{' '} 
                <Link to="/register">
                    <Button colorScheme='yellow' variant="link">
                        Sign Up
                    </Button>
                    here
                </Link>
            </Box>
        </form>
        </VStack>
  </Container>
    )
 
}

export default Register