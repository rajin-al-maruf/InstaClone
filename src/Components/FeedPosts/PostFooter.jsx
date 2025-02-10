import React, { useRef, useState } from "react"
import { CommentLogo, NotificationsLogo, UnlikeLogo } from "../../assets/contants"
import { Flex, Box , Text, Input, Button, InputGroup, InputRightElement } from "@chakra-ui/react"
import usePostComment from "../../hooks/usePostComment"
import useLikePost from "../../hooks/useLikePost"
import useAuthStore from "../../store/authStore"
import timeAgo from "../../utils/timeAgo"

const PostFooter = ({ post, isProfile, creatorProfile}) => {
  const {isCommenting, handlePostComment} = usePostComment()
  const [comment, setComment] = useState('')
  const commentRef = useRef(null)
  const {handleLikePost, isliked, likes} = useLikePost(post)
  const {user} = useAuthStore()

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

      {isProfile && (
        <Text fontSize={'12'} color={'gray'}>
          Posted {timeAgo(post.createdAt)}
        </Text>
      )}
      {!isProfile && (
        <>
          <Text fontSize={"sm"} fontWeight={500}>
            {creatorProfile?.userName}_{" "}
            <Text as={"span"} fontWeight={300}>
              {post.caption}
            </Text>
          </Text>
          {post.comments.length > 0 && (
            <Text fontSize={"sm"} color={"gray"} cursor={"pointer"}>
              Viwe all {post.comments.length} comments
            </Text>
            )}
        </>
      )}

{/* couldnt use input group so i am using flex instade */}
    {user && (
				<Flex alignItems={"center"} gap={2} justifyContent={"space-between"} w={"full"}>
					<InputGroup>
						<Input
							variant={"flushed"}
							placeholder={"Add a comment..."}
							fontSize={14}
							onChange={(e) => setComment(e.target.value)}
							value={comment}
							ref={commentRef}
						/>
						<InputRightElement>
							<Button
								fontSize={14}
								color={"blue.500"}
								fontWeight={600}
								cursor={"pointer"}
								_hover={{ color: "white" }}
								bg={"transparent"}
								onClick={handleSubmitComment}
								isLoading={isCommenting}
							>
								Post
							</Button>
						</InputRightElement>
					</InputGroup>
				</Flex>
			)}
    </Box>
  )
}

export default PostFooter
