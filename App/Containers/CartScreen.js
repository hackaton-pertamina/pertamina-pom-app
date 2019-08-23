import React, { Component } from 'react'
import {
  View,
  Image,
  Alert,
  TouchableOpacity,
  Text,
  FlatList,
  ScrollView,
  TextInput,
  Dimensions
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
import styles from './Styles/CartScreenStyle'
const { width, height } = Dimensions.get('window')

class CartScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      pressed: false,
      price: 0,
      count: 0,
      dateBooking: 'Senin, 20 Agustus 2019, 10:30'
    }
  }

  goBack = () => {
    this.props.navigation.goBack();
  }

  buyNow = () => {
    this.props.dispatch(NavigationActions.navigate({ 
      routeName: 'InsertPinScreen',
      params: {
        type: 'buy'
      }
    }));
  }

  render () {
    const {params}= this.props.navigation.state;
    const type = params && params.type ? params.type : '';
    const item = params && params.item ? params.item : '';
    const title = item && item.name ? item.name : '' ;

    return (
      <View style={styles.container}>
        <BackHeader 
          title={type == 'subscribe' && true} 
          subTitle={type == 'personal'|| type == 'service' && true} 
          titleText={type == 'subscribe' ? 'Pembeliaanmu' :
                     type == 'service' ? title : title} 
          subTitleText={type != 'subscribe'&& 'Jalan Raya Cileduk'}
          backPress={this.goBack}/>
        <ScrollView contentContainerStyle={styles.viewScroll}>
          <View style={styles.viewInfo}>
            <View style={styles.viewInfoDetail}>
              <View style={styles.colTitle}>
                <Text style={styles.textTitleBold}> 
                { type == 'subscribe' ? 'Paket yang kamu pilih' :
                  type == 'service' ? 'Pilih Waktu Bookingmu' :
                  'Berapa Banyak Bahan Bakarnya' }
                </Text>
                <Text style={[styles.text10Grey, {marginTop: 5}]}>
                { type == 'subscribe' ?
                  'Dapatkan harga lebih hemat dengan membeli paket bensin' : 
                  type == 'service' ?
                  'Kamu dapat melakukan pembayaran cashless / bayar di tempat' : 
                  'Kamu dapat memasukkan harga dalam rupiah atau dalam liter' 
                }
                </Text>
              </View>
              <View style={styles.row1}>
                <View style={[styles.col1, type == 'subscribe' && {paddingBottom: 8}]}>
                  <Text style={styles.text12}> 
                  { type == 'service' ? 'Tipe Service' : 'Harga per-liter' }
                  </Text>
                  <Text style={[styles.text14, type == 'subscribe' && {marginTop: 5}]}>
                  { type == 'subscribe' ? 'Pertalite (30 Liter)' :
                    type == 'service' ? 'Ganti Oli + TuneUp' : 'Pertamax Turbo'}
                  </Text>
                </View>
                <Text style={[styles.text12, {fontWeight: 'bold'}]}> Rp. 11.200
                </Text>
              </View>
              { type == 'personal'&& 
                <View style={styles.row2}>
                  <View style={styles.col1}>
                    <Text style={styles.text10Grey}> Harga dalam (Rp)
                    </Text>
                    <TextInput 
                      style={[styles.viewInput, {width: 120, height: 40}]} 
                      onChangeText={(price) => this.setState({price})}
                      keyboardType={'number-pad'}
                      value={this.state.price}/>
                  </View>
                  <View style={[styles.col1, {marginLeft: 16}]}>
                    <Text style={styles.text10Grey}> Jumlah dalam (Liter)
                    </Text>
                    <TextInput 
                      style={[styles.viewInput, {width: 40, height: 40}]} 
                      onChangeText={(count) => this.setState({count})}
                      keyboardType={'number-pad'}
                      maxLength={3}
                      value={this.state.count}/>
                  </View>
                </View>
              }
              { type == 'service' && 
                  <View style={[styles.col1, {margin: 16}]}>
                    <Text style={styles.text10Grey}> Waktu Booking
                    </Text>
                    <TextInput
                      editable={false}
                      style={[styles.viewInput, {width: width/1.6, height: 40}]} 
                      onChangeText={(dateBooking) => this.setState({dateBooking})}
                      value={this.state.dateBooking}/>
                  </View>
              }
            </View>
            <View style={[styles.viewInfoDetail, {marginTop: 8}]}>
              <View style={styles.row1}>  
                <View style={styles.rowDefault}>
                  <Image
                    resizeMode="contain"
                    source={Images.linkAja}
                    style={styles.viewImg}
                  />
                  <Text style={[styles.text12, {fontSize: 12, marginLeft: 16}]}>
                    Link Aja
                  </Text>
                </View>
                <TouchableOpacity style={styles.buttonChange}>
                  <Text style={[styles.text12, {fontSize: 12, color: Colors.orange, fontWeight: '500', textAlign: 'right'}]}>
                    Ubah
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.row1}> 
                <Text style={styles.text12}> Biaya Admin
                </Text>
                <Text style={styles.text12}> Rp. 1.500
                </Text>
              </View>
              <View style={[styles.row1, {borderBottomColor: Colors.lblGrey, borderBottomWidth: 0.5}]}> 
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
              <View style={styles.viewPadding}>
                <ButtonCustom 
                  onPress={this.buyNow} 
                  textMain={'Bayar Sekarang'} 
                  padding={12} 
                  bgColor={Colors.orange}/>
              </View>
            </View>
          </View>
        </ScrollView>
        { type != 'subscribe'&&
          <BottomFacilities />
        }
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

export default connect(mapStateToProps, mapDispatchToProps)(CartScreen)
