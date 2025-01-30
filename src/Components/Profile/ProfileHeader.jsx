import { Flex, VStack, Text, Button, Avatar} from '@chakra-ui/react'
import React from 'react'
import useUserProfileStore from '../../store/userProfileStore'
import useAuthStore from '../../store/authStore'


const ProfileHeader = () => {
    const {userProfile} = useUserProfileStore()
    const {user} = useAuthStore()
    const visitingOwnProfileAndAuth = user && user.userName === userProfile.userName
    const visitingAnotherProfileAndAuth = user && user.userName !== userProfile.userName
  return (
    <Flex 
        gap={{base:4, sm:10}} 
        py={10} 
        direction={{base: "column", sm:"row"}}
    >
        
        <Avatar 
            src={userProfile.profilePicURL}
            alt="profilepic"
            size={{base: "xl", md: "2xl"}}
            alignSelf={"flex-start"}
            mx={"auto"}
            variant={"outline"}
        />    
        

        <VStack align={"start"} gap={3} mx={"auto"} flex={1}>
            <Flex
                gap={4}
                direction={{base: "column", sm: "row"}}
                justify={{base: "center", sm: "flex-start"}}
                align={"center"}
                w={"full"}
            >
                <Text fontSize={{base: "sm", md: "lg"}}>
                    {userProfile.userName}
                </Text>
                
                {visitingOwnProfileAndAuth && (<Flex gap={4} align={"center"} justify={"center"}>
                    <Button 
                        bg={"white"} 
                        color={"black"} 
                        _hover={{bg: "whiteAlpha.800"}} 
                        size={{base: "xs", 
                        md: "sm"}}
                    >
                        Edit Profile
                    </Button>
                </Flex>)}
                {visitingAnotherProfileAndAuth && (<Flex gap={4} align={"center"} justify={"center"}>
                    <Button 
                        bg={"blue.500"} 
                        color={"white"} 
                        _hover={{bg: "blue.600"}} 
                        size={{base: "xs", 
                        md: "sm"}}
                    >
                        Follow
                    </Button>
                </Flex>)}
            </Flex>
            
            <Flex align={"center"} gap={{base: 2, sm:4 }}>
                <Text fontSize={{base: "xs", md: "sm"}}>
                    <Text as={"span"} fontWeight={"bold"} mr={1}>
                        {userProfile.posts.length}
                    </Text>
                    Posts
                </Text>
                <Text fontSize={{base: "xs", md: "sm"}}>
                    <Text as={"span"} fontWeight={"bold"} mr={1}>
                        {userProfile.followers.length}
                    </Text>
                    Follower
                </Text>
                <Text fontSize={{base: "xs", md: "sm"}}>
                    <Text as={"span"} fontWeight={"bold"} mr={1}>
                        {userProfile.following.length}
                    </Text>
                    Following
                </Text>
            </Flex>
            <Flex align={"center"} gap={4}>
                <Text fontSize={"sm"} fontWeight={"bold"}>{userProfile.fullName}</Text>
            </Flex>
            <Text fontSize={"sm"}>{userProfile.bio}</Text>
        </VStack>
    </Flex>
  )
}

export default ProfileHeader
