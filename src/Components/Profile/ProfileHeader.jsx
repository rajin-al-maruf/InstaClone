import { Flex, VStack, Text, Button, Avatar} from '@chakra-ui/react'
import React from 'react'


const ProfileHeader = () => {
  return (
    <Flex 
        gap={{base:4, sm:10}} 
        py={10} 
        direction={{base: "column", sm:"row"}}
    >
        
        <Avatar 
            src="/profilepic.png" 
            name="As a programmer" 
            alt="profilepic"
            // size={{base: "xl", md: "2xl"}}
            boxSize={{base: "100px", md: "150px"}}
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
                    asaprogrammer_
                </Text>
                
                <Flex gap={4} align={"center"} justify={"center"}>
                    <Button bg={"white"} color={"black"} _hover={{bg: "whiteAlpha.800"}} size={{base: "xs", md: "sm"}}>
                        Edit Profile
                    </Button>
                </Flex>
            </Flex>
            
            <Flex align={"center"} gap={{base: 2, sm:4 }}>
                <Text fontSize={{base: "xs", md: "sm"}}>
                    <Text as={"span"} fontWeight={"bold"} mr={1}>5</Text>
                    Posts
                </Text>
                <Text fontSize={{base: "xs", md: "sm"}}>
                    <Text as={"span"} fontWeight={"bold"} mr={1}>175</Text>
                    Follower
                </Text>
                <Text fontSize={{base: "xs", md: "sm"}}>
                    <Text as={"span"} fontWeight={"bold"} mr={1}>220</Text>
                    Following
                </Text>
            </Flex>
            <Flex align={"center"} gap={4}>
                <Text fontSize={"sm"} fontWeight={"bold"}> As a Programmer</Text>
            </Flex>
            <Text fontSize={"sm"}> Programming to build something new everyday.</Text>
        </VStack>
    </Flex>
  )
}

export default ProfileHeader
