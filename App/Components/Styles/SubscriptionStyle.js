import { StyleSheet, Dimensions } from 'react-native';
import { Colors, Metrics, Fonts } from '../../Themes';
const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
  container:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: Colors.white
  },
  viewInfo:{
    flex: 4,
    flexDirection: 'column',
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 32,
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    zIndex: 10
  },
  textTitle:{
    textAlign: 'left',
    ...Fonts.style.medium16,
    color: Colors.orange
  },
  textSubTitle:{
    textAlign: 'left',
    marginTop: 5,
    marginBottom: 10,
    ...Fonts.style.subTitle12,
    color: Colors.orange
  },
  viewImage:{
    flex: 6,
    flexDirection: 'column',
    justifyContent: 'center',
    marginRight: 20
  },
  imgSubs:{
    marginLeft: -32,
    marginBottom: -32,
    height: 140,
    width: 240,
    resizeMode: 'contain'
  },
  row1: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 16
  },
  col1: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 8
  },
  col2: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 16
  },
  col3: {
    flex: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text12:{
    textAlign: 'left',
    ...Fonts.style.roboto12,
    color: Colors.black
  },
  text10:{
    textAlign: 'left',
    ...Fonts.style.roboto10,
    color: Colors.black
  },
  textTitleBlack:{
    textAlign: 'left',
    ...Fonts.style.medium16,
    color: Colors.black
  },
  iconStyle:{
    alignSelf: 'center',
  },
})
