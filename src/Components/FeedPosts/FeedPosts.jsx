import React, { useEffect, useState } from 'react'
import { Container, VStack, Flex, Box, Skeleton, SkeletonCircle } from '@chakra-ui/react'
import FeedPost from './FeedPost'
import Userdata from '../../UderData/Userdata'


const FeedPosts = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  return (
    <Container maxW={"container.sm"} px={2} py={10}>
      {isLoading && 
       [0,1,2,3].map((_, index) => (
        <VStack key={index} gap={4} align="flex-start" mb={10}>
          <Flex gap={2} align={"center"}>
            <SkeletonCircle size="10" />
            <VStack>
              <Skeleton height="10px" w="200px" />
              <Skeleton height="10px" w="200px" />
            </VStack>
          </Flex>
          <Skeleton w="100%">
            <Box h="500px" >contents wrapped</Box>
          </Skeleton>
        </VStack>
       ))}


      {!isLoading && Userdata.map((UserData, index) => (
        <FeedPost key={index} img={UserData.img} username={UserData.username} avatar={UserData.avatar}/>
      ))}
    </Container>
  )
}

export default FeedPosts
