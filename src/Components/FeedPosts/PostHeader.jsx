import { Flex, Box, Text, Avatar } from '@chakra-ui/react'

const PostHeader = ({username, avatar}) => {
  return (
    <Flex justify="space-between" align="center" w={"full"} my={2}>
      <Flex align={"center"} gap={2}>
        <Avatar src={avatar} alt="User profile" size={"sm"}/>
        <Flex fontSize={12} align={"center"} gap={2}>
          {username}
          <Box color="gray.500"> 1w</Box>
        </Flex>
      </Flex>
      <Box cursor={"pointer"}>
        <Text
          fontSize={12}
          fontWeight={"bold"}
          color={"blue.500"}
          _hover={{color: "white"}}
          transition={"0.2s ease-in-out"}
          p={2}
          borderRadius={6}
        >
          Unfollow
        </Text>
      </Box>
    </Flex>
  )
}

export default PostHeader
