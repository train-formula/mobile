import React from 'react'
import { StackNavigationProp } from '@react-navigation/stack'

import { StackHomeParamList } from '../navigation/StackHome'
import { Workout as WorkoutView } from '../components/Workout'

type HomeScreenNavigationProp = StackNavigationProp<StackHomeParamList, 'Home'>

type Props = {
  navigation: HomeScreenNavigationProp
}

export const Workout: React.FC<Props> = ({ navigation }) => {
  return <WorkoutView navigation={navigation} />
}
