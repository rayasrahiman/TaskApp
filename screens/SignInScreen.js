import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Header from '../components/Header';
import Button from '../components/Button';
import Input from '../components/Input';
import TitleAndSubTitle from '../components/TitleAndSubTitle';
import {Colors} from '../constants/colors';
import I18n from '../languages/i18n';

export default function SignInScreen({navigation, route}) {
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);
  const [inputValue, setInputValue] = useState(false);
  const [pass, setPass] = useState('');
  const {email} = route.params;

  const users = async () => {
    const arr = await AsyncStorage.getItem('users');
    console.log(JSON.parse(arr));
  };

  useEffect(() => {
    users();
    if (email) {
      setInputValue(true);
    }
  }, []);

  const onChange = text => {
    setPass(text);
  };

  const redirect = async () => {
    const arr = await AsyncStorage.getItem('users');
    const array = arr ? JSON.parse(arr) : [];
    const user = array.find(item => item.email === email);
    if (user.password === pass) {
      setLoader(true);
      navigation.navigate('Dashboard');
      setLoader(false);
    } else {
      setError(true);
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <ScrollView>
          <TitleAndSubTitle
            title={I18n.t('signInTitle')}
            subTitle={I18n.t('signInSubTitle')}
            subTitleContProp={styles.subTitleCont}
          />
          <Input
            editable={false}
            label={I18n.t('Email')}
            placeholder={I18n.t('Email')}
            value={email}
            inputValue={inputValue}
            titleHeaderProp={inputValue && {color: Colors.grayishBlack}}
          />
          <Input
            password
            editable={true}
            label={I18n.t('Password')}
            placeholder={I18n.t('Enterpassword')}
            onChangeText={onChange}
            error={error && <Text>{I18n.t('PasswordError')}</Text>}
            onFocus={() => setError(false)}
            passwordLoader={loader}
            forgotPassword={true}
            forgotPass={() => navigation.navigate('ForgotPassword')}
          />

          <Button
            testID="signIn"
            title={I18n.t('Signin')}
            btnWrapper={{...styles.btnCont, ...styles.btnFirst}}
            onPress={redirect}
          />
          <Button
            title={I18n.t('SwitchAccount')}
            btnWrapper={{...styles.btnCont, ...styles.btnSecond}}
            btnContainerProp={styles.btnSecondCont}
            btnTxtProp={styles.btnSecondTxt}
            onPress={() => {}}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subTitleCont: {
    marginVertical: hp(2),
  },
  btnCont: {
    flex: Platform.OS === 'ios' ? 1 : 0,
    justifyContent: Platform.OS === 'ios' ? 'flex-end' : null,
    alignItems: Platform.OS === 'ios' ? 'flex-end' : null,
  },
  btnFirst: {
    marginTop:
      Platform.OS === 'android' && Dimensions.get('window').height < 700
        ? hp(8.5)
        : hp(12.5),
  },
  btnSecond: {
    marginVertical: hp(3),
    marginHorizontal: wp(5),
  },
  btnSecondCont: {
    backgroundColor: Colors.white,
    borderColor: Colors.lightBlue,
    borderWidth: wp(0.3),
  },
  btnSecondTxt: {
    color: Colors.lightBlue,
  },
});
