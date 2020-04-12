import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Home } from '../screens/Home'
import { Workout } from '../screens/Workout'
import { Calendar } from '../screens/Calendar'

export type StackHomeParamList = {
  Home: undefined
  Workout: { workoutId: string }
  Calendar: undefined
  Modal: undefined
}

const Stack = createStackNavigator<StackHomeParamList>()

type Props = {}

export const StackHome: React.FC<Props> = () => {
  return (
    <Stack.Navigator initialRouteName="Home" headerMode="none">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Workout" component={Workout} />
      <Stack.Screen name="Calendar" component={Calendar} />
    </Stack.Navigator>
  )
}
