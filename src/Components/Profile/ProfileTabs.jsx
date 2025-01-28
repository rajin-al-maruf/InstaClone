import { Flex, Box, Text } from '@chakra-ui/react'
import React from 'react'
import { BsBookmark, BsGrid3X3, BsSuitHeart } from 'react-icons/bs'

const ProfileTabs = () => {
  return (
    <Flex
      w={"full"}
      justify={"center"}
      gap={{base:4, sm: 10}}
      textTransform={"uppercase"}
      fontWeight={"bold"}
    >
      <Flex borderTop={"1px solid white"} gap={1} align={"center"} p={3} cursor={"pointer"}>
        <Box fontSize={20}>
          <BsGrid3X3 />
        </Box>
        <Text fontSize={12} display={{base: "none", sm:"block"}}>Posts</Text>
      </Flex>
      <Flex gap={1} align={"center"} p={3} cursor={"pointer"}>
        <Box fontSize={20}>
          <BsBookmark fontWeight={"bold"}/>
        </Box>
        <Text fontSize={12} display={{base: "none", sm:"block"}}>Saved</Text>
      </Flex>
      <Flex gap={1} align={"center"} p={3} cursor={"pointer"}>
        <Box fontSize={20}>
          <BsSuitHeart fontWeight={"bold"}/>
        </Box>
        <Text fontSize={12} display={{base: "none", sm:"block"}}>Liked</Text>
      </Flex>
    </Flex>
  )
}

export default ProfileTabs
