import React, { Component } from "react";
import { Text, View, TouchableOpacity, Modal, StatusBar} from "react-native";
import { Colors, Images } from "../Themes";
import ButtonCustom from '../Components/ButtonCustom';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import * as Animatable from "react-native-animatable";
// Styles
import styles from "./Styles/ModalSuccessStyle";

export default class ModalSuccess extends Component {

  render() {
    const {modalVisible, closeModal, isTitle, titleText, descText} = this.props;

    return (
      <Modal
        visible={modalVisible}
        animationType={'fade'}
        transparent={true}
        onRequestClose={closeModal}
        >
        <StatusBar backgroundColor='grey' barStyle='dark-content' />
        <TouchableOpacity activeOpacity={0.5} style={styles.overlay} onPress={closeModal}></TouchableOpacity>
        <View style={styles.innerContainer}>
          <Animatable.View
            animation='bounceIn'
            iterationCount={1} 
            duration={300}
            style={styles.box}>
            <View style={styles.viewImg}> 
              <Icon
                style={styles.iconStyle}
                name="check"
                size={40}
                color={Colors.white}
              />
            </View>
            { isTitle &&
              <View style={[styles.viewDesc, {marginTop: 24}]}>
                <Text style={styles.textTitle}>
                  {titleText}
                </Text>  
              </View>
            }
            <View style={styles.viewDesc}>
              <Text style={styles.textDesc}>
                {descText}
              </Text>  
            </View>
            <View style={styles.viewMargin}>
              <ButtonCustom 
                onPress={closeModal} 
                textMain={'Mengerti'} 
                padding={12} 
                bgColor={Colors.orange}/>
            </View>
          </Animatable.View>
        </View>
      </Modal>
    );
  }
}
