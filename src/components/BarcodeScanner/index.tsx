import React, { useEffect, useState } from 'react'
import {
  StyleSheet,
  Text,
  Button,
  TouchableWithoutFeedback,
} from 'react-native'
import styled from 'styled-components'
import { BarCodeScanner } from 'expo-barcode-scanner'

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
`
const ModalAddFoodButton = styled.View``
const ModalAddFoodButtonText = styled.Text`
  color: white;
`

type Props = {
  [key: string]: any
}

export const BarcodeScanner: React.FC<Props> = ({ navigation }) => {
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
    <Container>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate('ModalAddFood')}
      >
        <ModalAddFoodButton>
          <ModalAddFoodButtonText>open ModalAddFood</ModalAddFoodButtonText>
        </ModalAddFoodButton>
      </TouchableWithoutFeedback>
      {scanned && (
        <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />
      )}
    </Container>
  )
}
