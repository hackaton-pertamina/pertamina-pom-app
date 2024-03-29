import { StyleSheet, Dimensions} from 'react-native';
import { Colors, Metrics, Fonts, ApplicationStyles } from '../../Themes';
const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  viewInfo:{
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: Colors.bgGrey,
    borderRadius: 5,
    borderWidth: 0,
    elevation: 4,
    margin: 16,
    borderRadius: 10,
  },
  viewScroll:{
    flexDirection: 'column', 
    justifyContent: 'flex-start', 
    height: height/1.1
  },
  viewScrollDefault:{
    flexDirection: 'column', 
    justifyContent: 'flex-start', 
  },
  viewInfoDetail:{
    backgroundColor: Colors.white,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingBottom: 8,
    borderRadius: 10,
  },
  colTitle:{
    padding: 16,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    borderBottomColor: Colors.lblGrey,
    borderBottomWidth: 2
  },
  textTitleBold:{
    textAlign: 'left',
    ...Fonts.style.roboto14,
    color: Colors.black,
    fontWeight: 'bold'
  },
  text10Grey:{
    textAlign: 'left',
    ...Fonts.style.roboto10,
    color: Colors.lblGrey,
  },
  text12:{
    textAlign: 'left',
    ...Fonts.style.roboto12,
    color: Colors.black,
  },
  text14:{
    textAlign: 'left',
    ...Fonts.style.roboto14,
    color: Colors.black,
    fontWeight: '500'
  },
  text16:{
    textAlign: 'center',
    ...Fonts.style.roboto16,
    color: Colors.black,
    fontWeight: '500'
  },
  row1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16
  },
  col1:{
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
  col2:{
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 16,
    alignItems: 'center'
  },
  row2:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
  },
  rowDefault:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  viewInput:{
    borderColor: Colors.lblGrey,
    borderRadius: 5, 
    borderWidth: 0.5,
    paddingLeft: 8,
    paddingRight: 8,
    marginTop: 8
  },
  viewImg: {
    height: 32,
    width: 32,
    alignSelf: 'center'
  },
  viewMargin:{
    margin: 16,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  }
})
