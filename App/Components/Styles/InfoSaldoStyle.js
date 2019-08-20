import { StyleSheet, Dimensions } from 'react-native';
import { Colors, Metrics, Fonts } from '../../Themes';
const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    width: width,
    flexDirection: 'row',
    justifyContent : 'space-between',
    backgroundColor: Colors.red,
    alignItems: 'center',
    padding: 16
  },
  row1:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    alignItems: 'center'
  },
  viewImg: {
    height: 32,
    width: 32,
    alignSelf: 'center'
  },
  lbl1: {
    marginLeft: 16,
    padding: 5,
    ...Fonts.style.medium16,
    color: Colors.white
  }
})
