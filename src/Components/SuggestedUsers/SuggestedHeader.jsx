import React from 'react'
import { Flex, Text, Button, Avatar} from '@chakra-ui/react'
import useLogout from '../../hooks/useLogout'
import useAuthStore from '../../store/authStore'
import { Link } from 'react-router-dom'

const SuggestedHeader = () => {

  const {handleLogout, isLoggingOut} = useLogout()
  const authUser = useAuthStore((state) => state.user)

  if(!authUser) return null;

  return (
      <Flex align={"center"} justify={"space-between"} w={"100%"}>
        <Flex align={"center"} gap={2}>
          <Link to={`${authUser.userName}`}>
            <Avatar src={authUser.profilePicURL} alt="User profile" size={"md"}/>
          </Link>
          <Link to={`${authUser.userName}`}>
            <Text fontSize={12} fontWeight={"bold"}>
                  {authUser.userName}
            </Text>
          </Link>  
            
        </Flex>

        <Button
          size={"xs"}
          background={"transparent"}
          _hover={{background: "transparent"}}
          fontSize={14}
          fontWeight={"medium"}
          color={"blue.400"}
          cursor={"pointer"}
          onClick={handleLogout}
          isLoading={isLoggingOut}
        >
            LogOut
        </Button>
      </Flex>
  )
}

export default SuggestedHeader
