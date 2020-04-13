import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import styled from 'styled-components'
import { BarCodeScanner } from 'expo-barcode-scanner'

import Calories from './Calories'
import device from '../../constants/device'

const Container = styled.View`
  flex: 1;
  background: ${(p) => p.theme.blackBg};
`
const Macros = styled.View`
  padding-horizontal: ${device.iPhoneX ? 36 : 24};
  padding-top: 48;
`

type Props = {}

export const Nutrition: React.FC<Props> = () => {
  const [hasPermission, setHasPermission] = useState(null)
  const [scanned, setScanned] = useState(false)

  useEffect(() => {
    ;(async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync()
      setHasPermission(status === 'granted')
    })()
  }, [])

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true)
    alert(`Bar code with type ${type} and data ${data} has been scanned!`)
  }

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>
  }

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}
    >
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />

      {scanned && (
        <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />
      )}
    </View>
    // <Container>
    //   <Macros>
    //     <Calories />
    //   </Macros>
    // </Container>
  )
}
