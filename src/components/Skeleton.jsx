import { SimpleGrid } from '@chakra-ui/react'
import React from 'react'

const Skeleton = () => {
  return (
<SimpleGrid columns={{xl:[4] , lg:[3] , sm:[2] ,base:[1]}} spacing='5' m={{sm:'20', lg:'0' , base:'10px'}}>
  <Skeleton height='427px' width='323px'/>
  <Skeleton height='427px' width='323px'/>
  <Skeleton height='427px' width='323px'/>
  <Skeleton height='427px' width='323px'/>
  <Skeleton height='427px' width='323px'/>
  <Skeleton height='427px' width='323px'/>
</SimpleGrid>
  )
}

export default Skeleton