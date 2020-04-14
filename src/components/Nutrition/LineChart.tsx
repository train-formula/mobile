import React from 'react'
import styled from 'styled-components'
import { Svg, Line } from 'react-native-svg'

const Container = styled.View`
  position: relative;
  width: 100%;
`
const Background = styled(Svg)`
  position: absolute;
  height: 100;
  width: 100%;
`
const Progress = styled(Svg)`
  position: absolute;
  height: 100;
  width: 100%;
`
const Header = styled.Text`
  top: -25;
  text-align: center;
  color: ${(p) => p.theme.white};
  text-transform: uppercase;
  ${(p) => p.theme.text14};
`
const Label = styled.Text`
  margin-top: 10;
  position: absolute;
  width: 100%;
  color: white;
  text-align: center;
  letter-spacing: 1;
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
      <Background>
        <Line
          x1="0"
          y1="0"
          x2="180"
          y2="0"
          stroke="rgba(255,255,255,.15)"
          strokeWidth="5"
        />
      </Background>
      <Progress height="100" width={100 - grams}>
        <Line x1="0" y1="0" x2="180" y2="0" stroke="white" strokeWidth="5" />
      </Progress>
      <Label>{grams} g left</Label>
    </Container>
  )
}
