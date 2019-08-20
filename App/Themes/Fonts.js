import { Platform } from "react-native";

const type = {
  base: Platform.OS == "android" ? 'RobotoRegular' : null,
  title: Platform.OS == "android" ? 'MontserratRegular' : null,
  medium: Platform.OS == "android" ? 'MontserratMedium' : null,
  bold: 'RobotoBold',
  emphasis: 'HelveticaNeue-Italic'
};

const size = {
  big: 50,
  h1: 38,
  h2: 34,
  h3: 30,
  h4: 26,
  h5: 20,
  h6: 19,
  title: 22,
  titleModal: 24,
  input: 18,
  regular: 16,
  medium: 14,
  small: 12,
  tiny: 10,
};

const style = {
  h1: {
    fontFamily: type.base,
    fontSize: size.h1
  },
  h2: {
    fontWeight: 'bold',
    fontSize: size.h2
  },
  h3: {
    fontFamily: type.base,
    fontSize: size.h3
  },
  h4: {
    fontFamily: type.title,
    fontSize: size.h4
  },
  h5: {
    fontFamily: type.title,
    fontSize: size.h5
  },
  h6: {
    fontFamily: type.base,
    fontSize: size.h6
  },
  title:{
    fontFamily: type.title,
    fontSize: size.title
  },
  subTitle18:{
    fontFamily: type.title,
    fontSize: size.title
  },
  subTitle16:{
    fontFamily: type.title,
    fontSize: size.medium
  },
  subTitle12:{
    fontFamily: type.title,
    fontSize: size.small
  },
  subTitle14:{
    fontFamily: type.title,
    fontSize: size.medium
  },
  medium14:{
    fontFamily: type.medium,
    fontSize: size.medium
  },
  medium16:{
    fontFamily: type.medium,
    fontSize: size.regular
  },
  medium20:{
    fontFamily: type.medium,
    fontSize: size.h5
  },
  roboto10:{
    fontFamily: type.base,
    fontSize: size.tiny
  },
  roboto12:{
    fontFamily: type.base,
    fontSize: size.small
  },
  roboto14:{
    fontFamily: type.base,
    fontSize: size.medium
  },
  roboto16:{
    fontFamily: type.base,
    fontSize: size.regular
  },
  roboto20:{
    fontFamily: type.base,
    fontSize: size.h5
  },
  roboto24:{
    fontFamily: type.base,
    fontSize: size.titleModal
  },
  normal: {
    fontFamily: type.base,
    fontSize: size.regular
  },
  description: {
    fontFamily: type.base,
    fontSize: size.medium
  },
  titleHeader: {
    fontFamily: type.medium,
    fontSize: size.title
  },
  bigTitle: {
    fontFamily: type.medium,
    fontSize: size.big
  }
};

export default {
  type,
  size,
  style
};
