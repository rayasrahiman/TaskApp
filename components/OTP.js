import React, {useState} from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import OtpInputs from 'react-native-otp-inputs';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {Colors} from '../constants/colors';
import I18n from '../languages/i18n';

export default function OTP({onCodeChanged, error, onFocus}) {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View style={styles.inputCont}>
      <View style={{marginVertical: hp(3)}}>
        <Text style={{fontSize: hp(3), color: Colors.black}}>
          {I18n.t('sixDigitCode')}
        </Text>
      </View>
      <OtpInputs
        handleChange={onCodeChanged}
        numberOfInputs={6}
        inputStyles={styles.otpTxt}
        inputContainerStyles={{
          ...styles.otpCont,
          ...{borderColor: error ? Colors.red : Colors.gray},
        }}
        onFocus={() => {
          onFocus();
          setIsFocused(true);
        }}
        onBlur={() => {
          setIsFocused(false);
        }}
      />
      {error && (
        <View style={styles.titleCont}>
          <Text style={styles.errTxt}>{error}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  inputCont: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  otpTxt: {
    textAlign: 'center',
    fontSize: hp(3),
  },
  otpCont: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp(5),
    borderWidth: hp(0.3),
    borderRadius: 5,
    width: wp(9),
    height: hp(9),
    marginHorizontal: wp(3.5),
  },
  titleCont: {
    marginHorizontal: Platform.OS === 'android' ? wp(5) : wp(3),
    marginBottom: hp(3),
  },
  errTxt: {
    color: Colors.red,
    fontSize: hp(3),
  },
});
