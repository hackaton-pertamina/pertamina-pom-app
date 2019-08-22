import { StyleSheet, Dimensions } from 'react-native';
import { Colors, Metrics, Fonts } from '../../Themes';
const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10 
  },
  colBetween:{
    flex: 6,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingTop: 5,
    paddingBottom: 5
  },
  rowBetween:{
    paddingTop: 5,
    paddingBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  rowBetween1:{
    flex: 4,
    marginLeft: 16,
    paddingTop: 16,
    paddingBottom: 4,
    paddingRight: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: Colors.lblGrey,
    borderBottomWidth: 0.5
  },
  colCenter:{
    flexDirection: 'column',
    justifyContent: 'center',
  },
  colStart:{
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingTop: 5,
    paddingBottom: 5
  },
  iconStyle:{
    alignSelf: 'center',
  },
  textName:{
    textAlign: 'left',
    ...Fonts.style.roboto14,
    color: Colors.black,
    fontWeight: '500'
  },
  textVolume:{
    textAlign: 'left',
    marginTop: 5,
    ...Fonts.style.roboto12,
    color: Colors.black,
    fontWeight: '500'
  },
  textDate:{
    marginTop: 5,
    textAlign: 'left',
    ...Fonts.style.roboto12,
    color: Colors.black,
  },


})
