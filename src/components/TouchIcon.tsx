import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity } from 'react-native'

export const TouchIcon = ({ icon, iconSize, onPress, style }) => (
  <TouchableOpacity
    activeOpacity={0.7}
    onPress={onPress}
    hitSlop={{ bottom: 5, left: 5, right: 5, top: 5 }}
  >
    {React.cloneElement(icon, { size: iconSize })}
  </TouchableOpacity>
)

TouchIcon.defaultProps = {
  iconSize: 24,
  style: {},
}

TouchIcon.propTypes = {
  // required
  icon: PropTypes.element.isRequired,
  onPress: PropTypes.func.isRequired,

  // optional
  iconSize: PropTypes.number,
  style: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number,
    PropTypes.object,
  ]),
}

export default TouchIcon
