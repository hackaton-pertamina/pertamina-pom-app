import React, { Component } from 'react'
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  Dimensions
} from "react-native";
import { Colors, Images } from "../Themes";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { TextField } from 'react-native-material-textfield';
import ButtonCustom from '../Components/ButtonCustom';
import BackHeader from '../Components/BackHeader';
import { withFormik } from "formik";
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/LoginScreenStyle'
const { width, height } = Dimensions.get('window')

class LoginScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pressed: false,
    }
  }

  goBack = () => {
    this.props.navigation.goBack();
  }

  goLoginMyPertamina = () => {
    alert('Oops..Masih dalam pengembangan')
  }

  submitForm = (values) => new Promise((resolve, reject) => {
    // Request untuk mengirim kode organisasi
    let username = values.username;

    this.props.dispatch(NavigationActions.navigate({ 
      routeName: 'InsertPinScreen',
      params:{
        type: 'register',
        username
      }
    }));

    // this.props.dispatch(OrganizationAction.organizationRequest(organizationCode.toUpperCase()));
    
  });

  MyInnerForm = props => {
    const {
      values,
      touched,
      errors,
      handleSubmit,
      setFieldValue
    } = props;
    return (
      <View style={styles.container}>
        <BackHeader 
          backPress={this.goBack}/>
        <View style={styles.viewMargin}>
          <Text style={[styles.text16, { fontWeight: 'bold', fontSize: 16}]}> 
            Masukkan nomor teleponmu untuk login 
          </Text>
        </View>
        <View style={styles.viewMargin}>
          <TextField
            ref={component => this._textInput = component}
            label={'Nomor Teleponmu'}
            value={values.username ? values.username : ''}
            labelTextStyle={styles.text16}
            tintColor={Colors.orange}
            keyboardType={'numeric'}
            maxLength={14}
            style={styles.text16}
            error={touched.username && errors.username}
            onChangeText={(value) => (setFieldValue('username', value))}
          />
        </View>
        <View style={styles.viewMargin}>
          <ButtonCustom 
            onPress={handleSubmit} 
            textMain={'Masuk'} 
            padding={12} 
            bgColor={Colors.orange}/>  
        </View>
        <View style={styles.viewRow}>
          <View style={styles.viewBorder}/>
            <View style={[styles.viewRow1, {padding: 0, alignSelf: 'center'}]}>
              <Text style={styles.text14}> Atau
              </Text>
            </View>
          <View style={styles.viewBorder}/>
        </View>
        <View style={styles.viewMargin}>
          <ButtonCustom
            isBorder={true}
            onPress={this.goLogin} 
            textMain={'Masuk dengan My Pertamina'} 
            padding={12} 
            color={Colors.orange}/>
        </View>
        <View style={[styles.viewMargin, {marginTop: 10}]}>
          <Text style={styles.text10}>
            Dengan masuk atau mendaftar, kamu menyetujui Ketentuan Layanan dan Kebijakan Privasi
          </Text>
        </View>
      </View>
    )
  }

  EnhancedForm = withFormik({
    mapPropsToValues: () => { 
      return ({
        username : '',
      });
    },
    validate: values => {
      const errors = {};
      if (!values.username) {
        errors.username = 'Harus Diisi';
      } else if (values.username.length >= 13) {
          errors.username = 'Tidak boleh lebih dari 13 digit';
      } else if (values.username.length <= 10) {
          errors.username = 'Tidak boleh kurang dari 10 digit'
      } else if (!/^\d+$/.test(values.username)) {
          errors.username = 'Nomor telepon minimal harus berupa angka'
      }
      return errors;
    },

    handleSubmit: (values, { setSubmitting }) => {
      this.submitForm(values);
      setSubmitting(false);
    },
    displayName: "LoginForm", // helps with React DevTools
  })(this.MyInnerForm);

  render() {
    const EnhancedForm = this.EnhancedForm;

    return <EnhancedForm/>;

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

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
