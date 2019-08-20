import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native'
import { Colors, Images } from '../Themes';
import styles from './Styles/SubscriptionStyle'
import ButtonCustom from '../Components/ButtonCustom';
export default class Subscription extends Component {

  render () {
    const {onPress, isSubs} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.viewInfo}>
          <Text style={styles.textTitle}>Pertamina</Text>
          <Text style={styles.textSubTitle}>Bensin Subscription</Text>
          <ButtonCustom onPress={onPress} bgColor={Colors.orange} textMain={'Beli Sekarang'} />
        </View>
        <View style={styles.viewImage}>
          <Image
            resizeMode="contain"
            source={Images.subscribe}
            style={styles.imgSubs}/>
        </View>
      </View>
    )
  }
}
