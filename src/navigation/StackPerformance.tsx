import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Performance } from '../screens/Performance'

const Stack = createStackNavigator()

type Props = {}

export const StackPerformance: React.FC<Props> = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Performance" component={Performance} />
    </Stack.Navigator>
  )
}
