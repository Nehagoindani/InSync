import {Dimensions, StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {
  backgroundColor,
  screenHeight,
  screenWidth,
  black,
} from '../../../Constants';

const robik = 'Rubik-Regular';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  backImg: {
    // position: 'absolute',
    backgroundColor: backgroundColor,
    height: screenHeight,
    width: screenWidth,
  },
  center: {
    alignSelf: 'center',
    top: moderateScale(45, 0.1),
    marginBottom: moderateScale(30, 0.1),
    height: screenHeight - 140,
  },
  txt1: {
    fontSize: moderateScale(24, 0.1),
    lineHeight: moderateScale(26, 0.1),
    color: black,
    fontWeight: '700',
    alignSelf: 'center',
    fontFamily: robik,
  },
  txt2: {
    fontSize: moderateScale(15, 0.1),
    lineHeight: moderateScale(20, 0.1),
    color: black,
    fontWeight: '300',
    alignSelf: 'center',
    fontFamily: robik,
  },
  txt3: {
    fontSize: moderateScale(14, 0.1),
    lineHeight: moderateScale(17, 0.1),
    color: black,
    fontWeight: '300',
    alignSelf: 'center',
    fontFamily: robik,
  },

  input: {
    marginVertical: moderateScale(10, 0.1),
  },

  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: moderateScale(10, 0.1),
  },
  Ftxt: {
    color: 'black',
    fontSize: moderateScale(13, 0.1),
    fontFamily: robik,
  },
  SLogin: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginVertical: moderateScale(10, 0.1),
  },
  vector1: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: moderateScale(10, 0.1),
    // bottom: moderateScale(2, 0.1),
  },
  link: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  vector: {
    // flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    bottom: 0,
  },
});

export default styles;
