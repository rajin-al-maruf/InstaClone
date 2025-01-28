import React from 'react'
import { VStack, Flex, Text, Box, Link} from '@chakra-ui/react'
import SuggestedHeader from './SuggestedHeader'
import SuggestedUser from './SuggestedUser'
import SuggestedData from '../../UderData/SuggestedData'

const SuggestedUsers = () => {
  return (
    <div>
      <VStack py={8} px={6} gap={8}>
        <SuggestedHeader />

        <Flex align={"center"} justify={"space-between"} w="100%">
            <Text fontSize={12} fontWeight="bold" color="gray.500">
                Suggested for you
            </Text>
            <Text fontSize={12} fontWeight="bold" _hover={{color: "gray.400"}} cursor={"pointer"}>
                See All
            </Text>
        </Flex>

        {SuggestedData.map((SuggestedData, index) => (
            <SuggestedUser key={index} name={SuggestedData.name} avatar={SuggestedData.avatar}  followers={SuggestedData.followers}/>
        ))}
        

        <Box fontSize={12} color="gray.500" mt={5} alignSelf={"start"}>
            © 2025 build by{" "}
            <Link href="https://github.com/rajin-al-maruf" color="blue.600" target="_blank" fontSize={12}>
                Rajin Al-Maruf
            </Link>
        </Box>
      </VStack>
    </div>
  )
}

export default SuggestedUsers
