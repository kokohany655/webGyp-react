import { Box, Button, Flex, HStack, IconButton, Text, useColorMode } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import {FaSun , FaMoon } from 'react-icons/fa'


function NavBar() {
    const {colorMode , toggleColorMode}=useColorMode()
  const isDark = colorMode === 'dark'
  return (
    <HStack w={'100%'}  justifyContent='space-between' mb='80px'>
        <Link to='/' alignSelf='flex-start'>
            <Text  fontWeight={'bold'} fontSize={'4xl'} as='button' bgGradient={'linear(to-r ,cyan.400 ,blue.500 ,purple.600)'} bgClip='text'>Gym</Text>
        </Link>
        <Flex>
        
        <Box>
            <Text as={Button} bgColor='transparent' color={'blue.200'}>
                Home
            </Text>
        </Box>
        <Box>
            <Text as={Button} ml='20px' bgColor='transparent' color={'blue.200'}>
                Exercises
            </Text>
        </Box>
        <IconButton   ml='8' icon={isDark ?<FaSun/> : <FaMoon/>} onClick={toggleColorMode} isRound={true} ></IconButton>
        </Flex>
    </HStack>
  )
}

export default NavBar