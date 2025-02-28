import { Box, Image } from '@chakra-ui/react'
import PostHeader from './PostHeader'
import PostFooter from './PostFooter'
import useGetUserProfileById from '../../hooks/useGetUserProfileById'

const FeedPost = ({post}) => {
  const { userProfile } = useGetUserProfileById(post.createdBy)
  return (
    <div>
      <PostHeader post={post} creatorProfile={userProfile}/>
      <Box
      
       my={4}
       borderRadius={4}
       overflow={"hidden"}
      >
        <Image src={post.imageURL} alt="Post Image" />
      </Box>
      <PostFooter post={post} creatorProfile={userProfile} />
    </div>
  )
}

export default FeedPost
