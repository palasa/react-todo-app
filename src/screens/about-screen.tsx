import React from 'react'
import { Box, Text, VStack, ScrollView, Icon, Image, useColorModeValue } from 'native-base'
import { Feather } from '@expo/vector-icons'
import AnimatedColorBox from '../components/animated-color-box'
import Navbar from '../components/navbar'
import Masthead from '../components/masthead'
import LinkButton from '../components/link-button'

const AboutScreen = () => {
  return (
    <AnimatedColorBox w="full" flex={1} bg={useColorModeValue('warmGray.50', 'warmGray.900')}>
      <Masthead title="About this app" image={require('../assets/about-masthead.png')}>
        <Navbar />
      </Masthead>
      <ScrollView borderTopRadius={20} bg={useColorModeValue('warmGray.50', 'primary.900')}
        mt="-20px" pt="30px" p={4}>
        <VStack flex={1} space={4}>
          <Box alignItems="center">
            <Image source={require('../assets/parasa.jpg')} borderRadius="full" 
              resizeMode="cover" w={120} h={120} alt="author"/>            
          </Box>
          <Text fontSize="md" w='full'>
              This is a React Native turorial built in the <Text underline={true}>Github</Text>.
            </Text>
            <LinkButton colorScheme="blue" size="lg" borderRadius="full" href="https://github.com/palasa/react-todo-app"
              leftIcon={<Icon as={Feather} name="github" size="sm" />}
            >
              Go to Github
            </LinkButton>
        </VStack>
      </ScrollView>      
    </AnimatedColorBox>
  )
}

export default AboutScreen