import React, { Component } from 'react'
import { StatusBar, Image, View, Text } from 'react-native'
import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate("HomeScreen");
    }, 1500);
  }

  render () {
    return (      
      <View style={styles.container}>
        <StatusBar backgroundColor={"#f1c40f"} barStyle='light-content' />
          <View style={styles.section}>
            <Text style={styles.textTitle}> LetsGas
            </Text>
          </View>
        </View>
    )
  }
}

 
