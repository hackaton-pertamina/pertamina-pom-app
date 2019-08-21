import { createStackNavigator, createAppContainer } from 'react-navigation'
import MyOrderScreen from '../Containers/MyOrderScreen'
import InsertPinScreen from '../Containers/InsertPinScreen'
import CartScreen from '../Containers/CartScreen'
import DetailPaketScreen from '../Containers/DetailPaketScreen'
import HomeScreen from '../Containers/HomeScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  MyOrderScreen: { screen: MyOrderScreen },
  InsertPinScreen: { screen: InsertPinScreen },
  CartScreen: { 
    screen: CartScreen,
    navigationOptions: {
      header: null,
  }},
  DetailPaketScreen: { screen: DetailPaketScreen },
  HomeScreen: { 
    screen: HomeScreen, 
    navigationOptions: {
      header: null,
  }},
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'HomeScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default createAppContainer(PrimaryNav)
