import { Container, VStack, Flex, Box, Skeleton, SkeletonCircle, Text } from '@chakra-ui/react'
import FeedPost from './FeedPost'
import Userdata from '../../UderData/Userdata'
import useGetFeedPosts from '../../hooks/useGetFeedPosts'


const FeedPosts = () => {
  
  const {isLoading, posts} = useGetFeedPosts()

  return (
    <Container maxW={"container.sm"} px={2} py={10}>
      {isLoading && 
       [0,1,2].map((_, index) => (
        <VStack key={index} gap={4} align="flex-start" mb={10}>
          <Flex gap={2} align={"center"}>
            <SkeletonCircle size="10" />
            <VStack>
              <Skeleton height="10px" w="200px" />
              <Skeleton height="10px" w="200px" />
            </VStack>
          </Flex>
          <Skeleton w="100%">
            <Box h="400px" >contents wrapped</Box>
          </Skeleton>
        </VStack>
       ))}


      {!isLoading && posts.length > 0 && posts.map((post) => 
        <FeedPost key={post.id} post={post}/>
      )}
      {!isLoading && posts.length === 0 && (
        <Flex direction={"column"} justifyContent={'center'} alignItems={'center'}>
          <Text color={'red.400'}>
            You dont follow anyone
          </Text>
          <Text fontSize={'xl'}>
            Smash some follow button!!
          </Text>
        </Flex>
      )}
    </Container>
  )
}

export default FeedPosts
