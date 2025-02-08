import React, { useState } from "react"
import { CommentLogo, NotificationsLogo, UnlikeLogo } from "../../assets/contants"
import { Flex, Box , Text, Input, Button } from "@chakra-ui/react"
import usePostComment from "../../hooks/usePostComment"

const PostFooter = ({ post, username, isProfile}) => {
  const [like, setLike] = useState(true)
  const [likesCount, setLikesCount] = useState(0)
  const {isCommenting, handlePostComment} = usePostComment()
  const [comment, setComment] = useState('')

  const handleSubmitComment = async() => {
    await handlePostComment(post.id, comment)
    setComment('')
  }

  const handleLike = () => {
    setLike(!like)
    setLikesCount(like? likesCount + 1 : likesCount - 1)
  }
  return (
    <Box mb={10} mt={"auto"}>
      <Flex align="center" gap={4} w={"full"} mb={2} mt={4}>
        <Box onClick={handleLike} cursor={"pointer"} fontSize={18}> 
          {like ? <NotificationsLogo/> : <UnlikeLogo />}
        </Box>
        <Box cursor={"pointer"} fontSize={18}> 
          <CommentLogo />
        </Box>
      </Flex>
      <Text fontSize={"sm"} fontWeight={600} color={"gray.500"}>
          {likesCount} likes
      </Text>
      {!isProfile && (
        <>
          <Text fontSize={"sm"} fontWeight={500}>
            {username}_{" "}
            <Text as={"span"} fontWeight={300}>
              Feeling Good
            </Text>
          </Text>
          <Text fontSize={"sm"} color={"gray"} cursor={"pointer"}>
            Viwe all 100 comments
          </Text>
        </>
      )}

{/* couldnt use input group so i am using flex instade */}
      <Flex gap={2} mt={2} align={"center"}>
        <Input variant={"flushed"} placeholder="Add a comment.." fontSize={14}
          onChange={(e) => setComment(e.target.value)}
          value={comment}/>
        <Button
          variant={"outline"}
          color={"blue.500"}
          onClick={handleSubmitComment}
          isLoading={isCommenting}
        >Post</Button>
      </Flex>
    </Box>
  )
}

export default PostFooter
