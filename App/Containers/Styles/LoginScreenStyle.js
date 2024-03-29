import { StyleSheet, Dimensions} from 'react-native';
import { Colors, Metrics, Fonts, ApplicationStyles } from '../../Themes';
const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  viewMargin:{
    marginTop: 16,
    marginLeft: 16,
    marginRight: 16,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  viewRow:{
    marginLeft: 16,
    marginRight: 16,
    marginTop: 5,
    marginBottom: 8,
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  text16:{
    textAlign: 'left',
    ...Fonts.style.medium16,
    color: Colors.black,
  },
  text14:{
    textAlign: 'center',
    ...Fonts.style.roboto14,
    color: Colors.black,
    marginTop: 16
  },
  text10:{
    textAlign: 'center',
    ...Fonts.style.roboto10,
    color: Colors.black,
  },
  viewRow1:{
    flex: 4,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  viewBorder:{
    height: 1,
    width: width/3,
    borderBottomColor: Colors.black,
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 16,
  }
})
