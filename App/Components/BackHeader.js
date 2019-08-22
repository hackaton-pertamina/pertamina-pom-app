import React, { Component } from 'react';
import { 
  Text, 
  Image, 
  View, 
  TouchableOpacity, 
} from 'react-native';
// Styles
import styles from './Styles/BackHeaderStyle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Images, Colors } from '../Themes';

export default class BackHeader extends Component {
  constructor (props) {
    super(props);
    
  }

  render() {
    const {backPress, title, titleText, subTitle, subTitleText, logo, isClose} = this.props;

    return (
      <View style={styles.header}>
        <TouchableOpacity onPress={() => backPress()}>
          <Icon
            style={{alignSelf: 'center'}}
            name={isClose ? 'close' : 'arrow-left'}
            size={25}
            color={'#000000'}
          />
        </TouchableOpacity>
        { title &&
          <Text style={styles.textTitle}>
            {titleText}
          </Text>
        }
        { subTitle &&
          <View style={styles.colText}>
            <Text style={styles.textTitle}>
              {titleText}
            </Text>
            <Text style={styles.textSubTitle}>
              {subTitleText}
            </Text>
          </View>
        }
        { logo &&
          <View style={styles.colText}>
              <Image
                resizeMode="contain"
                source={Images.logo}
                style={styles.imgLogo}/>
          </View>
        }
      </View> 
    )
  }
}
