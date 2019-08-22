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
import History from '../Components/History';
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation';
// Styles
import styles from './Styles/HistoryTransactionScreenStyle'

class HistoryTransactionScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pressed: false,
      listHistory:[
        {
          orderName: '#PS340LM1',
          packetName: 'Pertalite',
          volume: 2.5,
          name: '31.16.293',
          date: '2019/06/26',
        },
        {
          orderName: '#PS340LL1',
          packetName: 'Pertalite',
          volume: 3,
          name: '31.16.293',
          date: '2019/06/28',
        },
        {
          orderName: '#PS340LM3',
          packetName: 'Pertalite',
          volume: 3.5,
          name: '31.16.293',
          date: '2019/06/29',
        },
      ]
    }
  }

  goBack = () => {
    this.props.navigation.goBack();
  }

  onPressPaket = (id, screen) => {
    if (!this.state.pressed) {
      this.setState({pressed: true});
      this.props.dispatch(NavigationActions.navigate({ 
        routeName: screen,
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

  renderItem = (item) =>{
    return (<History
      name={item.name}
      volume={item.volume}
      orderName={item.orderName}
      date={item.date}
      packetName={item.packetName}
    />);
  }

  render () {
    const {listHistory} = this.state;
    return (
      <View style={styles.container}>
        <BackHeader 
          title={true} 
          titleText={'Riwayat Transaksi'} 
          backPress={this.goBack}/>
        <ScrollView contentContainerStyle={styles.viewScroll}>
          <FlatList
            data={listHistory}
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

export default connect(mapStateToProps, mapDispatchToProps)(HistoryTransactionScreen)
