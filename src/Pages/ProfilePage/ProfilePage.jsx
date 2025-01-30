import { useParams } from 'react-router-dom'
import ProfileHeader from '../../Components/Profile/ProfileHeader'
import ProfilePosts from '../../Components/Profile/ProfilePosts'
import ProfileTabs from '../../Components/Profile/ProfileTabs'
import { Container, Flex, VStack, Skeleton, SkeletonCircle, Link, Text } from '@chakra-ui/react'
import {Link as RouterLink} from 'react-router-dom'
import React from 'react'
import useGetUserProfileByUsername from '../../hooks/useGetUserProfileByUsername'

const ProfilePage = () => {
    const {username} = useParams()

    const {isLoading, userProfile} = useGetUserProfileByUsername(username)

    if(!isLoading && !userProfile) return <UserNotFound />

    return (
    <Container maxW={"1024px"} py={5}>
        <Flex
            py={10}
            px={4}
            pl={{base: 4, md: 10}}
            w={"full"}
            mx={"auto"}
            flexDirection={"column"}
        >
            {!isLoading && userProfile && <ProfileHeader/>}
            {isLoading && <ProfileHeaderSkeleton />}
        </Flex>
        <Flex
            px={{base: 2, sm: 4}}
            maxW={"full"}
            mx={"auto"}
            borderTop={"1px solid"}
            borderColor={"whiteAlpha.300"}
            direction={"column"}
        >
            <ProfileTabs/>
            <ProfilePosts />
        </Flex>
    </Container>
  )
}

export default ProfilePage

// skeleton for profile header
const ProfileHeaderSkeleton = () => {
	return (
		<Flex
			gap={{ base: 4, sm: 10 }}
			py={10}
			direction={{ base: "column", sm: "row" }}
			justifyContent={"center"}
			alignItems={"center"}
		>
			<SkeletonCircle size='24' />

			<VStack alignItems={{ base: "center", sm: "flex-start" }} gap={2} mx={"auto"} flex={1}>
				<Skeleton height='12px' width='150px' />
				<Skeleton height='12px' width='100px' />
			</VStack>
		</Flex>
	);
};

const UserNotFound = () => {
	return (
		<Flex flexDir='column' textAlign={"center"} mx={"auto"}>
			<Text fontSize={"2xl"}>User Not Found</Text>
			<Link as={RouterLink} to={"/"} color={"blue.500"} w={"max-content"} mx={"auto"}>
				Go home
			</Link>
		</Flex>
	);
};
