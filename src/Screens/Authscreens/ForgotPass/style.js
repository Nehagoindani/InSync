import {Dimensions, StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {
  backgroundColor,
  screenHeight,
  screenWidth,
  black,
} from '../../../Constants';

const robik = 'Rubik-Black';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backImg: {
    position: 'absolute',
    backgroundColor: backgroundColor,
    height: screenHeight,
    width: screenWidth,
  },
  center: {
    alignSelf: 'center',
    top: moderateScale(45, 0.1),
    // backgroundColor: 'red',
    height: '83%',
  },
  txt1: {
    fontSize: moderateScale(24, 0.1),
    lineHeight: moderateScale(26, 0.1),
    color: black,
    fontWeight: '700',
    alignSelf: 'center',
    fontFamily: 'Rubik-Regular',
  },
  input: {
    marginVertical: moderateScale(20, 0.1),
  },
  fTxt: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: moderateScale(30, 0.1),
    // backgroundColor: 'red',
  },
  vector: {
    bottom: 0,
    right: 0 , position:'absolute'
  },
});

export default styles;
