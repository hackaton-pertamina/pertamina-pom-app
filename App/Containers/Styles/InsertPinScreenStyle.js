import { StyleSheet, Dimensions} from 'react-native';
import { Colors, Metrics, Fonts, ApplicationStyles } from '../../Themes';
const { width, height } = Dimensions.get('window')


export default StyleSheet.create({
  ...ApplicationStyles.screen,
  ...ApplicationStyles.loading,
  viewButton:{
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: 10
  },
  viewMargin:{
    marginTop: 16,
    marginBottom: 16,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },  
  textTitle:{
    textAlign: 'center',
    ...Fonts.style.medium20,
    color: Colors.black,
    fontWeight: '500'
  },
  textChange:{
    textAlign: 'center',
    ...Fonts.style.roboto12,
    color: Colors.orange,
  },
  textSubtitle:{
    textAlign: 'center',
    ...Fonts.style.subTitle12,
    color: Colors.black,
  },
})
