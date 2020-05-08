import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Nutrition } from '../screens/Nutrition'
import { BarcodeScanner } from '../screens/BarcodeScanner'

export type StackNutritionParamsList = {
  Nutrition: undefined
  BarcodeScanner: undefined
  // AddFoodModal: undefined
}

const Stack = createStackNavigator<StackNutritionParamsList>()

type Props = {}

export const StackNutrition: React.FC<Props> = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Nutrition" component={Nutrition} />
      <Stack.Screen name="BarcodeScanner" component={BarcodeScanner} />
    </Stack.Navigator>
  )
}
