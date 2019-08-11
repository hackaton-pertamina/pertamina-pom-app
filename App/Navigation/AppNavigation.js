import { createStackNavigator, createAppContainer } from 'react-navigation'
import DetailPaketScreen from '../Containers/DetailPaketScreen'
import HomeScreen from '../Containers/HomeScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
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
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default createAppContainer(PrimaryNav)
