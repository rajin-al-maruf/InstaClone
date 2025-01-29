import { Flex, Text, Image } from "@chakra-ui/react"

const GoogleAuth = () => {
  return (
    <>
      <Flex>
        <Image src='/google.png' alt='google logo' w={5}/>
        <Text mx={2} color={"blue.400"} cursor={"pointer"}>Log in with google</Text>
      </Flex>
    </>
  )
}

export default GoogleAuth
