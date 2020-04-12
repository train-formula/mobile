import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { StackHome } from './StackHome'
import { StackNutrition } from './StackNutrition'
import { StackPerformance } from './StackPerformance'
import colors from '../constants/colors'

export type TabNavigationParamList = {
  Home: undefined
  Nutrition: undefined
  Performance: undefined
}

const Tab = createBottomTabNavigator<TabNavigationParamList>()

type Props = {}

export const TabNavigation: React.FC<Props> = () => (
  <Tab.Navigator
    initialRouteName="Home"
    tabBarOptions={{
      activeTintColor: colors.white,
      inactiveTintColor: colors.greyInactive,
      style: {
        backgroundColor: colors.grey,
        borderTopWidth: 0,
      },
    }}
  >
    <Tab.Screen name="Nutrition" component={StackNutrition} />
    <Tab.Screen name="Home" component={StackHome} />
    <Tab.Screen name="Performance" component={StackPerformance} />
  </Tab.Navigator>
)
