import React, { useState } from 'react'
import { AppLoading } from 'expo'
import { ThemeProvider } from 'styled-components'

import { func } from './src/constants'
import { Stack } from './src/navigation/Stack'
import theme from './src/theme'

export default function App() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      {isLoading ? (
        <AppLoading
          onFinish={() => setIsLoading(false)}
          startAsync={func.loadAssetsAsync}
        />
      ) : (
        <ThemeProvider theme={theme}>
          <Stack />
        </ThemeProvider>
      )}
    </>
  )
}

console.disableYellowBox = true
