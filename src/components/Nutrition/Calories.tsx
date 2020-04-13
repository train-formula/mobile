import React, { Component } from 'react'
import styled from 'styled-components'
import Svg, { Circle, Text } from 'react-native-svg'

const CaloriesCount = styled(Text)``

class Demo extends Component {
  render() {
    const width = 200
    const height = 200
    const size = width < height ? width - 32 : height - 16
    const strokeWidth = 10
    const radius = (size - strokeWidth) / 2
    const circunference = radius * 2 * Math.PI

    return (
      <Svg width={width} height={size}>
        <CaloriesCount
          stroke="white"
          fontSize="15"
          x={size / 2}
          y={size / 2}
          textAnchor="middle"
        >
          Hey
        </CaloriesCount>
        <Circle
          stroke="#2162cc"
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeDasharray={`${circunference} ${circunference}`}
        />
      </Svg>
    )
  }
}

export default Demo
