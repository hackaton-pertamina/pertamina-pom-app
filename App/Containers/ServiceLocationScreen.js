import React, { Component } from 'react'
import {
  View,
  FlatList,
  Text,
  ScrollView,
} from "react-native";
import { Colors, Images } from "../Themes";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import BackHeader from '../Components/BackHeader';
import SpbuList from '../Components/SpbuList';
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation';
// Styles
import styles from './Styles/ServiceLocationScreenStyle'

class ServiceLocationScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pressed: false,
      listNear: [
        {
          id: 1,
          name: "Shop & Drive",
          address: "Jalan Limo Kebayoran Lama, Grogol Utara, Jakarta Selatan, 12220",
          wait_duration_minutes: 15.23333,
          is_full: false,
          distance: "1.5",
          is_open: true,
        },
        {
          id: 2,
          name: "Shop & Drive",
          address: "Jalan Limo Kebayoran Lama, Grogol Utara, Jakarta Selatan, 12220",
          wait_duration_minutes: 15.23333,
          is_full: true,
          distance: "1.5",
          is_open: true,
        },
        {
          id: 3,
          name: "Shop & Drive",
          address: "Jalan Limo Kebayoran Lama, Grogol Utara, Jakarta Selatan, 12220",
          wait_duration_minutes: 15.23333,
          is_full: false,
          distance: "1.5",
          is_open: false,
        }
      ],
    }
  }

  goBack = () => {
    this.props.navigation.goBack();
  }

  goService = (item) => {
    if (!this.state.pressed) {
      this.setState({pressed: true});
      this.props.dispatch(NavigationActions.navigate({ 
        routeName: 'PaketServiceScreen',
        params: {
          id: item.id,
          name: item.name,
        }
      }));
      this.clearStatePress();
    }
  }
    

  clearStatePress = () => {
    // Pembersihan state yang digunakan
    this.setState({pressed: false});
  }

  renderItem = (item) =>{
    return (<SpbuList
      name={item.name}
      distance={item.distance}
      address={item.address}
      type={'service'}
      onPress={() => this.goService(item)}
    />);
  }

  render () {
    const { params } = this.props.navigation.state;
    const title = params && params.name ? params.name : '';
    const {listNear} = this.state;
    return (
      <View style={styles.container}>
        <BackHeader 
          title={true} 
          titleText={title} 
          backPress={this.goBack}/>
        <View style={styles.rowLocation}>
          <View style={styles.viewInfoLoc}>
            <Text style={styles.textInfo} numberOfLines={2} ellipsizeMode="tail">
              Dibawah ini adalah merchant yang terdekat dari lokasimu 
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
        <ScrollView contentContainerStyle={styles.viewScroll}>
          <FlatList
            data={listNear}
            style={styles.viewMargin}
            keyExtractor={(item, index) => index.toString()}
            // onRefresh={() => this.onRefresh()}
            // refreshing={refreshing}
            renderItem={({ item }) => {
              return this.renderItem(item)
            }}
          />
        </ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(ServiceLocationScreen)
