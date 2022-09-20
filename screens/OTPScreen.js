import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
  Pressable,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Header from '../components/Header';
import Input from '../components/Input';
import TitleAndSubTitle from '../components/TitleAndSubTitle';
import Button from '../components/Button';
import I18n from '../languages/i18n';
import OTP from '../components/OTP';
import {Colors} from '../constants/colors';
import ModalComp from '../components/ModalComp';

export default function OTPScreen({navigation, route}) {
  const [disable, setDisable] = useState(true);
  const [error, setError] = useState({
    newInputError: false,
    confirmInputError: false,
    OTPCodeError: false,
  });
  const [confirmNew, setConfirmNew] = useState(false);
  const [OTPCode, setOTPCode] = useState('');
  const [newInput, setNewInput] = useState('');
  const [confirmInput, setConfirmInput] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const regex =
    /^(\S)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])[a-zA-Z0-9~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]{8,20}$/;

  const newInputvalidate = text => {
    setNewInput(text);
    setDisable(!regex.test(text));
  };
  const confirmInputvalidate = text => {
    setConfirmInput(text);
    // setDisable(!regex.test(text));
  };

  const onChangeOTP = value => {
    setOTPCode(value);
  };

  const redirect = async () => {
    const array = await AsyncStorage.getItem('users');
    const arr = array ? JSON.parse(array) : [];

    if (!disable && confirmInput === newInput && OTPCode === '123456') {
      const user = arr.filter(item =>
        item.email === route.params.email ? (item.password = newInput) : item,
      );
      AsyncStorage.setItem('users', JSON.stringify(user));
      setConfirmNew(true);
      setModalVisible(true);
    } else {
      setConfirmNew(false);
      setError({
        newInputError: !disable ? false : true,
        confirmInputError: confirmInput === newInput ? false : true,
        OTPCodeError: OTPCode === '123456' ? false : true,
      });
    }
  };

  const modalbtnOnPress = () => {
    setModalVisible(!modalVisible);
    navigation.navigate('SignIn', {
      email: route.params.email,
    });
  };
  return (
    <View style={styles.mainWrapper}>
      <Header />
      <ScrollView>
        <ModalComp
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
          iconName="checkmark-circle"
          title={I18n.t('PassChangedTitle')}
          subTitle={I18n.t('PassChangedSubTitle')}
          onPress={modalbtnOnPress}
          visible={modalVisible}
          btnTxt={I18n.t('Continue')}
        />
        <KeyboardAvoidingView behavior="height" style={styles.container}>
          <ScrollView>
            <TitleAndSubTitle
              title={I18n.t('OTPTitle')}
              subTitle={I18n.t('OTPSubtitle')}
              subTitleContProp={styles.subTitleCont}
            />
            <OTP
              onCodeChanged={onChangeOTP}
              error={error.OTPCodeError && <Text>{I18n.t('OTPError')}</Text>}
              onFocus={() => setError({...error, OTPCodeError: false})}
            />
            <Input
              password
              editable={true}
              label={I18n.t('NewPassword')}
              placeholder={I18n.t('Enterpassword')}
              onChangeText={newInputvalidate}
              error={
                error.newInputError && <Text>{I18n.t('createPassError')}</Text>
              }
              onFocus={() => setError({...error, newInputError: false})}
              createPass={true}
              txt={newInput}
            />
            <Input
              password
              editable={true}
              label={I18n.t('ConfirmNewPassword')}
              placeholder={I18n.t('Enterpassword')}
              onChangeText={confirmInputvalidate}
              error={
                error.confirmInputError && (
                  <Text>{I18n.t('confirmPassError')}</Text>
                )
              }
              onFocus={() => setError({...error, confirmInputError: false})}
              confirmNew={confirmNew}
            />

            <Button
              testID="submit"
              title={I18n.t('Submit')}
              btnWrapper={{...styles.btnCont, ...styles.btnFirst}}
              onPress={redirect}
            />
            <Button
              title={I18n.t('re_send')}
              btnWrapper={{...styles.btnCont, ...styles.btnSecond}}
              btnContainerProp={styles.btnSecondCont}
              btnTxtProp={styles.btnSecondTxt}
              onPress={() => {}}
            />
          </ScrollView>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    backgroundColor: Colors.white,
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
