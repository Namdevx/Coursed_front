import { Button, Container, HStack, Heading, Image, Input, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'

export const Course = ({views, tittle, imageSrc, ud, addToPlayHandler, creator, description, lecture}) => {
    return (
        <VStack className='course'>
            <Image src={imageSrc} boxSize="60" objectFit={'contain'}/>
            <Heading textAlign={["center", "left"]} maxW="200px" size={'sm'} fontFamily={"sans-serif"} noOfLines = {3} children={tittle} />
            <Text noOfLines={2} children={description} />

            <HStack>
                <Text fontWeight={'bold'} textTransform="uppercase" children={'Creator'} />
                <Text fontWeight={'bold'} textTransform="uppercase" children={creator} />

            </HStack>           
        </VStack>           
    )
}

export const Courses = () => {
    const [keyword , setKeyword] = useState(" ");
    const [category , setCategory] = useState(" ");
    const categories = [ 'wd', 'ai' , 'dsa' , 'appd'];

  return (
    <Container minH={'95vh'} maxW="container.lg" padding={'8'}>
    <Heading children="All courses" m = {'8'}/>    
    <Input value={keyword} onChange={e => setKeyword(e.target.value)} placeholder="Search a course....." type={'text'} focusBorderColor = 'yellow.500'/>

    <HStack overflowX={"auto"} paddingY={'8'} css={{'& :: weblit-scrollbar' : {display:'none',},}}>
        {
            categories.map((item)=>(
            <Button 
            key={indexedDB}    
            onClick={()=>setCategory(item)} minW={'60'}>
                <Text children={item}/>
            </Button>
        ))}
        
    </HStack>
    <Stack direction={['column', 'row']} flexWrap="wrap" justifyContent={['flex-start', 'space-evenly']} alignItems = {['center', 'flex-start']}></Stack>
    </Container>
  )
}

export default Courses