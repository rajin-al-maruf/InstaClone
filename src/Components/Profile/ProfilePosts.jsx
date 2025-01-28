import { Grid, VStack, Skeleton, Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import ProfilePost from './ProfilePost'
import UserData from '../../UderData/Userdata'

const ProfilePosts = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  },[])

  return (
    <Grid
      templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(3, 1fr)"}}
      rowGap={1}
      columnGap={1}
    >

    {isLoading && [0,1,2,3,4,5].map((_,index) => (
      <VStack key={index} align={"flex-start"} gap={4}>
        <Skeleton w={"full"}>
          <Box h="300px">contents wrapped</Box>
        </Skeleton>
      </VStack>
    ))}

    {!isLoading && (
      <>
        {UserData.map((userdata, index) => (
          <ProfilePost kex={index} img={userdata.img}/>
        ))}
      </>
    )}
    </Grid>
  )
}

export default ProfilePosts
