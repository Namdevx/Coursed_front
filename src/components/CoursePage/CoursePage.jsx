import { Box, Grid, Text, VStack } from '@chakra-ui/react'
import React from 'react'


const CoursePage = () => {
    const [lectureNumber,setLecturNumer]=0;
  return (
    <Grid minH="90vh" templateColumns={['1fr', '3fr 1fr']}>

        <Box>
            <video width={'100%'} controls controlsList = "no download noremoteplayback"
            disablePictureInPicture disableRemotePlayback src={''}>

            </video>

            <Heading m="4" children={`${lectureNumber+1} ${lectures[lectureNumber].title}`}/>
            <Heading m={'4'} children={lectures[lectureNumber].description}/>
            <Text m='4'children={lectures[lectureNumber]}/>
        </Box>

        <VStack>
            {
                lectures.map((element,index)=(
                    <button 
                    onClick={()=> setLecturNumer(index)}  key={element._id} style={{
                        width:"100%",
                        padding:"irem",
                        textAlign:"center",
                        margin:0,
                        borderBottom:"1px solid rgba(0,0,0,0.2",
                    }}>
                        <Text noOfLines={'1'}>
                            {index+1} {element.tittle}
                        </Text>
                    </button>
                ))
            }
        </VStack>
    </Grid>
  )
}

export default CoursePage