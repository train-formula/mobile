import React from 'react'
import styled from 'styled-components'
import { Svg, Line } from 'react-native-svg'

const Container = styled.View`
  position: relative;
`
const Background = styled(Svg)`
  position: absolute;
  height: 100%;
  width: 100%;
`
const Progress = styled(Svg)`
  position: absolute;
  height: 100%;
  width: 100%;
`
const Header = styled.Text`
  top: -25;
  text-align: center;
  color: ${(p) => p.theme.white};
  text-transform: uppercase;
  ${(p) => p.theme.text14};
`
const MacroRatio = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-horizontal: 10;
`
const Label = styled.Text`
  color: white;
  text-align: center;
  letter-spacing: 0.8;
  text-transform: lowercase;
  color: ${(p) => p.theme.white};
  ${(p) => p.theme.text12};
`

type Props = {
  label: string
  grams: string
}

export const LineChart: React.FC<Props> = ({ label, grams }) => {
  return (
    <Container>
      <Header>{label}</Header>
      <Background width="100%" height="100%">
        <Line
          x1="100%"
          y1="0"
          x2="0"
          y2="0"
          stroke="rgba(255,255,255,.15)"
          strokeWidth="5"
        />
      </Background>
      <Progress width={`${grams}%`} height="100%">
        <Line x1="100%" y1="0" x2="0" y2="0" stroke="white" strokeWidth="5" />
      </Progress>
      <MacroRatio>
        <Label>19g eaten</Label>
        <Label>{grams}g left</Label>
      </MacroRatio>
    </Container>
  )
}
