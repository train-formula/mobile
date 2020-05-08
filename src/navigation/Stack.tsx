import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { TabNavigation } from './TabNavigation'
import { ModalExercise } from '../screens/ModalExercise'
import { ModalAddFood } from '../screens/ModalAddFood'

type RootStackParamList = {
  Main: undefined
  Modal: undefined
  ModalAddFood: undefined
}

const RootStack = createStackNavigator<RootStackParamList>()

type Props = {}

export const Stack: React.FC<Props> = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator headerMode="none" mode="modal">
        <RootStack.Screen name="Main" component={TabNavigation} />
        <RootStack.Screen name="Modal" component={ModalExercise} />
        <RootStack.Screen
          name="ModalAddFood"
          component={ModalAddFood}
          // options={{ cardStyle: { backgroundColor: 'transparent' } }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}
