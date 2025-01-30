import React from 'react'
import {Box, VStack, Image, Text, Flex} from "@chakra-ui/react"
import Signup from './Signup'
import Login from './Login'
import GoogleAuth from './GoogleAuth'

const AuthForm = () => {

  const [isSignUp, setIsSignUp] = React.useState(false)

  

  return (
    <div>
      <Box border={"1px solid gray"} p={5}>
        <VStack spacing={4}>
          <Image src='/logo.png' alt='Instagram' h={24} cursor={"pointer"}/>

          {isSignUp? < Signup /> : < Login />}

{/* ------------OR----------- */}
          <Flex justifyContent={"center"} alignItems={"center"} my={4} gap={1} w={"full"}>
            <Box flex={2} h={"1px"} bg={"gray.400"}/>
              <Text mx={1}>OR</Text>
            <Box flex={2} h={"1px"} bg={"gray.400"}/>
          </Flex>

          <GoogleAuth prefix={isSignUp? "Sign up": "Log in"}/>

        </VStack>
      </Box>

      <Box border={"1px solid gray"} p={5} mt={4}>
        <Flex justifyContent={"center"} alignItems={"center"}>
          <Box fontSize={14} mx={2}>
            {isSignUp? "Already have an account ?" : "Dont have an account ?"}
          </Box>
          <Box color={"blue.500"} cursor={"pointer"} onClick={() => setIsSignUp(!isSignUp)}>
            {isSignUp? "Log in" : "Sign Up"}
          </Box>
        </Flex>
      </Box>
    </div>
  )
}

export default AuthForm
