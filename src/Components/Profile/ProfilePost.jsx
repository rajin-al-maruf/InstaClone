import { GridItem, Flex, Text, Image, Box, Avatar, VStack,
        Modal, ModalOverlay, ModalContent,
        ModalCloseButton, ModalBody, useDisclosure,
        Divider
        } from '@chakra-ui/react'
import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { FaComment } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import Comment from '../Comment/Comment'
import PostFooter from '../FeedPosts/PostFooter'
import useUserProfileStore from '../../store/userProfileStore'
import useAuthStore from '../../store/authStore'

const ProfilePost = ({post}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const {userProfile} = useUserProfileStore()
  const {user} = useAuthStore()

  return (
    <>
      <GridItem
        cursor={"pointer"}
        borderRadius={4}
        overflow={"hidden"}
        border={"1px solid"}
        borderColor={"whiteAlpha.300"}
        position={"relative"}
        aspectRatio={1/1}
        onClick={onOpen}
    >
      <Image 
        src={post.imageURL} 
        alt="profile post"
        w={"100%"} 
        h={"100%"} 
        objectFit={"cover"}
      />

      <Flex
        opacity={0}
        _hover={{opacity: 1}}
        position={"absolute"}
        top={0}
        bottom={0}
        left={0}
        right={0}
        bg={"blackAlpha.700"}
        transition={"all 0.3s ease"}
        zIndex={1}
        justifyContent={"center"}
      >
        <Flex alignItems={"center"} justifyContent={"center"} gap={50}>
          <Flex>
            <AiFillHeart size={20}/>
            <Text fontWeight={"bold"} ml={2}>
              {post.likes.length}
            </Text>
          </Flex>
          <Flex>
            <FaComment size={20}/>
            <Text fontWeight={"bold"} ml={2}>
            {post.comments.length}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </GridItem>

    <Modal isOpen={isOpen} onClose={onClose}
          isCentered={true}
          size={{base:"3xl", md:"5xl"}}
          >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody bg={"black"} pb={5}>
            <Flex gap={4} w={{base: "90%", sm: "70%", md:"full"}} mx={"auto"} maxH={"90vh"} minH={"50vh"}>
              <Flex
                borderRadius={4}
                overflow={"hidden"}
                border={"1px solid"}
                borderColor={"whiteAlpha.300"}
                flex={1.5}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Image src={post.imageURL} alt="post picture" />
              </Flex>
              <Flex flex={1} flexDirection={"column"} px={10} display={{base:"none", md:"flex"}}>
                <Flex alignItems={"center"} justifyContent={"space-between"}>

                  <Flex alignItems={"center"} gap={4}>
                    <Avatar src={userProfile.profilePicURL} size={"sm"} name='as a programmer' />
                    <Text fontWeight={"bold"} fontSize={12}>
                      {userProfile.userName}
                    </Text>
                  </Flex>

                  {user.uid === userProfile.uid && (
                    <Box
                      size={"sm"}
                      bg={"transparent"}
                      _hover={{bg: "whiteAlpha.300", 
                      color:"red.500"}} 
                      borderRadius={4} 
                      p={1}
                    >
                      <MdDelete size={20} cursor={"pointer"} />
                    </Box>
                  )}
                </Flex>
                <Divider my={2} bg={"gray.500"}/>

                <VStack w={"full"} alignItems={"start"} maxH={"350px"} overflowY={"auto"}>
                  <Comment
                    createdAt='1d ago'
                    username='asaprogrammer_'
                    profilepic='/profilepic.png'
                    text='Dummy image from unsplash'
                  />
                  <Comment
                    createdAt='5d ago'
                    username='nitesh_kumer'
                    profilepic='/img4.png'
                    text='What a wonderful picture!'
                  />
                </VStack>

                <Divider my={2} bg={"gray.800"}/>
                <PostFooter isProfile={true}/>
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
    
  )
}

export default ProfilePost
