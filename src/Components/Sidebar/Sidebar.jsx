import {Box, Flex, Link, Tooltip, Button} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom';
import { InstagramLogo, InstagramMobileLogo, } from '../../assets/contants';
import { BiLogOut } from 'react-icons/bi';
import useLogout from '../../hooks/useLogout';
import SidebarItems from './SidebarItems';



const Sidebar = () => {

  
  const { handleLogout, isLoggingOut} = useLogout()

  return (
        <Box 
          h={"100vh"} 
          borderRight={"1px solid"} 
          borderColor={"whiteAlpha.300"}  
          px={{base: 2, md: 4}} 
          py={8} 
          position={"sticky"} 
          top={0} 
          left={0}
        > 

          <Flex direction={"column"} gap={10} h={"full"} w={"full"} >
{/* Insta Logo */}
            <Link to={"/"} as={RouterLink} pl={2} cursor={"pointer"} display={{base: "none", md: "block"}}>
              <InstagramLogo/>
            </Link>
            <Link to={"/"} as={RouterLink} p={2} cursor={"pointer"} display={{base: "block", md: "none"}} 
            _hover={{bg: "whiteAlpha.200"}} borderRadius={6} w={10}>
              <InstagramMobileLogo/>
            </Link>
{/* Home, search, noti, post, profile */}
            <Flex direction={"column"} gap={5} cursor={"pointer"}>
              <SidebarItems />
            </Flex>
{/* Logout */}
                <Tooltip
                  label= {"Logout"}
                  hasArrow
                  placement="right"
                  positioning={{placement: "right"}}
                  openDelay={500}
                  display={{base: "block", md: "none"}}
                  ml={1}
                >
                  <Flex
                    onClick={handleLogout}
                    as={RouterLink}
                    alignItems={"center"}
                    gap={4}
                    p={2}
                    borderRadius={6}
                    _hover={{bg: "whiteAlpha.100"}}
                    w={{base: 10, md: 200}}
                    justifyContent={{base: "center", md: "flex-start"}}
                    mt={"auto"}
                  >
                    <BiLogOut size={25}/>
                    <Button 
                      variant={"ghost"} 
                      _hover={{bg: "transparent"}}
                      isLoading={isLoggingOut}
                      display={{base: "none", md: "block"}}
                    >
                      Logout
                    </Button>
                  </Flex>
                </Tooltip>  
          </Flex>
        </Box>
  )
}

export default Sidebar

