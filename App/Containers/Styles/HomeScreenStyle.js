import { StyleSheet, Dimensions} from 'react-native';
import { Colors, Metrics, Fonts, ApplicationStyles } from '../../Themes';
const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  ...ApplicationStyles.loading,
  rowHeader:{
    flexDirection: 'row',
    width: width,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    backgroundColor: Colors.white
  },
  viewScrollList:{
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingBottom: 30
  },
  viewHistory:{
    padding: 10,
    paddingRight: 20,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'flex-end'
  },
  viewLogo:{
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
    alignSelf: 'center'
  },
  imgLogo:{
    height: 32,
    width: 32,
    alignSelf: 'center'
  },
  avaProfile:{
    justifyContent: 'center',
    padding: 10,
    paddingRight: 20,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'flex-start'
  },
  imgAva:{
    height: 32,
    width: 32,
    borderRadius: 60,
  },
  iconStyle:{
    alignSelf: 'center',
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
  colEmpty:{
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 16,
    marginTop: 16
  },
  text10:{
    textAlign: 'right',
    ...Fonts.style.roboto10,
    color: Colors.black
  },
  textTitleBold:{
    textAlign: 'left',
    ...Fonts.style.medium16,
    color: Colors.black,
    fontWeight: 'bold'
  },
  textSub:{
    textAlign: 'left',
    ...Fonts.style.roboto10,
    color: Colors.black
  },
  viewService:{
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: Colors.white,
    padding: 16,
  },
  viewMargin:{
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: Colors.white
  },
  viewOption:{
    flex: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 16,
  
  },
  viewType:{
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  imgService:{
    height: 34,
    width: 34,
    alignSelf: 'center'
  },
  viewBottom:{
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  viewRound:{
    marginTop: 16,
    width: 40,
    backgroundColor: '#bdc3c7',
    borderRadius: 10,
    alignSelf: 'center',
    padding: 3
  },
  headerBottom:{
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewHeader:{
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: 16,
    marginTop: 5
  },
  viewIcon:{
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 16,
  }
})
