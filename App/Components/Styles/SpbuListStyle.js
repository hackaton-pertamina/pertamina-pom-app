import { StyleSheet, Dimensions } from 'react-native';
import { Colors, Metrics, Fonts } from '../../Themes';
const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop:4,
    marginLeft:16,
    marginBottom:2,
    backgroundColor: Colors.white
  },
  viewImg:{
    flex: 2,
    flexDirection: 'column',
    marginTop: 10,
    marginBottom: 10,
    marginRight: 10,
    paddingRight: 10,
    paddingBottom: 10,
    justifyContent: 'center',
    backgroundColor: Colors.red,
    borderRadius: 10,
  },
  rowView:{
    flex: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: Colors.lblGrey,
    borderBottomWidth:1
  },
  colView:{
    flex: 7,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: 5
  },
  colView2:{
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 3,
    paddingTop: 28,
    paddingBottom: 5,
  },
  rowTitle:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingTop: 5,
    paddingBottom: 5
  },  
  textTitleBlack:{
    textAlign: 'left',
    ...Fonts.style.subTitle12,
    fontWeight: 'bold',
    color: Colors.black
  },
  text10:{
    textAlign: 'left',
    alignSelf: 'center',
    ...Fonts.style.roboto10,
    fontWeight: 'bold',
    color: Colors.black
  },
  text8:{
    textAlign: 'left',
    ...Fonts.style.roboto10,
    fontSize: 8,
    fontWeight: 'bold',
    color: Colors.black
  },
  text10Info:{
    textAlign: 'left',
    ...Fonts.style.roboto10,
    lineHeight: 'left',
    lineHeight: 18,
    paddingRight: 8,
    color: Colors.lblGrey
  },
  customText:{
    color : Colors.lblGrey, 
    fontSize: 8, 
    marginLeft: 8
  },
  iconStyle:{
    alignSelf: 'center',
  },
})
