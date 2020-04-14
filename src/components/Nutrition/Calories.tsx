import React, { Component } from 'react'
import styled from 'styled-components'
import { ProgressCircle } from 'react-native-svg-charts'

// position: absolute;
// top: 0;
// left: 0;
// right: 0;
// bottom: 0;
const CaloriesTextContainer = styled.View`
  justify-content: center;
  align-items: center;
`
const CaloriesCount = styled.Text`
  letter-spacing: 1;
  color: ${(p) => p.theme.white};
  ${(p) => p.theme.text18};
`
const CaloriesLabel = styled.Text`
  letter-spacing: 1;
  text-transform: lowercase;
  color: ${(p) => p.theme.white};
  ${(p) => p.theme.text12};
`

class Demo extends Component {
  render() {
    return (
      <ProgressCircle
        style={{ height: 150 }}
        progress={0.7}
        progressColor={'rgb(255, 255, 255)'}
        backgroundColor="rgba(255,255,255,.15)"
        strokeWidth="3"
      >
        <CaloriesTextContainer>
          <CaloriesCount>859</CaloriesCount>
          <CaloriesLabel>calories left</CaloriesLabel>
        </CaloriesTextContainer>
      </ProgressCircle>
    )
  }
}

export default Demo
