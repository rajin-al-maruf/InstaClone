import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { useLocation } from 'react-router-dom'

const PageLayout = ({children}) => {
    const {pathname} = useLocation()
  return (
    <div>
      <Flex>
        {/* sidebar on the left */}
        {pathname !== '/auth'? (
            <Box w={{base: '70px', md: '240px'}}>
                <Sidebar/>
            </Box>
        ) : null}

        {/* main content on the right */}
        <Box w={{base: 'calc(100% - 70px)', md: 'calc(100% - 240px)'}}>
            {children}
        </Box>
      </Flex>
    </div>
  )
}

export default PageLayout
