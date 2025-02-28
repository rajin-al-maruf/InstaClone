import { Flex , Avatar, Text, Skeleton, SkeletonCircle} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import React from 'react'
import useGetUserProfileById from '../../hooks/useGetUserProfileById'
import timeAgo from '../../utils/timeAgo'

const Comment = ({comment}) => {
  const {userProfile, isLoading} = useGetUserProfileById(comment.createdBy)
  if(isLoading) return <CommentSkeleton />
  
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
                <Text fontSize={14}>{comment.comment}</Text>
            </Flex>
            <Text fontSize={12} color={"gray"}>{timeAgo(comment.createdAt)}</Text>
        </Flex>
    </Flex>
  )
}

export default Comment

const CommentSkeleton = () => {
	return (
		<Flex gap={4} w={"full"} alignItems={"center"}>
			<SkeletonCircle h={10} w='10' />
			<Flex gap={1} flexDir={"column"}>
				<Skeleton height={2} width={100} />
				<Skeleton height={2} width={50} />
			</Flex>
		</Flex>
	);
};
