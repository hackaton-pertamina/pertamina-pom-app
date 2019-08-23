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
import styles from './Styles/PaketServiceScreenStyle'

class PaketServiceScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pressed: false,
      listPaket:[
        {
          id: 1,
          name: 'Ganti Oli + TuneUp',
          navigate: 'CartScreen',
          description: 'Ganti Oli gratis',
          price: 300000
        },
        {
          id: 2,
          name: 'Servis Komplit',
          navigate: 'CartScreen',
          description: 'TuneUp, Spooring, Balancing',
          price: 500000
        }
      ]
    }
  }

  goBack = () => {
    this.props.navigation.goBack();
  }

  onPressPaket = (item, screen) => {
    if (!this.state.pressed) {
      this.setState({pressed: true});
      this.props.dispatch(NavigationActions.navigate({ 
        routeName: screen,
        params: {
          item,
          type: 'service',
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
    return (<PaketList
      name={item.name}
      description={item.description}
      price={item.price}
      type={'service'}
      onPress={() => this.onPressPaket(item, item.navigate)}
    />);
  }

  render () {
    const { params } = this.props.navigation.state;
    const titleName = params && params.name ? params.name : '';
    const {listPaket} = this.state;
    return (
      <View style={styles.container}>
        <BackHeader 
          subTitle={true} 
          titleText={titleName}
          subTitleText={'Jalan Raya Cileduk'}
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

export default connect(mapStateToProps, mapDispatchToProps)(PaketServiceScreen)
