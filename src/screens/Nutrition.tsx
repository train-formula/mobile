import React from 'react'
import { StackNavigationProp } from '@react-navigation/stack'

import { StackNutritionParamsList } from '../navigation/StackNutrition'
import { Nutrition as NutritionView } from '../components/Nutrition'

type NutritionScreenNavigationProp = StackNavigationProp<
  StackNutritionParamsList,
  'Nutrition'
>

type Props = {
  navigation: NutritionScreenNavigationProp
}

export const Nutrition: React.FC<Props> = ({ navigation }) => {
  console.log('asdkha;dhg', navigation)
  return <NutritionView navigation={navigation} />
}
