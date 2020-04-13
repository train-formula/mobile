import React from 'react'
import styled from 'styled-components'
import { Feather } from '@expo/vector-icons'
import { StackNavigationProp } from '@react-navigation/stack'

import TouchIcon from '../TouchIcon'

const Container = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 48;
`
const HeaderTitle = styled.Text`
  letter-spacing: 0.8;
  text-transform: capitalize;
  color: ${(p) => p.theme.white};
  ${(p) => p.theme.textBold16};
`

type ModalParamList = {
  Modal: undefined
}

type ModalScreenNavigationProp = StackNavigationProp<ModalParamList, 'Modal'>

type Props = {
  navigation: ModalScreenNavigationProp
}

export const Header: React.FC<Props> = ({ navigation }) => {
  return (
    <Container>
      <TouchIcon
        icon={<Feather color="#fff" name="chevron-down" />}
        onPress={() => navigation.goBack()}
      />
      <HeaderTitle>back squat</HeaderTitle>
      <TouchIcon
        icon={<Feather color="#fff" name="more-horizontal" />}
        onPress={() => navigation.navigate('Modal')}
      />
    </Container>
  )
}
