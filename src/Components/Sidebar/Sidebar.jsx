import {Box, Flex, Link, Avatar} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { CreatePostLogo, 
  InstagramLogo, 
  InstagramMobileLogo, 
  NotificationsLogo, 
  SearchLogo } from '../../assets/contants'
import { AiFillHome } from "react-icons/ai";
import { BiLogOut } from 'react-icons/bi'



const Sidebar = () => {

  const sidebarItems = [
    {
      icon: <AiFillHome size={25}/>,
      text: "Home",
      link: "/",
    },
    {
      icon: <SearchLogo />,
      text: "Search",
    },
    {
      icon: <NotificationsLogo />,
      text: "Notifications",
    },
    {
      icon: <CreatePostLogo />,
      text: "Create",
    },
    {
      icon: <Avatar size="sm" name="Burak Orkmez" src="/profilepic.png"/>,
      text: "Profile",
      link: "/asaprogrammer",
    },
  
  ]
  
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

          <Flex direction={"column"} gap={10} h={"full"} w={"full"} alignItems={{base: "center", md: "flex-start"}}>
{/* Insta Logo */}
            <Link to={"/"} as={RouterLink} pl={2} cursor={"pointer"} display={{base: "none", md: "block"}}>
              <InstagramLogo/>
            </Link>
            <Link to={"/"} as={RouterLink} p={2} cursor={"pointer"} display={{base: "block", md: "none"}} 
            _hover={{bg: "whiteAlpha.200"}} borderRadius={6} w={10}>
              <InstagramMobileLogo/>
            </Link>
{/* Home, search, noti, post, profile */}
            {/* I wont use tooltip cz its not working properly for some reason */}
            <Flex direction={"column"} gap={5} cursor={"pointer"}>
              {sidebarItems.map((item, index) => (
                // <Tooltip
                //   key={index}
                //   label= {item.text}
                //   hasArrow
                //   placement="right"
                //   positioning={{placement: "right"}}
                //   openDelay={500}
                //   display={{base: "block", md: "none"}}
                //   ml={1}
                // >
                  <Link
                    key={index}
                    display={"flex"}
                    variant={"unstyled"}
                    to={item.link || null}
                    as={RouterLink}
                    alignItems={"center"}
                    gap={4}
                    p={2}
                    borderRadius={6}
                    _hover={{bg: "whiteAlpha.100"}}
                    w={{base: 10, md: 200}}
                    justifyContent={{base: "center", md: "flex-start"}}
                  >
                    {item.icon}
                    <Box display={{base: "none", md: "block"}}>{item.text}</Box>
                  </Link>
                // </Tooltip>
              ))}
            </Flex>
{/* Logout */}
                  <Link
                    display={"flex"}
                    variant={"unstyled"}
                    to={"/auth"}
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
                    <Box display={{base: "none", md: "block"}}>Logout</Box>
                  </Link>
          </Flex>
        </Box>
  )
}

export default Sidebar

