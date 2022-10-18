import { Box } from '@chakra-ui/react'
import React, { useState } from 'react'
import HeroBanner from '../components/HeroBanner'
import Exercises from '../components/Exercises'
import SearchExercises from '../components/SearchExercises'
import Pagination from '../components/Pagination'
import Footer from '../components/Footer'
const Home = () => {
  const [exercises, setExercises] = useState([])
  const [bodyParts, setBodyParts] = useState('')
  const [currentPage, setcurrentPage] = useState(1)
  console.log(bodyParts)
  return (
    <Box>
        <HeroBanner/>
        <SearchExercises setExercises={setExercises} bodyParts={bodyParts} setBodyParts={setBodyParts}/>
        <Exercises setExercises={setExercises} bodyParts={bodyParts} exercises={exercises} currentPage={currentPage}/>
        <Pagination exercises={exercises.length} setcurrentPage={setcurrentPage} currentPage={currentPage}/>
        <Footer/>
    </Box>
  )
}

export default Home