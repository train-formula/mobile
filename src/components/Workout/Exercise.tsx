import React, { Dispatch, SetStateAction, useState } from 'react'
import styled from 'styled-components'
import Swipeable from 'react-native-swipeable'

import { ExerciseSwipeLeftContent } from './ExerciseSwipeLeftContent'

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
}

export const Exercise: React.FC<Props> = ({
  title,
  prescription,
  setIsScrollable,
}) => {
  const [isCompleted, setIsExerciseCompleted] = useState(false)

  return (
    <Swipeable
      leftContent={<ExerciseSwipeLeftContent isCompleted={isCompleted} />}
      onSwipeStart={() => setIsScrollable(false)}
      onSwipeRelease={() => setIsScrollable(true)}
      onLeftActionComplete={() => setIsExerciseCompleted(!isCompleted)}
    >
      <Container>
        <Title isCompleted={isCompleted}>{title}</Title>
        <Prescription isCompleted={isCompleted}>{prescription}</Prescription>
      </Container>
    </Swipeable>
  )
}
