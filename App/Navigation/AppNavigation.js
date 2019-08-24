import { createStackNavigator, createAppContainer } from 'react-navigation'
import SignupScreen from '../Containers/SignupScreen'
import LoginScreen from '../Containers/LoginScreen'
import IntroScreen from '../Containers/IntroScreen'
import ServiceLocationScreen from '../Containers/ServiceLocationScreen'
import HistoryUsageScreen from '../Containers/HistoryUsageScreen'
import HistoryTransactionScreen from '../Containers/HistoryTransactionScreen'
import PaketServiceScreen from '../Containers/PaketServiceScreen'
import PaketSubscriptionScreen from '../Containers/PaketSubscriptionScreen'
import MyOrderScreen from '../Containers/MyOrderScreen'
import InsertPinScreen from '../Containers/InsertPinScreen'
import CartScreen from '../Containers/CartScreen'
import DetailPaketScreen from '../Containers/DetailPaketScreen'
import HomeScreen from '../Containers/HomeScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  SignupScreen: { screen: SignupScreen },
  LoginScreen: { 
    screen: LoginScreen,
    navigationOptions: {
      header: null,
  }},
  IntroScreen: { 
    screen: IntroScreen,
    navigationOptions: {
      header: null,
  }},
  ServiceLocationScreen: { 
    screen: ServiceLocationScreen,
    navigationOptions: {
      header: null,
  }},
  HistoryUsageScreen: {
    screen: HistoryUsageScreen,
    navigationOptions: {
      header: null,
  }},
  HistoryTransactionScreen: { 
    screen: HistoryTransactionScreen,
    navigationOptions: {
      header: null,
  }},
  PaketServiceScreen: { screen: PaketServiceScreen },
  PaketSubscriptionScreen: { 
    screen: PaketSubscriptionScreen,
    navigationOptions: {
      header: null,
  }},
  MyOrderScreen: { 
    screen: MyOrderScreen,
    navigationOptions: {
      header: null,
  }},
  InsertPinScreen: { 
    screen: InsertPinScreen,
    navigationOptions: {
      header: null,
  }},
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
  initialRouteName: 'IntroScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default createAppContainer(PrimaryNav)
