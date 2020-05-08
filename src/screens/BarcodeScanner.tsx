import React from 'react'
import { StackNavigationProp } from '@react-navigation/stack'

import { StackNutritionParamsList } from '../navigation/StackNutrition'
import { BarcodeScanner as BarcodeScannerView } from '../components/BarcodeScanner'

type NutritionNavigationProp = StackNavigationProp<
  StackNutritionParamsList,
  'Nutrition'
>

type Props = {
  navigation: NutritionNavigationProp
}

export const BarcodeScanner: React.FC<Props> = ({ navigation }) => {
  return <BarcodeScannerView navigation={navigation} />
}
