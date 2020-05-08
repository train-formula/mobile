import React from 'react'
import { TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import styled from 'styled-components'
import { Feather } from '@expo/vector-icons'

import Calories from './Calories'
import { LineChart } from './LineChart'
import device from '../../constants/device'
import TouchIcon from '../TouchIcon'

const Container = styled.View`
  flex: 1;
  background: ${(p) => p.theme.blackBg};
`
const Macros = styled.View`
  padding-horizontal: ${device.iPhoneX ? 36 : 24};
  padding-top: 48;
  margin-bottom: 55;
`
const BarcodeScannerButton = styled.View``
const BarcodeScannerButtonText = styled.Text`
  color: white;
`
const MacroMeasurement = styled.View`
  padding-horizontal: 50;
  margin-vertical: 20;
`
const MealsContainer = styled.View`
  margin-top: 30;
  padding-horizontal: 20;
`
const MealAddButton = styled.View`
  flex-direction: row;
  background: white;
  padding-horizontal: 20;
  padding-vertical: 10;
  justify-content: space-between;
  margin-vertical: 10;
`
const MealAddButtonText = styled.Text`
  font-size: 14;
  letter-spacing: 10;
  text-transform: uppercase;
  ${(p) => p.theme.text18};
`
const AddIcon = styled(Feather)`
  font-size: 22;
  color: black;
`

type Props = {
  [key: string]: any
}

export const Nutrition: React.FC<Props> = ({ navigation }) => {
  return (
    <Container>
      <Macros>
        <Calories />
      </Macros>

      <MacroMeasurement>
        <LineChart label="protein" grams="17" />
      </MacroMeasurement>
      <MacroMeasurement>
        <LineChart label="carbs" grams="90" />
      </MacroMeasurement>
      <MacroMeasurement>
        <LineChart label="fat" grams="72" />
      </MacroMeasurement>

      <MealsContainer>
        <TouchableOpacity
          onPress={() => navigation.navigate('BarcodeScanner')}
          activeOpacity={0.7}
          hitSlop={{ bottom: 5, left: 5, right: 5, top: 5 }}
        >
          <MealAddButton>
            <MealAddButtonText>breakfast</MealAddButtonText>
            <AddIcon name="plus" />
          </MealAddButton>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('BarcodeScanner')}
          activeOpacity={0.7}
          hitSlop={{ bottom: 5, left: 5, right: 5, top: 5 }}
        >
          <MealAddButton>
            <MealAddButtonText>lunch</MealAddButtonText>
            <AddIcon name="plus" />
          </MealAddButton>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('BarcodeScanner')}
          activeOpacity={0.7}
          hitSlop={{ bottom: 5, left: 5, right: 5, top: 5 }}
        >
          <MealAddButton>
            <MealAddButtonText>dinner</MealAddButtonText>
            <AddIcon name="plus" />
          </MealAddButton>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('BarcodeScanner')}
          activeOpacity={0.7}
          hitSlop={{ bottom: 5, left: 5, right: 5, top: 5 }}
        >
          <MealAddButton>
            <MealAddButtonText>custom meal</MealAddButtonText>
            <AddIcon name="plus" />
          </MealAddButton>
        </TouchableOpacity>
      </MealsContainer>
    </Container>
  )
}
