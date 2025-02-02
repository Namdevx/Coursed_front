import { Box, Button, Container, Heading, Input, Textarea } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

  return (
    <Container h='90vh' >
        <VStack h='full' justifyContent={'center'} spacing={"16"}>
            <Heading children="contact us"/>
            <form style={{width : '100%'}}>
            <Box my={'4'}>
            <FormLabel htmlFor = "name" children = "Name"/>
            <Input required id='name' value={email} onChange={e => setName(e.target.value)} placeholder="Name" type={'text'} focusBorderColor='yellow.500'/>
            </Box>
            <Box my={'4'}>
            <FormLabel htmlFor = "email" children = "email"/>
            <Input required id='email' value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" type={'email'} focusBorderColor='yellow.500'/>
            </Box>
            <Box my={'4'}>
            <FormLabel htmlFor = "Message" children = "Message"/>
            <Textarea required id='Message' value={message} onChange={e => setMessage(e.target.value)} placeholder="Message" focusBorderColor='yellow.500'/>
            </Box>
              
            <Button my={'4'} colorScheme={'yellow'} type='submit'>
                Send Message
            </Button>
{/* REQUEST page banana hai */}
            {/* <Box my={"4"}>
                New User?{' '} 
                <Link to="/register">
                    <Button colorScheme='yellow' variant="link">
                        Sign Up
                    </Button>
                    here
                </Link>
            </Box> */}
        </form>
        </VStack>
    </Container>
  )
}

export default Contact