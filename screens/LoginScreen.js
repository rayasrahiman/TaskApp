import React, {useState} from 'react';
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

import Header from '../components/Header';
import Button from '../components/Button';
import Input from '../components/Input';
import TitleAndSubTitle from '../components/TitleAndSubTitle';
import {Colors} from '../constants/colors';
import I18n from '../languages/i18n';

export default function LoginScreen({navigation, route}) {
  const [disable, setDisable] = useState(true);
  const [error, setError] = useState(false);
  const {email} = route.params;

  const regex =
    /^(\S)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])[a-zA-Z0-9~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]{8,20}$/;

  const validate = text => {
    setDisable(!regex.test(text));
  };

  const redirect = () => {
    if (!disable) {
      navigation.navigate('Dashboard');
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
            title="Looks like you already have a Pentair account!"
            subTitle="Sign in to go to your account."
            subTitleContProp={styles.subTitleCont}
          />
          <Input
            editable={false}
            label={I18n.t('Email')}
            placeholder={I18n.t('Email')}
            value={email}
            inputValue={true}
          />
          <Input
            password
            editable={true}
            label={I18n.t('Password')}
            placeholder={I18n.t('PasswordTxt')}
            onChangeText={validate}
            error={error && <Text>{I18n.t('PasswordError')}</Text>}
            onFocus={() => setError(false)}
          />

          <Button
            testID="signIn"
            btnContainerProp={{
              backgroundColor: disable ? Colors.primary400 : Colors.primary700,
            }}
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
    backgroundColor: 'white',
    borderColor: Colors.primary700,
    borderWidth: wp(0.3),
  },
  btnSecondTxt: {
    color: Colors.primary700,
  },
});
