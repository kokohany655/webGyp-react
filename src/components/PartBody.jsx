import {  Text, Stack} from '@chakra-ui/react'
import React from 'react'

const PartBody = ({item , setBodyParts}) => {
  return (
    
   <Stack  onClick={()=>setBodyParts(item)} as='button' _hover={{transform:'scale(1.1)' , bgColor: 'whiteAlpha.300'}} transition={'.2s'} borderRadius={'10px'} bgColor={'whiteAlpha.100'} p='15px 10px' alignItems={'center'} justifyContent={'center'} >
    <Text >{item}</Text>
   </Stack>
  )
}

export default PartBody