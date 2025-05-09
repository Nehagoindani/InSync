import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import s from './style';
import Input from '../../../Components/input';
import Button from '../../../Components/Button';
import {moderateScale} from 'react-native-size-matters';
import Header from '../../../Components/Header';

const Forgot = ({navigation}) => {
  const [email, setEmail] = useState(null);

  return (
    <ImageBackground
      style={s.backImg}
      source={require('../../../assets/images/forgot.jpg')}
      resizeMode="contain">
      <View>
        <Image
          resizeMode="contain"
          source={require('../../../assets/images/PNG/Vector.png')}
        />
      </View>
      <Header navigation={navigation} />
      <View style={s.center}>
        <Text style={s.txt1}>Forget Password</Text>

        <View style={s.input}>
          <Input placeholder={'Email'} type={'text'} setValue={setEmail} />

          <View style={s.btn}>
            <Button
              text={'Send'}
              onPress={() => navigation.navigate('reset')}
            />
          </View>
        </View>
      </View>

      <View
        style={{
          flex: 1,
          position: 'absolute',
          bottom: 0,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flex: 1,
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
            bottom: 0,
          }}>
          <Image
            style={{transform: [{rotate: '180deg'}]}}
            resizeMode="contain"
            source={require('../../../assets/images/PNG/Vector.png')}
          />
        </View>
      </View>
    </ImageBackground>
  );
};
export default Forgot;
