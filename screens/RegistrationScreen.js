import React, {useState} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

import Button from '../components/Button';
import Header from '../components/Header';
import Input from '../components/Input';
import TitleAndSubTitle from '../components/TitleAndSubTitle';
import {Colors} from '../constants/colors';
import I18n from '../languages/i18n';

export default function RegistrationScreen({navigation}) {
  const [input, setInput] = useState('');
  const [disable, setDisable] = useState(true);
  const [error, setError] = useState(false);

  const regex =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

  const validate = text => {
    setInput(text);
    setDisable(!regex.test(text));
  };

  const redirect = () => {
    if (!disable) {
      navigation.navigate('Login', {
        email: input,
      });
    } else {
      setError(true);
    }
  };

  return (
    <View style={styles.mainWrapper}>
      <Header />
      <TitleAndSubTitle
        title="Welcome to the Pentair Home app!"
        subTitle="Get the most out of your home's water. Enter your email to get started."
        subTitleContProp={styles.subTitleCont}
      />
      <Input
        testID="emailID"
        editable={true}
        label={I18n.t('Email')}
        placeholder={I18n.t('Email')}
        onChangeText={validate}
        error={error && <Text>{I18n.t('EmailError')}</Text>}
        onFocus={() => setError(false)}
      />
      <Button
        testID="register"
        btnContainerProp={{
          backgroundColor: disable ? Colors.primary400 : Colors.primary700,
        }}
        onPress={redirect}
        title={I18n.t('GetStarted')}
        btnWrapper={styles.btnWrapper}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
  },
  subTitleCont: {
    marginVertical: hp(2),
  },
  btnWrapper: {
    marginTop: Dimensions.get('window').height < 700 ? hp(30) : hp(30),
  },
});
