import {Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import ProfileImage from '../assets/WhatsApp_Image_2022-10-16_at_7.01.41_AM-removebg-preview.png'

function HeroBanner() {



  return (
    <Flex  justifyContent={'space-between'} direction={{base:'column' , sm:'row'}}>
    <Box alignSelf={'flex-start'} mt='60px' >
        
        <Heading as='h6'color='blue.300' fontSize={'30'}>
            Fitness Club
        </Heading>
        <Text fontWeight={'semibold'} fontSize='40px'>
            Sweat, Smile <br/>And Repeat
        </Text>
        <Text lineHeight='40px' mb={5} opacity='.9' fontWeight={'semibold'}>
            Check out the most effective exercises personal
        </Text>
        <Button colorScheme={'blue'} >Explore Exercises</Button>
        
    </Box>
    <Box justifyContent={{sm:'center', lg:'flex-end'}} display='flex' mt={{base:'40px'}}>
    <Image src={ProfileImage}  h={{lg:'480px' , xl:"500px" , sm:'400px',}} mt/>
    </Box>
    </Flex>
  )
}

export default HeroBanner