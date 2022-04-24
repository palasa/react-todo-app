import React, { useCallback, useState } from 'react'
import { Text, Box, Center, VStack, themeTools, useTheme, useColorMode, useColorModeValue } from 'native-base'
// import AnimatedCheckbox from '../components/animated-checkbox'
import ThemeToggle from '../components/theme-toggle'

export default function MainScreen() {
  return (
    <Center _dark={{bg: 'blueGray.900'}} _light={{bg: 'blueGray.50'}} px={4} flex={1}>
      <VStack space={5} alignItems="center">
        <Box w={100} h={100}>
          {/* <AnimatedCheckbox /> */}
        </Box>
        <Box p={10} bg={useColorModeValue('red.500','yellow.500')}>
          <Text>Hello World</Text>
        </Box>
        <ThemeToggle/>
      </VStack>
    </Center>
  )
}