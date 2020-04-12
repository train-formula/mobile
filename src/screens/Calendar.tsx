import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components'
import { Calendar as RNCalendar } from 'react-native-calendars'

const Container = styled.View``

type Props = {}

export const Calendar: React.FC<Props> = () => {
  return (
    <Container>
      <Text>Calendar</Text>
      <RNCalendar />
    </Container>
  )
}
