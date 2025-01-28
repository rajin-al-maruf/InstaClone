import { Flex, VStack, Text, Button, Avatar } from '@chakra-ui/react'
import React, { useState } from 'react'

const SuggestedUser = ({avatar, name, followers}) => {
    const [isFollowed, setIsFollowed] = useState(false)
  return (
    <Flex align={"center"} justify={"space-between"} w="100%">
        <Flex align={"center"} gap={3}>
            <Avatar src={avatar} name={name} size={"md"}/>
            <VStack align={"flex-start"}>
                <Text fontSize={12} fontWeight="bold">
                    {name}
                </Text>
                <Text fontSize={11} color="gray.500">
                    {followers} followers
                </Text>
            </VStack>
        </Flex>
        <Button
            fontSize={13}
            bg={"transparent"}
            p={0}
            h={"max-content"}
            fontWeight={"medium"}
            color={"blue.400"}
            cursor={"pointer"}
            _hover={{color: "white"}}
            onClick={() => setIsFollowed(!isFollowed)}
        >
            {isFollowed? "Unfollow" : "Follow"}
        </Button>
    </Flex>
  )
}

export default SuggestedUser
