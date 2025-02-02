import { Button, Container, VStack } from '@chakra-ui/react'
import React from 'react'

const PF = () => {
  return (
    <Container>
      <VStack justifyContent={'center'} h={'full'} spacing={'4'}>
        <RiErrorWarningFill size={'5rem'}/>
        <Heading> Payment Failed </Heading>
        <Link to='/'>
          <Button variant={'ghost'}>
            Try Again ?
          </Button>
        </Link>
      </VStack>
    </Container>
  )
}

export default PF