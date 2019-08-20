import { StyleSheet, Dimensions } from 'react-native';
import { Colors, Metrics, Fonts } from '../../Themes';
const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
  container:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  viewInfo:{
    flex: 4,
    flexDirection: 'column',
    padding: 16,
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    zIndex: 10
  },
  textTitle:{
    textAlign: 'left',
    ...Fonts.style.medium16,
    color: Colors.orange
  },
  textSubTitle:{
    textAlign: 'left',
    marginTop: 5,
    marginBottom: 10,
    ...Fonts.style.subTitle12,
    color: Colors.orange
  },
  viewImage:{
    flex: 6,
    flexDirection: 'column',
    justifyContent: 'center',
    marginRight: 20
  },
  imgSubs:{
    height: 120,
    width: 200,
    resizeMode: 'contain'
  },
})
