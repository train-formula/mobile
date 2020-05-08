import React from 'react'
import { StackNavigationProp } from '@react-navigation/stack'

import { ModalAddFood as ModalAddFoodView } from '../components/ModalAddFood'

type ModalParamList = {
  Modal: undefined
}

type ModalScreenNavigationProp = StackNavigationProp<ModalParamList, 'Modal'>

type Props = {
  navigation: ModalScreenNavigationProp
}

export const ModalAddFood: React.FC<Props> = ({ navigation }) => {
  return <ModalAddFoodView navigation={navigation} />
}
