import { Box, HStack} from '@chakra-ui/react'

import PartBody from './PartBody'

export const HorixantolScroll = ({data , bodyParts ,setBodyParts}) => {
  return (
    <HStack mt='10' >
        
        {data.map(d=>(
            <Box  key={d.id|| d}>
                <PartBody item={d}  bodyParts={bodyParts} setBodyParts={setBodyParts}/>
            </Box>
        ))}
    </HStack>
  )
}
