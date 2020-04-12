import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Nutrition } from '../screens/Nutrition'

const Stack = createStackNavigator()

type Props = {}

export const StackNutrition: React.FC<Props> = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Nutrition" component={Nutrition} />
    </Stack.Navigator>
  )
}
