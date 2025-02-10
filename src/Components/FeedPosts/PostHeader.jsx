import { Flex, Box, Text, Avatar, SkeletonCircle, Skeleton, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import timeAgo from '../../utils/timeAgo'
import useFollowUser from '../../hooks/useFollowUser'

const PostHeader = ({creatorProfile, post}) => {
  const {handleFollowUser, isFollowing, isUpdating} = useFollowUser(post.createdBy)
  return (
    <Flex justify="space-between" align="center" w={"full"} my={2}>
      <Flex align={"center"} gap={2}>
        {creatorProfile? (
          <Link to={`/${creatorProfile.userName}`}>
            <Avatar src={creatorProfile.profilePicURL} alt="User profile" size={"sm"}/>
          </Link>
        ) : (
          <SkeletonCircle size={'10'}/>
        )}
        
        
        <Flex fontSize={12} align={"center"} gap={2}>
          {creatorProfile? (
            <Link to={`/${creatorProfile.userName}`}>
              {creatorProfile.userName}
            </Link>
          ) : (
            <Skeleton w={"100px"} h={"10px"}/>
          )}
          
          <Box color="gray.500">{timeAgo(post.createdAt)}</Box>
        </Flex>
      </Flex>
      <Box cursor={"pointer"}>
        <Button
          size={'xs'}
          bg={'transparent'}
          fontSize={12}
          fontWeight={"bold"}
          color={"blue.500"}
          _hover={{color: "white"}}
          transition={"0.2s ease-in-out"}
          p={2}
          borderRadius={6}
          onClick={handleFollowUser}
          isLoading={isUpdating}
        >
          {isFollowing? 'Unfollow' : 'Follow'}
        </Button>
      </Box>
    </Flex>
  )
}

export default PostHeader
