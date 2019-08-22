import { StyleSheet, Dimensions} from 'react-native';
import { Colors, Metrics, Fonts, ApplicationStyles } from '../../Themes';
const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: Colors.white,
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 0,
    elevation: 8,
    zIndex: 10
  },
  col1:{
    flex:4,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8
  },
  text12:{
    textAlign: 'left',
    ...Fonts.style.roboto12,
    color: Colors.lblGrey,
    fontWeight: '500'
  },
  row1:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 8
  },
  rowAround:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 8,
    paddingBottom: 8
  },
  rowBetween:{
    flex: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8
  },
  col2:{
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: 5,
    paddingLeft: 16,
  },
  text10:{
    textAlign: 'right',
    lineHeight: 18,
    ...Fonts.style.roboto10,
    color: Colors.lblGrey,
  },
  floating:{
    height: 60,
    width: 60,
    borderRadius: 60/2,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingTop: 8,
    alignItems: 'center',
    borderTopWidth: 0,
    elevation: 4
  },
  iconStyle:{
    alignSelf: 'center',
  },

})
