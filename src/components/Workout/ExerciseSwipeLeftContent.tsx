import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components'
import { Ionicons } from '@expo/vector-icons'

const Container = styled.View`
  background: ${(p) =>
    p.isCompleted ? p.theme.greyOff : p.theme.brandPrimary};
  flex: 1;
  align-items: flex-end;
  justify-content: center;
`
const CompletionIcon = styled(Ionicons)`
  color: white;
  margin-right: 10;
`

type Props = {
  isCompleted: boolean
}

export const ExerciseSwipeLeftContent: React.FC<Props> = ({ isCompleted }) => {
  return (
    <Container isCompleted={isCompleted}>
      <CompletionIcon
        name={isCompleted ? 'md-close' : 'md-checkmark'}
        size={30}
      />
    </Container>
  )
}
