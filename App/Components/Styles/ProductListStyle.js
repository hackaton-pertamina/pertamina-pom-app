import { StyleSheet, Dimensions} from 'react-native';
import { Colors, Metrics, Fonts, ApplicationStyles } from '../../Themes';
const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    marginBottom: 10
  },
  col1:{
    flex: 3.8,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  col2:{
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  col3:{
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  textName:{
    textAlign: 'left',
    ...Fonts.style.roboto14,
    color: Colors.black,
    fontWeight: '500'
  },
  text14:{
    textAlign: 'left',
    ...Fonts.style.roboto12,
    color: Colors.black,
    fontWeight: '500'
  },
  text12:{
    textAlign: 'left',
    ...Fonts.style.roboto12,
    color: Colors.black,
    fontWeight: 'bold'
  },

})
