import { Box, Image } from '@chakra-ui/react'
import PostHeader from './PostHeader'
import PostFooter from './PostFooter'

const FeedPost = ({img, username, avatar}) => {
  return (
    <div>
      <PostHeader avatar={avatar} username={username} />
      <Box
      
       my={4}
       borderRadius={4}
       overflow={"hidden"}
      >
        <Image src={img} alt="Post Image" />
      </Box>
      <PostFooter username={username} />
    </div>
  )
}

export default FeedPost
