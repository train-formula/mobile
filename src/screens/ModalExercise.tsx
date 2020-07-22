import React from 'react'
import { StackNavigationProp } from '@react-navigation/stack'

import { ModalExercise as ModalExerciseView } from '../components/ModalExercise'

type ModalParamList = {
  Modal: undefined
}

type ModalScreenNavigationProp = StackNavigationProp<ModalParamList, 'Modal'>

type Props = {
  navigation: ModalScreenNavigationProp
}

// https://github.com/leecade/react-native-swiper use this swiper for content (examples/components/Swiper)
export const ModalExercise: React.FC<Props> = ({ navigation }) => {
  return <ModalExerciseView navigation={navigation} />
}
