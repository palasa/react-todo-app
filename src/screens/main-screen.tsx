import React, { useCallback, useState } from 'react'
import { VStack,  useColorModeValue, Fab, Icon } from 'native-base'
import { AntDesign } from '@expo/vector-icons'
import shortid from 'shortid'
import TaskList from '../components/task-list'
import AnimatedColorBox from '../components/animated-color-box'
import Masthead from '../components/masthead'
import Navbar from '../components/navbar'


const initialData =  [
  {
    id: shortid.generate(),
    subject: 'Buy movie tickets for Friday',
    done: false
  },
  {
    id: shortid.generate(),
    subject: 'Make a React Native turorial',
    done: false
  }
]

export default function MainScreen() {
  const [ data, setData ] = useState(initialData)
  const [ editingItemId, setEditingItemId ] = useState<string | null>()
  const [ isEditing, setEditing ] = useState(false)
  const handleToggleTaskItem = useCallback( item => {
    setData(prevData => {
      const newData = [...prevData]
      const index = prevData.indexOf(item)
      newData[index] = {...item, done: !item.done}
      return newData
    })
  }, [])
  const handleChangeTaskItemSubject = useCallback((item, newSubject) => {
    setData(prevData => {
      const newData = [ ...prevData ]
      const index = prevData.indexOf(item)
      newData[index] = { ...item, subject: newSubject }
      return newData
    })
  }, [])
  const handleFinishEditingTaskItem = useCallback(_item => {
    setEditingItemId(null)
  }, [])
  const handlePressTaskItemLabel = useCallback(item => {
    setEditingItemId(item.id)
  }, [])
  const handleRemoveItem = useCallback(item => {
    setData(prevData => {
      const newData = prevData.filter(i => i !== item)
      return newData
    })
  }, [])


  return (
    <AnimatedColorBox w="full" flex={1} bg={useColorModeValue('warmGray.50', 'primary.900')}>
      <Masthead title="Hey man, have as nice day!" image={require('../assets/masthead.png')}>
        <Navbar/>
      </Masthead>
      <VStack flex={1} space={1} mt="-20px" borderTopLeftRadius={20} borderTopRightRadius={20} pt="20px"
        bg={useColorModeValue('warmGray.50', 'primary.900')}
      >
        <TaskList data={data} editingItemId={editingItemId}
          onToggleItem={handleToggleTaskItem}
          onChangeSubject={handleChangeTaskItemSubject}
          onFinishEditing={handleFinishEditingTaskItem}
          onPressLabel={handlePressTaskItemLabel}
          onRemoveItem={handleRemoveItem}
        />
      </VStack>
      <Fab position="absolute" renderInPortal={false} size="sm" 
        icon={<Icon color="white" as={<AntDesign name="plus"/>} />}
        colorScheme={useColorModeValue('blue','darkBlue')}
        bg={useColorModeValue('blue.500','blue.400')}
        onPress={() => {
          const id = shortid.generate()
          setData([
            {
              id,
              subject: '',
              done: false
            },
            ...data
          ])
          setEditingItemId(id)
        }}
      />
    </AnimatedColorBox>
  )
}