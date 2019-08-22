import React, { Component } from 'react'
import {
  View,
  Image,
  Alert,
  TouchableOpacity,
  Text,
  FlatList,
  ScrollView,
  RefreshControl
} from "react-native";
import { Colors, Images } from "../Themes";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import * as Animatable from "react-native-animatable";
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation';
import InfoSaldo from '../Components/InfoSaldo';
import Subscription from '../Components/Subscription';
import SpbuList from '../Components/SpbuList';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/HomeScreenStyle'

class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pressed: false,
      modalPressed: false,
      modalInfo: false,
      refreshing: false,
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
          navigate: 'Belum',
          image: Images.cuciMobil
        },
        {
          id: 2,
          name: 'TuneUp Mobil',
          navigate: 'Belum',
          image: Images.tuneupMobil
        },
        {
          id: 3,
          name: 'Cuci Motor',
          navigate: 'Belum',
          image: Images.cuciMotor
        },
        {
          id: 4,
          name: 'TuneUp Motor',
          navigate: 'Belum',
          image: Images.tuneupMotor
        }
      ]
    }
  }

  topUpSaldo = () => {
    alert('top up dong');
  }

  subscribeNow = () => {
    this.props.dispatch(NavigationActions.navigate({ 
      routeName: 'PaketSubscriptionScreen'
    }));
  }

  orderNow = () => {
    alert('Order dong');
  }

  onPressSpbu = (id) => {
    if (!this.state.pressed) {
      this.setState({pressed: true});
      this.props.dispatch(NavigationActions.navigate({ 
        routeName: 'CartScreen',
        params: {
          id,
          type: 'subscribe',
          clearPress: this.clearStatePress.bind(this),
        }
      }));
      this.clearStatePress();
    }
  }

  clearStatePress = () => {
    // Pembersihan state yang digunakan
    this.setState({pressed: false});
  }

  goService = (id, navigate) => {
    alert(id, 'tes aja');
  }

  renderItem = (item) =>{
    return (<SpbuList
      name={item.name}
      duration={item.wait_duration_minutes.toFixed(0)}
      distance={item.distance}
      address={item.address}
      isFull={item.is_full}
      isOpen={item.is_open}
      onPress={() => this.onPressSpbu(item.id)}
    />);
  }

  render () {
    const {listNear, listService} = this.state;
    const photo = '';
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
              source={{ uri: photo ? photo.imageUri  : ''}}
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
          <InfoSaldo onPress={this.topUpSaldo} />
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
                      onPress={() => this.goService(item.id, item.navigate)}>
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
                <Text style={[styles.text10, {color: Colors.lblGrey}]}> Jalan wusyang 3 </Text>
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
      </Animatable.View>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
