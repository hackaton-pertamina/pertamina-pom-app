import React, { Component } from 'react'
import {
  View,
  Image,
  Alert,
  TouchableOpacity,
  Text,
  FlatList,
  ScrollView,
  TextInput
} from "react-native";
import { Colors, Images } from "../Themes";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import BackHeader from '../Components/BackHeader';
import ButtonCustom from '../Components/ButtonCustom';
import BottomFacilities from '../Components/BottomFacilities';
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/MyOrderScreenStyle'

class MyOrderScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      pressed: false,
    }
  }

  goBack = () => {
    this.props.navigation.goBack();
  }


  render () {
    return (
      <View style={styles.container}>
        <BackHeader 
          title={true} 
          titleText={'Pesananmu'} 
          backPress={this.goBack}/>
        <ScrollView contentContainerStyle={styles.viewScroll}>
          <View style={styles.viewInfo}>
            <View style={styles.viewInfoDetail}>
              <View style={styles.colTitle}>
                <Text style={styles.textTitleBold}> Pembelian Bahan Bakar ?
                </Text>
                <Text style={[styles.text10Grey, {marginTop: 5}]}> Rabu, 13 Januari 2019, 14:05
                </Text>
              </View>
              <View style={[styles.row1, {marginTop: 16}]}>
                <Text style={styles.text12}> Tipe Pembayaran
                </Text>
                <Image
                  resizeMode="contain"
                  source={Images.linkAja}
                  style={styles.viewImg}
                />
              </View>
              <View style={styles.row1}> 
                <Text style={styles.text12}> Biaya Admin
                </Text>
                <Text style={styles.text12}> Rp. 1.500
                </Text>
              </View>
              <View style={styles.row1}> 
                <Text style={[styles.text12, {fontWeight: 'bold'}]}>
                  Pertamax Turbo | 2 Liter
                </Text>
                <Text style={[styles.text12, {fontWeight: '500'}]}> Rp. 22.400
                </Text>
              </View>
              <View style={styles.row1}> 
                <Text style={[styles.text12, {fontWeight: 'bold'}]}> Total Pembayaran
                </Text>
                <Text style={[styles.text12, {fontWeight: 'bold'}]}> Rp. 23.900
                </Text>
              </View>
            </View>
            <View style={[styles.viewInfoDetail, {marginTop: 8}]}>
              <View style={styles.row2}>
                <Text style={styles.textTitleBold}> Scan Barcodemu Untuk Mengisi Bensin
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
        <BottomFacilities />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyOrderScreen)
