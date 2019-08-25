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
import Reactotron from 'reactotron-react-native'
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
      totalPrice: 0,
      dateBooking: 'Senin, 20 Agustus 2019, 10:30'
    }
  }

  goBack = () => {
    this.props.navigation.goBack();
  }

  buyNow = () => {
    const { params } = this.props.navigation.state;
    const item = params && params.item ? params.item : '';
    const dataPom = params && params.dataPom ? params.dataPom : '';

    Reactotron.log(item);
    Reactotron.log(dataPom);

    this.props.dispatch(NavigationActions.navigate({ 
      routeName: 'InsertPinScreen',
      params: {
        type: 'buy',
        tipe: 'PETROL',
        quantity: this.state.count,
        productId: item._id,
        pomId: dataPom._id,
        dataPom,
      }
    }));
  }

  onChangePrice = async (value) => {
    const intValue = parseInt(value) || 0;
    const {params}= this.props.navigation.state;
    const item = params && params.item ? params.item : '';
    const price = item && item.price || 0;

    let updatePrice = 0;

    this.setState({ count: intValue });
    updatePrice = await price * intValue;
    await this.setState({price: updatePrice});
    await this.setState({totalPrice: (updatePrice + 1500) });
  }



  render () {
    const {params}= this.props.navigation.state;
    const type = params && params.type ? params.type : '';
    const item = params && params.item ? params.item : '';
    const dataPom = params && params.dataPom ? params.dataPom : '';
    const title = dataPom && dataPom.name ? dataPom.name : '' ;
    const subTitle = dataPom && dataPom.name ? 
      dataPom.address && dataPom.address.length > 30
        ? `${dataPom.address.substring(0, 29)} ...` 
        : dataPom.address
      : '' ;
    let {price, totalPrice, count, dateBooking} = this.state;

    return (
      <View style={styles.container}>
        <BackHeader 
          title={type == 'subscribe' && true} 
          subTitle={type == 'personal'|| type == 'service' && true} 
          titleText={type == 'subscribe' ? 'Pembeliaanmu' :
                     type == 'service' ? title : title} 
          subTitleText={type != 'subscribe'&& subTitle}
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
                    type == 'service' ? 'Ganti Oli + TuneUp' : item.name}
                  </Text>
                </View>
                <Text style={[styles.text12, {fontWeight: 'bold'}]}> Rp. {item.price}
                </Text>
              </View>
              { type == 'personal'&& 
                <View style={styles.row2}>
                  <View style={styles.col1}>
                    <Text style={styles.text10Grey}> Harga dalam (Rp)
                    </Text>
                    <TextInput
                      editable={false}
                      style={[styles.viewInput, {width: 120, height: 40}]} 
                      keyboardType={'number-pad'}
                      value={`${item.price}` || `${price}` || 0}/>
                  </View>
                  <View style={[styles.col1, {marginLeft: 16}]}>
                    <Text style={styles.text10Grey}> Jumlah dalam (Liter)
                    </Text>
                    <TextInput 
                      style={[styles.viewInput, {width: 40, height: 40}]} 
                      onChangeText={(count) => { this.onChangePrice(count) }}
                      keyboardType={'number-pad'}
                      maxLength={3}
                      value={`${count}`}/>
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
                      value={dateBooking}/>
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
                  {item.name} | {count} Liter
                </Text>
                <Text style={[styles.text12, {fontWeight: '500'}]}> Rp. {price}
                </Text>
              </View>
              <View style={styles.row1}> 
                <Text style={[styles.text12, {fontWeight: 'bold'}]}> Total Pembayaran
                </Text>
                <Text style={[styles.text12, {fontWeight: 'bold'}]}> Rp. {totalPrice}
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
          <BottomFacilities distance={dataPom.distance.toFixed(2)} facilities={dataPom && dataPom.facilities || []}/>
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
