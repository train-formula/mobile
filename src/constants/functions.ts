import { Image } from 'react-native'
import { Permissions } from 'expo'
import { Asset } from 'expo-asset'
import * as Font from 'expo-font'

import preloadFonts from './preloadFonts'
import preloadImages from './preloadImages'

// cache fonts
// /////////////////////////////////////////////////////////////////////////////
const cacheFonts = fonts => fonts.map(font => Font.loadAsync(font))

// cache images
// /////////////////////////////////////////////////////////////////////////////
const cacheImages = (images: { [key: string]: string }) => {
  return Object.values(images).map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image)
    }

    return Asset.fromModule(image).downloadAsync()
  })
}

// preload async
// /////////////////////////////////////////////////////////////////////////////
const loadAssetsAsync = async () => {
  // preload assets
  const fontAssets = cacheFonts(preloadFonts)
  const imageAssets = cacheImages(preloadImages)

  // promise load all
  Promise.all([...fontAssets, ...imageAssets])
}

// camera permissions
// /////////////////////////////////////////////////////////////////////////////
const cameraAccessAsync = async () => {
  // get exisiting camera permissions first
  const { status: existingStatus } = await Permissions.getAsync(
    Permissions.CAMERA
  )
  let finalStatus = existingStatus

  // ask again to grant camera permissions (if not already allowed)
  if (existingStatus !== 'granted') {
    const { status } = await Permissions.askAsync(Permissions.CAMERA)
    finalStatus = status
  }

  return finalStatus === 'granted'
}

// format seconds
// /////////////////////////////////////////////////////////////////////////////
const formatTime = sec => {
  const padTime = (num, size) => `000${num}`.slice(size * -1)
  const time: number = Number(parseFloat(sec).toFixed(3))
  const minutes = Math.floor(time / 60) % 60
  const seconds = Math.floor(time - minutes * 60)

  return `${padTime(minutes, 1)}:${padTime(seconds, 2)}`
}

export default {
  cacheFonts,
  cacheImages,
  loadAssetsAsync,
  cameraAccessAsync,
  formatTime,
}
