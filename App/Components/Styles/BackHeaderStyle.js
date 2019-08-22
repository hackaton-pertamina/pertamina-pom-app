import { StyleSheet, Dimensions} from 'react-native';
import { Colors, Fonts } from '../../Themes';
const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
  header:{
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: Colors.white,
    width: width,
    zIndex: 5,
  },
  colText: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignSelf: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 0,
    left: 0,
  },
  textTitle:{
    ...Fonts.style.medium20,
    color: Colors.black,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  textSubTitle:{
    marginTop: 5,
    ...Fonts.style.subTitle12,
    color: Colors.black,
    textAlign: 'center',
  },
  rightButton:{
    alignSelf: 'center', 
    position: 'absolute', 
    right: 20, 
    alignItems: 'center',
    justifyContent: 'center'
  },
  viewLogo:{
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  imgLogo:{
    height: 32,
    width: 32,
    alignSelf: 'center'
  }
})
