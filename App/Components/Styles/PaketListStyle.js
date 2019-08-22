import { StyleSheet, Dimensions} from 'react-native';
import { Colors, Metrics, Fonts, ApplicationStyles } from '../../Themes';
const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 16,
    borderBottomWidth: 0,
    elevation: 2,
    borderRadius: 10,
    marginBottom: 16
  },
  viewImg:{
    justifyContent: 'center',
    flexDirection: 'column'
  },
  col1:{
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 5
  },
  col2:{
    flex: 2.75,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  textName:{
    textAlign: 'left',
    ...Fonts.style.roboto16,
    color: Colors.black,
    fontWeight: '500'
  },
  textVolume:{
    textAlign: 'left',
    ...Fonts.style.roboto12,
    color: Colors.black,
  },
  textDate:{
    textAlign: 'left',
    ...Fonts.style.roboto10,
    color: Colors.black,
  },
  textOrange:{
    textAlign: 'left',
    ...Fonts.style.roboto14,
    color: Colors.orange,
    fontWeight: 'bold'
  },
  viewImg: {
    height: 32,
    width: 70,
    alignSelf: 'center'
  },
})
