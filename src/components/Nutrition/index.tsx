import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components'

import Calories from './Calories'
import device from '../../constants/device'

const Container = styled.View`
  flex: 1;
  background: ${(p) => p.theme.blackBg};
`
const Macros = styled.View`
  padding-horizontal: ${device.iPhoneX ? 36 : 24};
  padding-top: 48;
`

type Props = {}

export const Nutrition: React.FC<Props> = () => {
  return (
    <Container>
      <Macros>
        <Calories />
      </Macros>
    </Container>
  )
}
