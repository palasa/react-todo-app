import React, { useCallback } from 'react'
import { Pressable } from 'react-native'
import { Box, Icon, HStack, useTheme, themeTools, useColorModeValue } from 'native-base'
import AnimatedCheckbox from "./animated-checkbox"
import AnimatedTaskLabel from './animated-task-label'
import SwipableView from './swipable-view'
import { Feather } from '@expo/vector-icons'
import { PanGestureHandler, PanGestureHandlerProps } from 'react-native-gesture-handler'

interface Props extends Pick<PanGestureHandlerProps, 'simultaneousHandlers'>{
  isDone: boolean
  onToggleCheckbox?: () => void
  onPressLabel?: () => void
  onRemove?: () => void
  subject: string
}

const TaskItem = (props: Props) => {
  const { isDone, onToggleCheckbox, onPressLabel, onRemove, subject, simultaneousHandlers } = props
  const theme = useTheme()
  const highlightColor = themeTools.getColor(
    theme,
    useColorModeValue('blue.500', 'blue.400')
  )
  const boxStroke = themeTools.getColor(
    theme,
    useColorModeValue('muted.300', 'muted.500')
  )
  const checkMarkColor = themeTools.getColor(
    theme,
    useColorModeValue('white', 'white')
  )
  const activeTextColor = themeTools.getColor(
    theme,
    useColorModeValue('darkText', 'lightText')
  )
  const doneTextColor = themeTools.getColor(
    theme,
    useColorModeValue('muted.400', 'muted.600')
  )

  return (
    <SwipableView simultaneousHandlers={simultaneousHandlers}
      onSwipeLeft={onRemove} backView={
        <Box w="full" h="full" bg="red.500" alignItems="flex-end" justifyContent="center" pr={4}>
          <Icon color="white" as={<Feather name="trash-2" />} size="sm" />
        </Box>
      }
    >
      <HStack alignItems="center" w="full" px={4} py={2} bg={useColorModeValue('warmGray.50', 'primary.900')}>
        <Box w={30} h={30} mr={2}>
          <Pressable onPress={onToggleCheckbox}>
            <AnimatedCheckbox highlightColor={highlightColor} checkmarkColor={checkMarkColor}
              boxOutlineColor={boxStroke} checked={isDone} />
          </Pressable>
        </Box>
        <AnimatedTaskLabel strikethrough={isDone} textColor={activeTextColor} 
          inactiveTextColor={doneTextColor} onPress={onPressLabel}>
          {subject}
        </AnimatedTaskLabel>
      </HStack>
    </SwipableView>
    
  )
}

export default TaskItem