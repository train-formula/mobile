import React from 'react'
import styled from 'styled-components'

import Calories from './Calories'
import LineChart from './LineChart'
import device from '../../constants/device'
import { View } from 'react-native'

const Container = styled.View`
  flex: 1;
  background: ${(p) => p.theme.blackBg};
`
const Macros = styled.View`
  padding-horizontal: ${device.iPhoneX ? 36 : 24};
  padding-top: 48;
`
const Other = styled.View`
  margin-top: 60;
  flex-direction: row;
  justify-content: space-around;
`
const Test = styled.View`
  flex: 1;
  margin-horizontal: 20;
`

type Props = {}

export const Nutrition: React.FC<Props> = () => {
  return (
    <Container>
      <Macros>
        <Calories />
      </Macros>
      <Other>
        <Test>
          <LineChart />
        </Test>
        <Test>
          <LineChart />
        </Test>
        <Test>
          <LineChart />
        </Test>
      </Other>
    </Container>
  )
}
