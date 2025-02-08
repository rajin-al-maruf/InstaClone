import React from 'react'
import { Flex , Avatar, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import timeAgo from '../../utils/timeAgo'
import useUserProfileStore from '../../store/userProfileStore'


const Caption = ({post}) => {
const {userProfile} = useUserProfileStore()

  return (
    <Flex gap={4}>
      <Link to={`/${userProfile.userName}`}>
        <Avatar src={userProfile.profilePicURL} size={"sm"}/>
      </Link>
        <Flex direction={"column"}>
            <Flex gap={2} alignItems={'center'}>
              <Link to={`/${userProfile.userName}`}>
                <Text fontSize={12} fontWeight={"bold"}>{userProfile.userName}</Text>
              </Link>
                <Text fontSize={14}>{post.caption}</Text>
            </Flex>
            <Text fontSize={12} color={"gray"}>{timeAgo(post.createdAt)}</Text>
        </Flex>
    </Flex>
  )
}

export default Caption
