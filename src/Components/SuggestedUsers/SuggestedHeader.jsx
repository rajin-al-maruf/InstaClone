import React from 'react'
import { Flex, Text, Link, Avatar } from '@chakra-ui/react'
import {Link as RouterLink} from 'react-router-dom'

const SuggestedHeader = () => {
  return (
      <Flex align={"center"} justify={"space-between"} w={"100%"}>
        <Flex align={"center"} gap={4}>
            <Avatar name="As a programmer" src="/profilepic.png" alt="User profile" size={"sm"}/>
            <Text fontSize={12}>
                asaprogrammer_
            </Text>
        </Flex>

        <Link
        as={RouterLink}
        to="/auth"
        fontSize={14}
        fontWeight={"medium"}
        color={"blue.400"}
        textDecor={"none"}
        cursor={"pointer"}
        >
            LogOut
        </Link>
      </Flex>
  )
}

export default SuggestedHeader
