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
import PaketList from '../Components/PaketList';
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation';
// Styles
import styles from './Styles/PaketSubscriptionScreenStyle'

class PaketSubscriptionScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pressed: false,
      listPaket:[
        {
          id: 1,
          name: 'Pertalite',
          color: 'green',
          navigate: 'Belum',
          volume: 30,
          duration: 30,
          price: 210000
        },
        {
          id: 2,
          name: 'Pertalite',
          color: 'green',
          navigate: 'Belum',
          volume: 20,
          duration: 30,
          price: 140000
        },
        {
          id: 3,
          name: 'Pertalite',
          color: 'green',
          navigate: 'Belum',
          volume: 10,
          duration: 30,
          price: 70000
        }
      ]
    }
  }

  goBack = () => {
    this.props.navigation.goBack();
  }

  onPressPaket = (id, navigate) => {
    alert(id, 'oi')
  }

  renderItem = (item) =>{
    return (<PaketList
      name={item.name}
      color={item.color}
      volume={item.volume}
      duration={item.duration}
      price={item.price}
      onPress={() => this.onPressPaket(item.id, navigate)}
    />);
  }

  render () {
    const {listPaket} = this.state;
    return (
      <View style={styles.container}>
        <BackHeader 
          title={true} 
          titleText={'Paket Pertalite'} 
          backPress={this.goBack}/>
        <ScrollView contentContainerStyle={styles.viewScroll}>
          <FlatList
            data={listPaket}
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

export default connect(mapStateToProps, mapDispatchToProps)(PaketSubscriptionScreen)
