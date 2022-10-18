import { Box, Button, FormControl, Heading, Input, Stack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { exercisesOptions, fetchData } from '../utils/fetchData'
import { HorixantolScroll } from './HorixantolScroll'

function SearchExercises({bodyParts, setBodyParts, setExercises}) {
  const [search, setSearch] = useState('')
  const [bodyPartData, setBodyPartData] = useState([])
  useEffect(()=>{
    const fetch = async()=>{
      const bodyPartData  = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exercisesOptions)
      setBodyPartData(['all' , ...bodyPartData])
    }

    fetch()
  },[])

  const handleSearch =async()=>{
    if(search){
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises' , exercisesOptions)
      const searchExercises = exercisesData.filter(exe =>
        exe.name.toLowerCase().includes(search)
        ||exe.target.toLowerCase().includes(search)
        ||exe.equipment.toLowerCase().includes(search)
        ||exe.bodyPart.toLowerCase().includes(search)
        
      )
      console.log(searchExercises);
      setSearch('')
      setExercises(searchExercises)
    }
  }
  return (
    <Stack alignItems={'center'} justifyContent='center' mt='50px'  mb='80px'>
        <Heading mb={'10px'} size={{xl:'xl' ,lg:'xl' ,md:'lg' ,base:'lg'}} textAlign={'center'} >
            Awesome Exercises You <br/> Should Know 
        </Heading>
        <FormControl display={'flex'}>
          <Input 
          type={'text'}
          value={search}
          placeholder='Search Exercises'
          onChange={(e)=>{setSearch(e.target.value.toLowerCase())}}
          >
          </Input>
          <Button 
          ml={{lg:'10', base:'5'}} 
          onClick={handleSearch}
          >
            Search
          </Button>
        </FormControl>
        <Box display={{sm:'none' , lg:'block', base:'none'}}>
        <HorixantolScroll data={bodyPartData} bodyParts={bodyParts} setBodyParts={setBodyParts}/>
        </Box>
    </Stack>
  )
}

export default SearchExercises