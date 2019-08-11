import { StyleSheet, Dimensions} from 'react-native';
import { Colors, Metrics, Fonts, ApplicationStyles } from '../../Themes';
const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  rowHeader:{
    flexDirection: 'row',
    width: width,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
  },
  viewHistory:{
    padding: 10,
    paddingRight: 20,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'flex-end'
  },
  viewLogo:{
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
    alignSelf: 'center'
  },
  imgLogo:{
    height: 32,
    width: 32,
    alignSelf: 'center'
  },
  avaProfile:{
    justifyContent: 'center',
    padding: 10,
    paddingRight: 20,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'flex-start'
  },
  imgAva:{
    height: 32,
    width: 32,
    borderRadius: 60,
  },
  iconStyle:{
    alignSelf: 'center',
  },
})
