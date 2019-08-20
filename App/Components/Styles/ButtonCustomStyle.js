import { StyleSheet, Dimensions } from 'react-native';
import { Colors, Metrics, Fonts } from '../../Themes';
const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    padding: 12,
    justifyContent: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    zIndex: 10
  },
  borderStyle:{
    borderRadius: 10,
    padding: 12, 
    borderWidth: 1,
    borderColor: Colors.white,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textButton:{
    ...Fonts.style.roboto12,
    color: Colors.white, 
    fontWeight: '500' 
  },
})
