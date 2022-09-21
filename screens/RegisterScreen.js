import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import IoniconS from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Header from '../components/Header';
import Input from '../components/Input';
import TitleAndSubTitle from '../components/TitleAndSubTitle';
import Button from '../components/Button';
import I18n from '../languages/i18n';
import {Colors} from '../constants/colors';
import TermsPolicyComp from '../components/TermsPolicyComp';

export default function RegisterScreen({navigation, route}) {
  const [disable, setDisable] = useState(true);
  const [error, setError] = useState({
    newInputError: false,
    confirmInputError: false,
    termsError: false,
    updatesError: false,
  });
  const [confirmNew, setConfirmNew] = useState(false);
  const [terms, setTerms] = useState(false);
  const [updates, setUpdates] = useState(false);
  const [newInput, setNewInput] = useState('');
  const [confirmInput, setConfirmInput] = useState('');

  const regex =
    /^(\S)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])[a-zA-Z0-9~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]{8,20}$/;

  const newInputvalidate = text => {
    setNewInput(text);
    setDisable(!regex.test(text));
  };
  const confirmInputvalidate = text => {
    setConfirmInput(text);
  };

  const redirect = async () => {
    const array = await AsyncStorage.getItem('users');
    const arr = array ? JSON.parse(array) : [];
    console.log(array, 'Register');
    if (confirmInput === newInput && terms && updates) {
      const user = {email: route.params.email, password: newInput};
      arr.push(user);
      setConfirmNew(true);
      AsyncStorage.setItem('users', JSON.stringify(arr));
      navigation.navigate('SignIn', {
        email: route.params.email,
      });
      console.log('correct');
    } else {
      setConfirmNew(false);
      setError({
        newInputError: !disable ? false : true,
        confirmInputError: confirmInput === newInput ? false : true,
        termsError: terms ? false : true,
        updatesError: updates ? false : true,
      });
    }
  };

  return (
    <View style={styles.mainWrapper}>
      <Header />
      <ScrollView>
        <KeyboardAvoidingView behavior="height" style={styles.container}>
          <ScrollView>
            <TitleAndSubTitle
              title={I18n.t('RegisterTitle')}
              subTitle={I18n.t('RegisterSubtitle')}
              subTitleContProp={styles.subTitleCont}
              email={true}
              emailVal={route.params.email}
            />
            <Input
              password
              editable={true}
              label={I18n.t('CreatePassword')}
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
            <TermsPolicyComp
              terms={terms}
              termsIconPress={() => setTerms(!terms)}
              termsOnPress={() =>
                navigation.navigate('TermsPolicy', {termsPrivacyId: 1})
              }
              updates={updates}
              updatesIconPress={() => setUpdates(!updates)}
              privacyOnPress={() =>
                navigation.navigate('TermsPolicy', {termsPrivacyId: 2})
              }
              error={error}
            />
            <Button
              testID="create"
              title={I18n.t('CreateMyAccount')}
              btnWrapper={{...styles.btnCont, ...styles.btnFirst}}
              onPress={redirect}
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
    marginTop: hp(2),
  },
  btnCont: {
    flex: Platform.OS === 'ios' ? 1 : 0,
    justifyContent: Platform.OS === 'ios' ? 'flex-end' : null,
    alignItems: Platform.OS === 'ios' ? 'flex-end' : null,
  },
  btnFirst: {
    marginVertical: hp(5),
  },
  btnSecond: {
    marginVertical: hp(3),
    marginHorizontal: wp(5),
  },
});
