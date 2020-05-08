import React from 'react'
import styled from 'styled-components'

import Calories from './Calories'
import { LineChart } from './LineChart'
import device from '../../constants/device'
import { View, TouchableWithoutFeedback } from 'react-native'

const Container = styled.View`
  flex: 1;
  background: ${(p) => p.theme.blackBg};
`
const Macros = styled.View`
  padding-horizontal: ${device.iPhoneX ? 36 : 24};
  padding-top: 48;
  margin-bottom: 40;
`
const Other = styled.View`
  margin-top: 60;
  flex-direction: row;
`
const Test = styled.View`
  flex: 1;
  margin-horizontal: 20;
`
const BarcodeScannerButton = styled.View``
const BarcodeScannerButtonText = styled.Text`
  color: white;
`
const MacroMeasurement = styled.View`
  padding-horizontal: 50;
  margin-vertical: 20;
`

type Props = {
  [key: string]: any
}

export const Nutrition: React.FC<Props> = ({ navigation }) => {
  console.log('navigation', navigation)
  return (
    <Container>
      <Macros>
        <Calories />
      </Macros>
      {/* <MacroMeasurement>
        <LineChart label="calories" grams="90" />
      </MacroMeasurement> */}
      <MacroMeasurement>
        <LineChart label="protein" grams="17" />
      </MacroMeasurement>
      <MacroMeasurement>
        <LineChart label="carbs" grams="90" />
      </MacroMeasurement>
      <MacroMeasurement>
        <LineChart label="fat" grams="72" />
      </MacroMeasurement>
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate('BarcodeScanner')}
      >
        <BarcodeScannerButton>
          <BarcodeScannerButtonText>
            open barcode scanner
          </BarcodeScannerButtonText>
        </BarcodeScannerButton>
      </TouchableWithoutFeedback>
      {/* <Other>
        <Test>
          <LineChart label="protein" grams="41" />
        </Test>
        <Test>
          <LineChart label="carbs" grams="24" />
        </Test>
      </Other> */}
    </Container>
  )
}
