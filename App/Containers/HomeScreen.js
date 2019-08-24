import React, { Component } from 'react';
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View, Dimensions, ToastAndroid } from "react-native";
import * as Animatable from "react-native-animatable";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import InfoSaldo from '../Components/InfoSaldo';
import ProductList from '../Components/ProductList';
import SpbuList from '../Components/SpbuList';
import Subscription from '../Components/Subscription';
import { Colors, Images } from "../Themes";
import SlidingUpPanel from 'rn-sliding-up-panel';
const { width, height } = Dimensions.get('window')
import { 
  showLocationServiceDialog, 
  requestLocationPermission, 
  getCurrentLocation } from '../Services/LocationService';
  import Geocode from "react-geocode";
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
// Styles
import styles from './Styles/HomeScreenStyle';

class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pressed: false,
      modalPressed: false,
      modalInfo: false,
      refreshing: false,
      type: '',
      dataPom: {},
      address: '',
      listNear: [
        {
          id: 1,
          name: "31.143.01",
          address: "Jalan Limo Kebayoran Lama, Grogol Utara, Jakarta Selatan, 12220",
          wait_duration_minutes: 15.23333,
          is_full: false,
          distance: "1.5",
          is_open: true,
        },
        {
          id: 2,
          name: "31.144.01",
          address: "Jalan Limo Kebayoran Lama, Grogol Utara, Jakarta Selatan, 12220",
          wait_duration_minutes: 15.23333,
          is_full: true,
          distance: "1.5",
          is_open: true,
        },
        {
          id: 3,
          name: "31.145.01",
          address: "Jalan Limo Kebayoran Lama, Grogol Utara, Jakarta Selatan, 12220",
          wait_duration_minutes: 15.23333,
          is_full: false,
          distance: "1.5",
          is_open: false,
        }
      ],
      listService:[
        {
          id: 1,
          name: 'Cuci Mobil',
          image: Images.cuciMobil
        },
        {
          id: 2,
          name: 'TuneUp Mobil',
          image: Images.tuneupMobil
        },
        {
          id: 3,
          name: 'Cuci Motor',
          image: Images.cuciMotor
        },
        {
          id: 4,
          name: 'TuneUp Motor',
          image: Images.tuneupMotor
        }
      ],
      listProduct:[
        {
          id: 1,
          name: 'Premium',
          price: 7000,
          color : Colors.yellow
        },
        {
          id: 2,
          name: 'Pertalite',
          price: 7650,
          color : Colors.green
        },
        {
          id: 3,
          name: 'Pertamax',
          price: 9850,
          color : Colors.blue
        },
        {
          id: 4,
          name: 'Pertamax Turbo',
          price: 11200,
          color : Colors.red
        }
      ],
      currentLocation: {
        longitude: -6.2329997,
        latitude: 106.8102324,
        latitudeDelta: 12,
        longitudeDelta: 12,
      },
    }
  }

  startup = async () => {
    await this.checkLocationStatus();
  }

  componentDidMount() {
    this.startup();
  }

  checkLocationStatus = async () => {
    // Untuk mengecek posisi lokasi user
    try {
      const locationPermissionEnabled = await requestLocationPermission();

      if (locationPermissionEnabled) {
        await showLocationServiceDialog();
        await this.getCurrentPosition();
      } 
    } catch (error) {
      console.log(error)
    }
  };


  getCurrentPosition = async (timeout = 60000) => {
    // Untuk mengupdate / cek lokasi posisi saat ini
    try {
      // Penggunaan function berbeda untuk mendapatkan posisi lokasi
      await getCurrentLocation(timeout).then((position) => {
        const currentLocation = {
          latitude:  position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }
        this.setState({currentLocation});
        this.getAddress(currentLocation.latitude, currentLocation.longitude);
      }); 
    } catch (error) {
      console.log(error)
    }
  }

  getAddress = (lat, long) => {
    // Get address from latidude & longitude.
    Geocode.fromLatLng(lat, longitude).then(
      response => {
        const address = response.results[0].formatted_address;
        console.log(address);
        this.setState({address})
      },
      error => {
        console.log(error);
      }
    );
  }

  topUpSaldo = () => {
    alert('top up dong');
  }

  goPaketList = (item) => {
    this.props.dispatch(NavigationActions.navigate({ 
      routeName: 'PaketSubscriptionScreen',
      params:{
        item
      }
    }));
  }

  subscribeNow = () => {
    this.setState({type: 'subscribe'}, () => {
      this._panel.show()
    }) 
  }

  orderNow = () => {
    if (!this.state.pressed) {
      this.setState({pressed: true});
      this.props.dispatch(NavigationActions.navigate({ 
        routeName: 'InsertPinScreen',
        params: {
          type: 'subscribe',
          clearPress: this.clearStatePress.bind(this),
        }
      }));
      this.clearStatePress();
    }
  }

  onPressProduct = (item) => {
    if (!this.state.pressed) {
      this.setState({pressed: true});
      if(this.state.type == 'subscribe') {
        this.goPaketList(item);
      } else {
        this.props.dispatch(NavigationActions.navigate({ 
          routeName: 'CartScreen',
          params: {
            item,
            type: 'personal',
            clearPress: this.clearStatePress.bind(this),
          }
        }));
      }
      this.closeBottomSheet();
    }
  }

  onPressSpbu = (item) => {
    this.setState({type: 'personal'}, () => {
      this.setState({dataPom: item});
      this._panel.show();
    })
  }

  closeBottomSheet = async () => {
    this._panel.hide()
    await this.clearStatePress();
  }

  seeHistory = () => {
    this.props.dispatch(NavigationActions.navigate({ 
      routeName: 'HistoryTransactionScreen'
    }));
  }

  clearStatePress = () => {
    // Pembersihan state yang digunakan
    this.setState({pressed: false});
  }

  goService = (id, name) => {
    if (!this.state.pressed) {
      this.setState({pressed: true});
      this.props.dispatch(NavigationActions.navigate({ 
        routeName: 'ServiceLocationScreen',
        params: {
          id,
          name,
        }
      }));
      this.clearStatePress();
    }
  }

  renderItem = (item) =>{
    return (<SpbuList
      name={item.name}
      duration={item.wait_duration_minutes.toFixed(0)}
      distance={item.distance}
      address={item.address}
      isFull={item.is_full}
      isOpen={item.is_open}
      onPress={() => this.onPressSpbu(item)}
    />);
  }

  render () {
    let {listNear, listService, listProduct, type, address} = this.state;
    const {profile} = this.props;
    const photo = profile && profile.avatar || '';
    const saldo = profile && profile.link_aja_balance || '';

    const bottomProductList = 
      <View style={styles.viewBottom}>
        <View style={styles.viewRound}/>
        <View style={styles.headerBottom}>
          <View style={styles.viewHeader}>
            <Text style={styles.textTitleBold}>
              Bahan Bakar Yang Tersedia
            </Text>
            <Text style={[styles.textSub, {color: Colors.lblGrey, marginTop: 5}]}>
              Update Terakhir - Juli 2019
            </Text>
          </View>
          <TouchableOpacity style={styles.viewIcon} onPress={() => this.closeBottomSheet()}>
            <Icon
              style={styles.iconStyle}
              name="close"
              size={24}
              color={Colors.iconGrey}
            />
          </TouchableOpacity>
        </View>
        <FlatList
          data={listProduct}
          style={styles.viewMargin}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => {
            return (<ProductList
              name={item.name}
              price={item.price}
              color={item.color}
              titleText={type == 'subscribe' ? 'Lihat Paket' : 'Pilih'}
              inStyle={type == 'subscribe' ? {paddingLeft: 5, paddingRight: 5, paddingBottom: 12, paddingTop: 12} : {}}
              onPress={() => this.onPressProduct(item)}
            />);
          }}
        />
      </View>
    return (
      <Animatable.View
        animation="zoomInUp"
        iterationCount={1}
        duration={500}
        style={[styles.container, {backgroundColor: Colors.bgGrey}]}
      >
        <View style={styles.rowHeader}>
          <TouchableOpacity
            style={styles.avaProfile}
            activeOpacity={0.5}
            
          >
            {photo ? (
            <Image
              resizeMode="cover"
              source={{ uri: photo ? photo  : ''}}
              style={styles.imgAva}
            />
            ) : (
            <Icon
              style={styles.iconStyle}
              name="account-circle"
              size={28}
              color={Colors.redIcon}
            />
            )}
          </TouchableOpacity>
          <View style={styles.viewLogo}>
            <Image
              resizeMode="contain"
              source={Images.logo}
              style={styles.imgLogo}
              />
          </View>
          <TouchableOpacity
            style={styles.viewHistory}
            onPress={this.seeHistory}
          >
            <Icon
              style={styles.iconStyle}
              name="receipt"
              size={28}
              color={Colors.iconGrey}
            />
          </TouchableOpacity>
        </View>
        <ScrollView contentContainerStyle={styles.viewScrollList} >
          <InfoSaldo saldo={saldo} onPress={this.topUpSaldo} />
          <Subscription 
            onPressSub={this.subscribeNow}
            onPressOrder={this.orderNow} 
            isSubs={false}
            saldo={30} 
            typeId={1}
            name={'Pertalite'}
            days={22}/>
          <View style={styles.viewService}>
            <Text style={styles.textTitleBold}> Pesan Layanan Kami
            </Text>
            <Text style={[styles.textSub, {marginTop: 8}]}> Temukan kemudahan mencari jasa perawatan kendaraan disekitarmu
            </Text>
            <View style={styles.viewOption}>
              {
                listService.map((item, i) => {
                  return (
                    <TouchableOpacity 
                      key={i}
                      style={styles.viewType} 
                      onPress={() => this.goService(item.id, item.name)}>
                      <Image
                        resizeMode="contain"
                        source={item.image}
                        style={styles.imgService}
                      />
                      <Text style={[styles.text10, {marginTop: 5, fontWeight: '500'}]}> {item.name}
                      </Text>
                    </TouchableOpacity>
                  )
                }) 
              }
            </View>
          </View>
          <View style={styles.rowLocation}>
            <View style={styles.viewInfoLoc}>
              <Text style={styles.textInfo} numberOfLines={2} ellipsizeMode="tail">Dibawah ini adalah Pom Bensin yang terdekat dari lokasi Anda 
              </Text>
            </View>
            <View style={styles.viewMyLoc}>
              <View style={styles.colMyLoc}>
                <Text style={styles.text10}> Lokasi Anda </Text>
                <Text style={[styles.text10, {color: Colors.lblGrey}]}> {address} </Text>
              </View>
              <Icon
                style={styles.iconStyle}
                name="crosshairs-gps"
                size={14}
                color={Colors.iconGrey}
              />
            </View>
          </View>
          <FlatList
            data={listNear}
            style={styles.viewMargin}
            keyExtractor={(item, index) => index.toString()}
            // onRefresh={() => this.onRefresh()}
            // refreshing={refreshing}
            renderItem={({ item }) => {
              return this.renderItem(item)
            }
          }
          />
        </ScrollView>
        <SlidingUpPanel ref={c => this._panel = c} 
          draggableRange={{top:height/1.5 ,bottom: 0}} 
          snappingPoints={[600,0]}
          height={height/1.1}
          allowMomentum={false}
          onBackButtonPress={() => true}>
          {bottomProductList}
        </SlidingUpPanel>
      </Animatable.View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profile.data,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
