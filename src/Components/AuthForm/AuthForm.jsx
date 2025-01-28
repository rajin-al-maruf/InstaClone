import React from 'react'
import {Box, VStack, Image, Input, Button, Text, Flex} from "@chakra-ui/react"
import { useNavigate } from 'react-router-dom'

const AuthForm = () => {

  const [isSignUp, setIsSignUp] = React.useState(false)
  const naigation = useNavigate()
  const [input, setInput] = React.useState({
    email: "",
    password: "",
    confirmPassword: ""
  })

  const handleAuth = () => {
    if(input.email === "" || input.password === "") {
      alert("Email and password is required")
      return
    }

    naigation("/")
  }

  return (
    <div>
      <Box border={"1px solid gray"} p={5}>
        <VStack spacing={4}>
          <Image src='/logo.png' alt='Instagram' h={24}/>

          <Input 
            type='email' 
            placeholder='Email' 
            fontSize={14}
            value={input.email}
            name='email'
            onChange={(e) => setInput({...input, email: e.target.value})}
          />

          <Input 
            type='password' 
            placeholder='Password' 
            fontSize={14}
            value={input.password}
            name='password'
            onChange={(e) => setInput({...input, password: e.target.value})}
          />

          {isSignUp? 
          <Input 
            type='password' 
            placeholder='Confirm Password' 
            fontSize={14}
            value={input.confirmPassword}
            name='confirmPassword'
            onChange={(e) => setInput({...input, confirmPassword: e.target.value})}
          /> : null}

          <Button w={"full"} colorScheme='blue' onClick={handleAuth} fontSize={14} size={"md"} my={4}>
            {isSignUp? "Sign Up" : "Log in"}
          </Button>

{/* ------------OR----------- */}
          <Flex justifyContent={"center"} alignItems={"center"} my={4} gap={1} w={"full"}>
            <Box flex={2} h={"1px"} bg={"gray.400"}/>
            <Text mx={1}>OR</Text>
            <Box flex={2} h={"1px"} bg={"gray.400"}/>
            <Box/>
          </Flex>

          <Flex>
            <Image src='/google.png' alt='google logo' w={5}/>
            <Text mx={2} color={"blue.400"} cursor={"pointer"}>Log in with google</Text>
          </Flex>

        </VStack>
      </Box>

      <Box border={"1px solid gray"} p={5} mt={4}>
        <Flex gap={2} justifyContent={"center"} alignItems={"center"}>
          <Box fontSize={14}>{isSignUp? "Already have an account ?" : "Dont have an account ?"}</Box>
          <Box color={"blue.400"} cursor={"pointer"} onClick={() => setIsSignUp(!isSignUp)}>
            {isSignUp? "Log in" : "Sign Up"}
          </Box>
        </Flex>
      </Box>
    </div>
  )
}

export default AuthForm
