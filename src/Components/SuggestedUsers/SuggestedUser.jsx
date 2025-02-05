import { Flex, VStack, Text, Button, Avatar } from '@chakra-ui/react'
import useFollowUser from '../../hooks/useFollowUser'
import useAuthStore from '../../store/authStore'


const SuggestedUser = ({user, setUser}) => {

    const {isFollowing, isUpdating, handleFollowUser} = useFollowUser(user.uid)
    const AuthUser = useAuthStore((state) => state.user)

    const onFollowUser= async () => {
        await handleFollowUser();
        setUser({
            ...user,
            followers: isFollowing? user.followers.filter((follower) => follower.uid !== AuthUser.uid) :
            [...user.followers, AuthUser],
        })
    }

  return (
    <Flex align={"center"} justify={"space-between"} w="100%">
        <Flex align={"center"} gap={3}>
            <Avatar src={user.profilePicURL} size={"md"}/>
            <VStack align={"flex-start"}>
                <Text fontSize={12} fontWeight="bold">
                    {user.fullName}
                </Text>
                <Text fontSize={11} color="gray.500">
                    {user.followers.length} followers
                </Text>
            </VStack>
        </Flex>
        {AuthUser.uid !== user.uid && (
            <Button
                fontSize={13}
                bg={"transparent"}
                p={0}
                h={"max-content"}
                fontWeight={"medium"}
                color={"blue.400"}
                cursor={"pointer"}
                _hover={{color: "white"}}
                onClick={onFollowUser}
                isLoading={isUpdating}
            >
                {isFollowing? "Unfollow" : "Follow"}
            </Button>
        )}
    </Flex>
  )
}

export default SuggestedUser
