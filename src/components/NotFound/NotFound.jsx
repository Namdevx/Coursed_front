import { Button, Container, VStack } from '@chakra-ui/react'
import React from 'react'

const NotFound = () => {
  return (
    <Container>
      <VStack justifyContent={'center'} h={'full'} spacing={'4'}>
        <RiErrorWarningFill size={'5rem'}/>
        <Heading> Page Not Found </Heading>
        <Link to='/'>
          <Button variant={'ghost'}>
            Go to Home
          </Button>
        </Link>
      </VStack>
    </Container>
  )
}

export default NotFound