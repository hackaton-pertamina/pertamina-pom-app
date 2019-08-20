import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native'
import { Colors, Images } from '../Themes';
import styles from './Styles/SubscriptionStyle'
import ButtonCustom from '../Components/ButtonCustom';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default class Subscription extends Component {

  render () {
    const {onPressSub, onPressOrder, isSubs, saldo, typeId, name, days} = this.props;
    
    const notSubs = 
      <View style={styles.container}>
        <View style={styles.viewInfo}>
          <Text style={styles.textTitle}>Pertamina</Text>
          <Text style={styles.textSubTitle}>Bensin Subscription</Text>
          <ButtonCustom onPress={onPressSub} bgColor={Colors.orange} textMain={'Beli Sekarang'} />
        </View>
        <View style={styles.viewImage}>
          <Image
            resizeMode="contain"
            source={Images.subscribe}
            style={styles.imgSubs}/>
        </View>
      </View>
    
    const subscribed =
      <View style={styles.container}>
        <View style={styles.row1}>
          <Icon
            style={styles.iconStyle}
            name="gas-station"
            size={24}
            color={Colors.redIcon}
          />
          <View style={styles.col1}>
            <Text style={styles.text12}>Saldo</Text>
            <Text 
              style={[styles.text10, 
                        typeId == 1 && {color : Colors.green},
                        typeId == 2 && {color : Colors.yellow},
                        typeId == 3 && {color : Colors.blue},
                        typeId == 4 && {color : Colors.txtRed}]}>
              {name}
            </Text>
          </View>
        </View>
        <View style={styles.col2}>
          <Text style={styles.textTitleBlack}>{saldo} Liter</Text>
          <Text style={[styles.text10, {color: Colors.lblGrey}]}> Sisa {days} hari lagi </Text>
        </View>
        <View style={styles.col3}>
          <ButtonCustom 
            onPress={onPressOrder} 
            inStyle={{backgroundColor: Colors.orange}}
            textMain={'Pesan Sekarang'} />
        </View>
      </View>

    if(isSubs) {
      return ( subscribed )
    } else {
      return ( notSubs )
    }
  }
}
