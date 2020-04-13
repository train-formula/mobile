import React from 'react'
import styled from 'styled-components'
import { StackNavigationProp } from '@react-navigation/stack'
import Animated from 'react-native-reanimated'
import { WebView } from 'react-native-webview'

import device from '../../constants/device'
import { Header } from './Header'
import { PerformanceTracker } from './PerformanceTracker'

const Container = styled.View`
  flex: 1;
  background: ${(p) => p.theme.blackBg};
  padding-horizontal: ${device.iPhoneX ? 36 : 24};
`
const Content = styled(Animated.ScrollView)`
  flex: 1;
`
const AssetContainer = styled.View``
const ExerciseImage = styled.Image`
  height: ${device.width - 48};
  width: ${device.width - 48};
  margin-vertical: ${device.iPhoneX ? 36 : 8};
`
const ExerciseVideo = styled(WebView)`
  height: ${device.width - 48};
  width: ${device.width - 48};
  margin-vertical: ${device.iPhoneX ? 36 : 8};
  opacity: ${(p) => (p.isLoading ? 0 : 1)};
`
const ExerciseTitle = styled.Text`
  letter-spacing: 0.8;
  text-transform: capitalize;
  color: ${(p) => p.theme.white};
  ${(p) => p.theme.textBold24};
`
const ExercisePrescription = styled.Text`
  letter-spacing: 0.8;
  color: ${(p) => p.theme.greyLight};
  ${(p) => p.theme.text18};
`
const ExerciseNotes = styled.Text`
  margin-top: 4;
  color: ${(p) => p.theme.white};
  ${(p) => p.theme.text18};
`

type ModalParamList = {
  Modal: undefined
}

type ModalScreenNavigationProp = StackNavigationProp<ModalParamList, 'Modal'>

type Props = {
  navigation: ModalScreenNavigationProp
}

export const ModalExercise: React.FC<Props> = ({ navigation }) => {
  return (
    <Container>
      <Header navigation={navigation} />
      <Content showsVerticalScrollIndicator={false}>
        <AssetContainer>
          {/* <ExerciseImage source={require('../assets/images/snatch.jpg')} /> */}
          <ExerciseVideo
            source={{ uri: 'https://www.youtube.com/embed/-0dwEUI9-hU' }}
            javaScriptEnabled={true}
            domStorageEnabled={true}
          />
        </AssetContainer>
        <ExerciseTitle>back squat</ExerciseTitle>
        <ExercisePrescription>3 x 4 reps @ 150lbs</ExercisePrescription>
        {/* {true && (
          <ExerciseNotes>
            Stand with the bar on your upper-back, and your feet shoulder-width
            apart. Squat down by pushing your knees to the side while moving
            hips back. Break parallel by Squatting down until your hips are
            lower than your knees. Squat back up while keeping your knees out
            and chest up.
          </ExerciseNotes>
        )} */}
        <PerformanceTracker />
      </Content>
    </Container>
  )
}
