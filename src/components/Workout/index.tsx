import React, { useState } from 'react'
import styled from 'styled-components'
import Animated from 'react-native-reanimated'
import { Feather } from '@expo/vector-icons'

import data from '../../data'

import device from '../../constants/device'
import { TouchIcon } from '../TouchIcon'
import { Exercise } from './Exercise'

const Container = styled.View`
  flex: 1;
  background: ${(p) => p.theme.blackBg};
`
const Header = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding-horizontal: ${device.iPhoneX ? 36 : 24};
  padding-top: 48;
`
const WorkoutTitle = styled.Text`
  letter-spacing: 0.8;
  color: ${(p) => p.theme.white};
  ${(p) => p.theme.textBold16};
`
const Content = styled(Animated.ScrollView)`
  flex: 1;
  margin-top: 18;
`
const Title = styled.Text`
  text-align: center;
  padding-horizontal: 24;
  letter-spacing: 1;
  text-transform: uppercase;
  color: ${(p) => p.theme.greyLight};
  ${(p) => p.theme.text16};
`
const GroupTitle = styled.Text`
  letter-spacing: 2;
  text-transform: uppercase;
  text-align: center;
  color: ${(p) => p.theme.greyLight};
  ${(p) => p.theme.text12};
`
const Divider = styled.View`
  width: 60%;
  left: 20%;
  padding-vertical: 2;
  border-bottom-width: 0.25;
  border-bottom-color: ${(p) => p.theme.greyLight};
`
type Props = {
  [key: string]: any
}

export const Workout: React.FC<Props> = ({ navigation }) => {
  const [isScrollable, setIsScrollable] = useState(true)

  return (
    <Container>
      <Header>
        <TouchIcon
          icon={<Feather color="#fff" name="chevron-left" />}
          onPress={() => navigation.goBack(null)}
        />
        <WorkoutTitle>Back Squats</WorkoutTitle>
        {/* <WorkoutTitle>{''}</WorkoutTitle> */}
        <TouchIcon
          icon={<Feather color="#fff" name="more-horizontal" />}
          onPress={() => navigation.navigate('Modal')}
        />
      </Header>

      <Content scrollEnabled={isScrollable}>
        {data.map((category) => {
          return (
            <>
              <Title>{category.name}</Title>
              <Divider />
              {category.blocks.map((block) => {
                return block.exercises.map((exercise) => {
                  return (
                    <Exercise
                      title={exercise.exercise.name}
                      prescription={exercise.prescription.name}
                      setIsScrollable={setIsScrollable}
                    />
                  )
                })
              })}
            </>
          )
        })}
      </Content>
    </Container>
  )
}
