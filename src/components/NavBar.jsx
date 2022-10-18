import { Button, Flex, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'


function NavBar() {
  return (
    <HStack w={'100%'}  justifyContent='space-between' mb='80px'>
        <Link to='/' alignSelf='flex-start'>
            <Text  fontWeight={'bold'} fontSize={'4xl'} as='button' bgGradient={'linear(to-r ,cyan.400 ,blue.500 ,purple.600)'} bgClip='text'>Gym</Text>
        </Link>
        <Flex>
        
        <Link to='/' >
            <Text as={Button} bgColor='transparent' color={'blue.200'}>
                Home
            </Text>
        </Link>
        <Link to='/'>
            <Text as={Button} ml='20px' bgColor='transparent' color={'blue.200'}>
                Exercises
            </Text>
        </Link>
        </Flex>
    </HStack>
  )
}

export default NavBar