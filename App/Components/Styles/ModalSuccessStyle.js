import { StyleSheet, Dimensions} from 'react-native';
import { Colors, Metrics, Fonts, ApplicationStyles } from '../../Themes';
const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
  overlay: {
    backgroundColor: '#000000',
    opacity: 0.50,
    position: 'absolute',
    top:0,
    left:0,
    right:0,
    bottom:0,
    width: '100%',
    height: '100%'
  },
  innerContainer: {
    position: 'absolute',
    top:0,
    left:0,
    right:0,
    bottom:0,
    width: '100%',
    height: '100%',
  },
  box: {
    alignSelf: 'center',
    marginVertical: height/7,
    padding: 16,
    marginLeft: 16,
    marginRight: 16,
    height: height/1.6,
    backgroundColor: Colors.white,
    flexDirection: 'column',
    justifyContent: 'center',
    zIndex: 5,
    borderRadius: 10
  },
  iconStyle:{
    alignSelf: 'center', 
  },
  viewImg:{
    marginTop: 16,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    alignSelf: 'center',
    borderRadius: 90/2,
    width: 90,
    height: 90,
    backgroundColor: Colors.red
  },
  viewDesc:{
    padding: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
  },
  textDesc:{
    color: Colors.black,
    padding: 8,        
    ...Fonts.style.roboto14,
    lineHeight: 20,
    textAlign:'center'
  },
  textTitle:{
    color: Colors.black,
    fontWeight: '500',        
    ...Fonts.style.medium16,
    textAlign:'center'
  },
  viewMargin:{
   margin: 16,
  }
})
