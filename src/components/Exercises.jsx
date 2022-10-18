import { SimpleGrid} from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { exercisesOptions, fetchData } from '../utils/fetchData'
import ExerciseCard from './ExerciseCard'
import { paginate } from '../utils/pagination'

const Exercises = ({exercises ,setExercises, bodyParts,currentPage }) => {
  const exercise = paginate(currentPage,exercises)
useEffect(()=>{
  const fetchExercises  = async()=>{
    try{
    let exerciseData = []
    if(bodyParts==='all'){
      exerciseData =await fetchData('https://exercisedb.p.rapidapi.com/exercises',exercisesOptions)
    }else{
      exerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyParts}`,exercisesOptions)
    }
    setExercises(exerciseData)}catch(err){
      new Error(err)
    }
  }
  fetchExercises()

},[bodyParts,setExercises])
  
  return (
    <SimpleGrid columns={{xl:[4] , lg:[3] , sm:[2] ,base:[1]}} spacing='5' m={{sm:'20', lg:'0' , base:'10px'}} id='exercises'>
        {exercise.map((ex, index )=>(
          <ExerciseCard key={index} exercise={ex}/>))}
    </SimpleGrid>
        )}


export default Exercises