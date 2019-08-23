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
    backgroundColor: Colors.white
  },
  rowLocation:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.white
  },
  viewInfoLoc:{
    flex: 6,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 16
  },
  textInfo: {
    textAlign: 'left',
    lineHeight: 18,
    ...Fonts.style.roboto12,
    color: Colors.black
  },
  viewMyLoc:{
    flex: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 16
  },
  colMyLoc:{
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 5
  },
  text10:{
    textAlign: 'right',
    ...Fonts.style.roboto10,
    color: Colors.black
  },
  iconStyle:{
    alignSelf: 'center',
  },
})
