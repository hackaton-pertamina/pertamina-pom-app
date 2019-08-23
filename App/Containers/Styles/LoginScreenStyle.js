import { StyleSheet, Dimensions} from 'react-native';
import { Colors, Metrics, Fonts, ApplicationStyles } from '../../Themes';
const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  viewMargin:{
    margin: 16,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  viewImage:{
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 16,
  },
  viewCol:{
    margin: 16,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    padding: 16,
  },
  viewRow:{
    margin: 8,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  view2Button:{
    flex: 4,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  text16:{
    textAlign: 'center',
    ...Fonts.style.medium16,
    color: Colors.black,
    fontWeight: 'bold'
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
  imgContainer:{
    height: height/3,
    width: width/3,
    alignSelf: 'center'
  }
})
