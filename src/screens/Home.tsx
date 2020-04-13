import React from 'react'
import Animated from 'react-native-reanimated'
import { StackNavigationProp } from '@react-navigation/stack'
import styled from 'styled-components'

import { StackHomeParamList } from '../navigation/StackHome'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

const ButtonContainer = styled.View`
  margin-top: 100;
  border-top-width: 1.2;
  border-top-color: rgba(255, 255, 255, 0.5);
  border-right-width: 1.2;
  border-right-color: rgba(255, 255, 255, 0.5);
  border-bottom-width: 1.2;
  border-bottom-color: rgba(255, 255, 255, 0.5);
  border-left-width: 1.2;
  border-left-color: rgba(255, 255, 255, 0.5);
  justify-content: center;
  align-items: center;
`
const ButtonText = styled.Text`
  font-size: 16;
  letter-spacing: 2;
  padding-top: 25;
  padding-bottom: 25;
  color: white;
  text-transform: uppercase;
`

type ButtonProps = {
  navigation: HomeScreenNavigationProp
}

const Button: React.FC<ButtonProps> = ({ navigation }) => {
  return (
    <ButtonContainer>
      <ButtonText>let's train!</ButtonText>
    </ButtonContainer>
  )
}

const DetailsButton = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-self: flex-end;
`
const DetailsButtonText = styled.Text`
  font-size: 10;
  letter-spacing: 1;
  color: white;
`

type DetailButtonProps = {
  navigation: HomeScreenNavigationProp
}

const DetailButton: React.FC<DetailButtonProps> = ({ navigation }) => {
  return <DetailsButtonText>see all workouts</DetailsButtonText>
}

const Header = styled.ImageBackground`
  height: 600;
`
const HeaderContent = styled.View`
  flex: 1;
  width: 100%;
  padding-top: 30%;
  padding-horizontal: 20;
  background-color: rgba(0, 0, 0, 0.35);
`
const HeaderText = styled.Text`
  font-size: 40;
  font-weight: 300;
  color: white;
`

const Container = styled(Animated.ScrollView)`
  background: ${(p) => p.theme.blackBg};
`

type HomeScreenNavigationProp = StackNavigationProp<StackHomeParamList, 'Home'>

type Props = {
  navigation: HomeScreenNavigationProp
}

export const Home: React.FC<Props> = ({ navigation }) => {
  return (
    <Container>
      <Header
        resizeMode="cover"
        source={require('../assets/images/crunch.jpg')}
      >
        <HeaderContent>
          <HeaderText>Next Up:</HeaderText>
          <HeaderText>Full Body Blast</HeaderText>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('Workout')}
          >
            <Button navigation={navigation} />
          </TouchableWithoutFeedback>
          <DetailsButton>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('Calendar')}
            >
              <DetailButton navigation={navigation} />
            </TouchableWithoutFeedback>
          </DetailsButton>
        </HeaderContent>
      </Header>
      {/* <Button
        title="open workout"
        onPress={() => navigation.navigate('Workout')}
      />
      <Button title="open modal" onPress={() => navigation.navigate('Modal')} />
      <View>
        <Text>test</Text>
      </View> */}
    </Container>
  )
}
