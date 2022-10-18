import { Box, Button, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const ExerciseCard = ({exercise}) => {
  return (
    <Link to={`/exercise/${exercise.id}`}>
        <Box borderRadius={'10px'} boxShadow={'0px 0px 25px  rgba(0,0,0,.7)'} _hover={{transform:'scale(1.04)'}} transition='.4s'>
        <Image  mb='2' src={exercise.gifUrl} alt={exercise.name} loading='lazy' borderTopLeftRadius={'10px'} borderTopRightRadius={'10px'}/>
        <Button variant={'ghost'} >{exercise.bodyPart}</Button>
        <Button ml='4px'>{exercise.target}</Button>
        <Text fontWeight={'semibold'} opacity={'.7'} p={4} color='blue.200'>{exercise.name}</Text>
        </Box>
    </Link>
  )
}

export default ExerciseCard