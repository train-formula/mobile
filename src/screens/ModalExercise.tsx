import React from 'react'
import { View, Button, Text } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import styled from 'styled-components'

const Container = styled.View``

type ModalParamList = {
  Modal: undefined
}

type ModalScreenNavigationProp = StackNavigationProp<ModalParamList, 'Modal'>

type Props = {
  navigation: ModalScreenNavigationProp
}

export const ModalExercise: React.FC<Props> = ({ navigation }) => {
  return (
    <Container style={{ backgroundColor: 'red', flex: 1, paddingTop: 48 }}>
      <Text>I AM THE MODAL BITCH</Text>
      <Text>I AM THE MODAL BITCH</Text>
      <Text>I AM THE MODAL BITCH</Text>
      <Text>I AM THE MODAL BITCH</Text>
      <Button title="click" onPress={() => navigation.goBack()} />
    </Container>
  )
}
