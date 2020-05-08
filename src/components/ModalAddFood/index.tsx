import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components'

const Container = styled.View`
  color: white;
  background: red;
`

type Props = {
  [key: string]: any
}

export const ModalAddFood: React.FC<Props> = () => {
  return (
    <Container>
      <Text>ModalAddFood</Text>
    </Container>
  )
}
