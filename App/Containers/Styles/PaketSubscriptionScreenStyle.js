import { StyleSheet, Dimensions} from 'react-native';
import { Colors, Metrics, Fonts, ApplicationStyles } from '../../Themes';
const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  viewScroll:{
    flexDirection: 'column', 
    justifyContent: 'flex-start', 
    paddingBottom: 30
  },
  viewMargin:{
    margin: 16,
    backgroundColor: Colors.white
  },
})
