import React, { Component } from 'react'
import { TouchableHighlight, Image, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import * as Img from '../../../utils/imagePath'

export default class BackButton extends Component {
  static propTypes = {
    onGoBack: PropTypes.func,
    underlayColor: PropTypes.string,
    tintColor: PropTypes.string,
  }

  static defaultProps = {
    underlayColor: '#ffffff',
    tintColor: '#000000'
  }

  render() {
    const { onGoBack, underlayColor, tintColor } = this.props
    return (
      <TouchableHighlight
        onPress={onGoBack}
        underlayColor={underlayColor}
        style={styles.backTouchableHightlight}
      >
        <Image
          resizeMode="cover"
          source={Img.backnav_icon}
          style={styles.imageViewStyle(tintColor)}
        />
      </TouchableHighlight>
    )
  }
}
const styles = StyleSheet.create({
  backTouchableHightlight: { 
    marginLeft: 10, 
    padding: 10, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  imageViewStyle: tintColor => ({ 
    tintColor: tintColor, 
    width: 10, 
    height: 15, 
    resizeMode: 'stretch' 
  })
});