import React, { useCallback, useState } from 'react'
import { Pressable } from 'react-native'
import { Text, Box, Center, VStack, themeTools, useTheme, useColorMode, useColorModeValue } from 'native-base'
import AnimatedCheckbox from '../components/animated-checkbox'
import ThemeToggle from '../components/theme-toggle'
import TaskItem from '../components/task-item'

export default function MainScreen() {
  const [ checked, setChecked ] = useState(false)
  const handlePressCheckBox = useCallback(() => {
    setChecked(prev => !prev)
  },[])

  return (
    <Center _dark={{bg: 'blueGray.900'}} _light={{bg: 'blueGray.50'}} flex={1}>
      <VStack space={5} alignItems="center" w="full">
        <TaskItem isDone={checked} onToggleCheckbox={handlePressCheckBox} subject="Task Item"/>
        <ThemeToggle/>
      </VStack>
    </Center>
  )
}