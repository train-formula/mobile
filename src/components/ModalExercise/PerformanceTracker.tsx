import React, { useState } from 'react'
import { Text } from 'react-native'
import styled from 'styled-components'

const Container = styled.View`
  margin-top: 16;
`
const Header = styled.View`
  display: flex;
  flex-direction: row;
`
const HeaderTitle = styled.Text`
  letter-spacing: 1;
  flex: 1;
  text-transform: uppercase;
  color: ${(p) => p.theme.white};
  ${(p) => p.theme.text18};
`
const Inputs = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-vertical: 8;
  position: relative;
`
const SetLabel = styled.Text`
  position: absolute;
  left: -5;
  align-self: center;
  text-transform: uppercase;
  color: ${(p) => p.theme.greyLight};
  ${(p) => p.theme.text16};
`
const Input = styled.TextInput`
  height: 40;
  flex: 1;
  text-align: center;
  border-color: ${(p) =>
    p.isComplete ? p.theme.brandPrimary : p.theme.greyLight};
  border-width: 1;
  color: ${(p) => (p.isComplete ? p.theme.brandPrimary : p.theme.white)};
  ${(p) => p.theme.textBold20};
`
const CompleteButton = styled.View`
  margin-top: 8;
  height: 40;
  width: 80%;
  align-self: center;
  align-items: center;
  justify-content: center;
  background: ${(p) => p.theme.brandPrimary};
`
const CompleteButtonText = styled.Text`
  letter-spacing: 2;
  text-transform: uppercase;
  color: ${(p) => p.theme.white};
  ${(p) => p.theme.text18};
`

type Props = {}

export const PerformanceTracker: React.FC<Props> = () => {
  const [isComplete, setIsComplete] = useState(false)

  return (
    <Container>
      <Header>
        <HeaderTitle>reps</HeaderTitle>
        <HeaderTitle>lbs</HeaderTitle>
      </Header>
      <Inputs>
        {/* <SetLabel>1</SetLabel> */}
        <Input
          keyboardType="numeric"
          style={{ marginRight: 5 }}
          isComplete={isComplete}
        />
        <Input keyboardType="numeric" isComplete={isComplete} />
      </Inputs>
      <Inputs>
        {/* <SetLabel>2</SetLabel> */}
        <Input
          keyboardType="numeric"
          style={{ marginRight: 5 }}
          isComplete={isComplete}
        />
        <Input keyboardType="numeric" isComplete={isComplete} />
      </Inputs>
      <Inputs>
        {/* <SetLabel>3</SetLabel> */}
        <Input
          keyboardType="numeric"
          style={{ marginRight: 5 }}
          isComplete={isComplete}
        />
        <Input keyboardType="numeric" isComplete={isComplete} />
      </Inputs>
      <CompleteButton>
        <CompleteButtonText onPress={() => setIsComplete(true)}>
          complete
        </CompleteButtonText>
      </CompleteButton>
    </Container>
  )
}
