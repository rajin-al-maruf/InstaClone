import React from 'react'
import {Flex, Box, Image, Container, VStack, Center, Button} from "@chakra-ui/react"
import AuthForm from '../../Components/AuthForm/AuthForm'

const AuthPage = () => {
  return (
    <div>
      <Flex minH={"100vh"} alignItems={"center"} justifyContent={"center"}>
        <Container maxW={"container.md"} padding={0}>
            <Flex alignItems={"center"} justifyContent={"center"} gap={10}>
                <Box display={{ base: "none", md: "block" }}>
                    <Image src='/auth.png' h={"650"} alt='phone img' />
                </Box>

                <VStack spacing={2} align={"stretch"}>
                  <AuthForm/>

                  <Box textAlign={"center"}>Get the app.</Box>

                  <Flex gap={4} justifyContent={"center"}>
                    <Image src='/playstore.png' h={"10"} alt='playstore logo'/>
                    <Image src='/microsoft.png' h={"10"} alt='microsoft logo'/>
                  </Flex>
                </VStack>
            </Flex>
        </Container>
      </Flex>
    </div>
  )
}

export default AuthPage
