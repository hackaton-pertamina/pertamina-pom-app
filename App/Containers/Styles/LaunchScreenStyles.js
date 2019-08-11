import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  logo: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: "contain"
  },
  centered: {
    alignItems: "center"
  },
  container: {
    flex: 1,
    justifyContent: "center"
  },
  section:{
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
  },
  Image: {
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain'
  },
  textTitle: {
    fontSize: 32,
    color: '#e74c3c',
    textAlign: 'center'
  }
})
