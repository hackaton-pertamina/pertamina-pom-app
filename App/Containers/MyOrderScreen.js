import React, { Component } from 'react'
import {
  View,
  Image,
  Alert,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";
import { Colors, Images } from "../Themes";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import BackHeader from '../Components/BackHeader';
import ButtonCustom from '../Components/ButtonCustom';
import BottomFacilities from '../Components/BottomFacilities';
import ModalSuccess from '../Components/ModalSuccess';
import QRCode from 'react-native-qrcode';
import { connect } from 'react-redux'
import { NavigationActions, StackActions } from 'react-navigation';
import OrderAction from '../Redux/OrderRedux';
import moment from 'moment';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/MyOrderScreenStyle'

class MyOrderScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      pressed: false,
      modalVisible: props.navigation.state.params ? props.navigation.state.params.modalVisible ? 
                    props.navigation.state.params.modalVisible : false : false,
      isChange: false
    }
  }

  componentWillReceiveProps(nextProps) {
    const { dataOrder, fetching } = nextProps;
    if(dataOrder.status != 'ON_PROGRESS' && !fetching) {
      this.setState({modalVisible: true})
      this.setState({
        isChange: true
      });
      this.resendInterval(true); 
    }
  }

  componentDidMount(){
    this.resendInterval()
  }

  resendInterval = (clear = false) => {
    const {dataOrder} = this.props;
    // Untuk mengirim ulang / set waktu interval untuk request kode OTP berikutnya
    const interval = setInterval(() => {
      if (!clear)
      this.props.dispatch(OrderAction.getOrderRequest(dataOrder._id));
      else
        clearInterval(interval);
    }, 10000) 
  }

  goBack = () => {
    this.props.navigation.goBack();
  }

  seeHistory = () => {
    this.props.dispatch(NavigationActions.navigate({ 
      routeName: 'HistoryUsageScreen'
    }));
  }

  goSkip = () => {
    this.props.navigation.setParams({modalVisible: false});
    this.setState({modalVisible: false});
    if(this.state.isChange) {
      this.props.dispatch(StackActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({
            routeName: 'HomeScreen'
          }),
        ]
      }));
    }
  }

  render () {
    const { params } = this.props.navigation.state;
    const type = params && params.type ? params.type : '';
    const dataPom = params && params.dataPom ? params.dataPom : '';
    const {dataOrder} = this.props;
    const date = dataOrder && dataOrder.created_at  && 
                 moment(dataOrder.created_at).locale('id').format('MMMM Do YYYY, h:mm:ss a') || '';
    const quantity = dataOrder && dataOrder.quantity || '';
    const nameProduct = dataOrder && dataOrder.product && dataOrder.product.name || 0;
    const adminCost = dataOrder && dataOrder.administrative_cost || '';
    const price = dataOrder && dataOrder.product && dataOrder.product.price || 0;
    const amount = price && price * quantity;
    const totalAmount = dataOrder && dataOrder.amount || '';
    const valueQrcode = dataOrder && dataOrder.qr_link || '';

    return (
      <View style={styles.container}>
        <BackHeader 
          title={true} 
          titleText={type == 'subscribe' ? 'Berlangganan' : 'Pesananmu '} 
          backPress={this.goBack}/>
        <ScrollView contentContainerStyle={[type != 'subscribe' ? styles.viewScroll : styles.viewScrollDefault]}>
          <View style={styles.viewInfo}>
            <View style={styles.viewInfoDetail}>
              <View style={styles.colTitle}>
                <Text style={styles.textTitleBold}> 
                { type == 'subscribe' ? 
                  'Pembelian Paket Bahan Bakar' : 'Pembelian Bahan Bakar'
                }
                </Text>
                <Text style={[styles.text10Grey, {marginTop: 5}]}> {date}
                </Text>
              </View>
            { type == 'subscribe' ? 
              <View>
                <View style={[styles.row1, {marginTop: 16}]}>
                  <View style={[styles.col1, {paddingBottom: 8}]}>
                    <Text style={styles.text14}> Saldo
                    </Text>
                    <Text style={[styles.text14, {marginTop: 5}]}>
                      Pertalite 
                    </Text>
                  </View>
                  <Text style={styles.text16}> 30 Liter
                  </Text>
                </View>
                <View style={[styles.row1, {marginTop: 16}]}>
                  <Text style={styles.text14}> Berlaku Hingga
                  </Text>
                  <View style={[styles.col1, {paddingBottom: 8}]}>
                    <Text style={styles.text14}> 3 Feb 2019
                    </Text>
                    <Text style={[styles.text10Grey, {marginTop: 5, textAlign: 'right', alignItems: 'center'}]}>
                      (20 Hari Lagi)
                    </Text>
                  </View>
                </View>
              </View>
            :
              <View>
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
                  <Text style={styles.text12}> Rp. {adminCost}
                  </Text>
                </View>
                <View style={styles.row1}> 
                  <Text style={[styles.text12, {fontWeight: 'bold'}]}>
                    {nameProduct} | {quantity} Liter
                  </Text>
                  <Text style={[styles.text12, {fontWeight: '500'}]}> Rp. {amount}
                  </Text>
                </View>
                <View style={styles.row1}> 
                  <Text style={[styles.text12, {fontWeight: 'bold'}]}> Total Pembayaran
                  </Text>
                  <Text style={[styles.text12, {fontWeight: 'bold'}]}> Rp. {totalAmount}
                  </Text>
                </View>
              </View>
            }
            </View>
            <View style={[styles.viewInfoDetail, {marginTop: 8}]}>
              <View style={styles.row2}>
                <Text style={styles.textTitleBold}> Scan Barcodemu Untuk Mengisi Bensin
                </Text>
              </View>
              <View style={styles.col2}>
                <QRCode
                  value={valueQrcode}
                  size={100}
                  bgColor={Colors.black}
                  fgColor='white'/>
                </View>
            </View>
          </View>
          </ScrollView>
        { type == 'subscribe' ?
          <View style={styles.viewMargin}>
            <ButtonCustom onPress={this.seeHistory} 
            textMain={'Lihat Pemakaian'} 
            isBorder={true} 
            padding={10}
            color={Colors.orange}/>
          </View>
          :
          <BottomFacilities distance={dataPom.distance.toFixed(2)} facilities={dataPom && dataPom.facilities || []}/>
        }
      {/* Menampilkan Modal sukses */}
      <ModalSuccess 
        modalVisible={this.state.modalVisible}
        closeModal={this.goSkip}
        isTitle={true}
        isChange={this.state.isChange}
        titleText={'Pembayaran Berhasil'}
        descText={this.state.isChange ? 'Saldo Berhasil dipotong' : 'Kamu dapat melihat pesananmu di halaman ini'}
      />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    dataOrder : state.order.data,
    fetching: state.order.fetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyOrderScreen)
