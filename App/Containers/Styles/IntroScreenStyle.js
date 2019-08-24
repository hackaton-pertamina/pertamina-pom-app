import { StyleSheet, Dimensions} from 'react-native';
import { Colors, Metrics, Fonts, ApplicationStyles } from '../../Themes';
const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  viewMargin:{
    marginLeft: 16,
    marginRight: 16,
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
    marginLeft: 16,
    marginRight: 16,
    marginTop: 5,
    marginBottom: 8,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  view2Button:{
    flex: 4,
    paddingLeft: 10,
    paddingRight: 8,
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
    height: height/3.5,
    width: width/3,
    alignSelf: 'center'
  },
  imgLogo:{
    height: 70,
    width: 200,
    alignSelf: 'center'
  }
})
