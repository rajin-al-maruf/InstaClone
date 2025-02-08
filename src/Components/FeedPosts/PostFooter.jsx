import React, { useRef, useState } from "react"
import { CommentLogo, NotificationsLogo, UnlikeLogo } from "../../assets/contants"
import { Flex, Box , Text, Input, Button } from "@chakra-ui/react"
import usePostComment from "../../hooks/usePostComment"
import useLikePost from "../../hooks/useLikePost"

const PostFooter = ({ post, username, isProfile}) => {
  const {isCommenting, handlePostComment} = usePostComment()
  const [comment, setComment] = useState('')
  const commentRef = useRef(null)
  const {handleLikePost, isliked, likes} = useLikePost(post)

  const handleSubmitComment = async() => {
    await handlePostComment(post.id, comment)
    setComment('')
  }

  return (
    <Box mb={10} mt={"auto"}>
      <Flex align="center" gap={4} w={"full"} mb={2} mt={4}>
        <Box onClick={handleLikePost} cursor={"pointer"} fontSize={18}> 
          {!isliked ? <NotificationsLogo/> : <UnlikeLogo />}
        </Box>
        <Box cursor={"pointer"} fontSize={18} onClick={() => commentRef.current.focus()}> 
          <CommentLogo />
        </Box>
      </Flex>
      <Text fontSize={"sm"} fontWeight={600} color={"gray.500"}>
          {likes} likes
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
          value={comment} ref={commentRef}/>
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
