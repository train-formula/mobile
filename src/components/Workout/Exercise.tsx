import React, { Dispatch, SetStateAction, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components'
import Swipeable from 'react-native-swipeable'
import { StackNavigationProp } from '@react-navigation/stack'

import { ExerciseSwipeLeftContent } from './ExerciseSwipeLeftContent'
import { StackHomeParamList } from '../../navigation/StackHome'

const Container = styled.View`
  padding-horizontal: 24;
  padding-vertical: 12;
`
const Title = styled.Text`
  letter-spacing: 0.8;
  text-transform: capitalize;
  color: ${(p) => (p.isCompleted ? p.theme.greyOff : p.theme.white)};
  ${(p) => p.theme.text18};
`
const Prescription = styled.Text`
  letter-spacing: 0.8;
  color: ${(p) => (p.isCompleted ? p.theme.greyOff : p.theme.white)};
  ${(p) => p.theme.text14};
`

type Props = {
  title: string
  prescription: string
  setIsScrollable: Dispatch<SetStateAction<boolean>>
  navigation: StackNavigationProp<StackHomeParamList, 'Home'>
}

export const Exercise: React.FC<Props> = ({
  title,
  prescription,
  setIsScrollable,
  navigation,
}) => {
  const [isCompleted, setIsExerciseCompleted] = useState(false)

  return (
    <Swipeable
      leftContent={<ExerciseSwipeLeftContent isCompleted={isCompleted} />}
      onSwipeStart={() => setIsScrollable(false)}
      onSwipeRelease={() => setIsScrollable(true)}
      onLeftActionComplete={() => setIsExerciseCompleted(!isCompleted)}
    >
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.navigate('Modal')}
      >
        <Container>
          <Title isCompleted={isCompleted}>{title}</Title>
          <Prescription isCompleted={isCompleted}>{prescription}</Prescription>
        </Container>
      </TouchableOpacity>
    </Swipeable>
  )
}
