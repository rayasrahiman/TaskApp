import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntIcon from 'react-native-vector-icons/AntDesign';

import {Colors} from '../constants/colors';
import I18n from '../languages/i18n';

export default function Input({
  label,
  placeholder,
  titleContProp,
  titleHeaderProp,
  txtInputContProp,
  txtInputProp,
  onChangeText,
  iconName,
  error,
  password,
  inputValue,
  onFocus = () => {},
  ...inputProps
}) {
  const [isFocused, setIsFocused] = useState(false);
  const [hidePass, setHidePass] = useState(password);

  return (
    <View>
      <View style={{...styles.titleCont, ...titleContProp}}>
        <Text style={{...styles.titleHeader, ...titleHeaderProp}}>{label}</Text>
      </View>
      <View
        style={{
          ...styles.txtInputCont,
          ...{
            borderColor: error
              ? Colors.error
              : isFocused
              ? Colors.primary700
              : Colors.gray700,
            backgroundColor: inputValue ? '#888' : Colors.backGround,
          },
          ...txtInputContProp,
        }}>
        <TextInput
          {...inputProps}
          style={{
            ...styles.txtInput,
            ...{color: inputValue ? Colors.gray700 : Colors.primary700},
            ...txtInputProp,
          }}
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
          placeholder={placeholder}
          onChangeText={onChangeText}
          secureTextEntry={hidePass}
        />
        {password && (
          <View style={{flexDirection: 'row'}}>
            {error && (
              <AntIcon
                name="exclamationcircle"
                style={[
                  styles.iconSize,
                  {marginRight: wp(2), color: Colors.error},
                ]}
              />
            )}
            <Icon
              onPress={() => setHidePass(!hidePass)}
              name={hidePass ? 'eye-off-outline' : 'eye-outline'}
              style={styles.iconSize}
            />
          </View>
        )}
      </View>
      {error && (
        <View style={{...styles.titleCont, ...{marginTop: hp(0.2)}}}>
          <Text style={styles.errTxt}>{error}</Text>
        </View>
      )}
      {password && (
        <TouchableOpacity style={styles.titleCont}>
          <Text style={styles.txtInput}>{I18n.t('ForgotPassword')}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  titleCont: {
    marginHorizontal: Platform.OS === 'android' ? wp(5) : wp(3),
  },
  titleHeader: {
    fontWeight: 'bold',
    fontSize: Platform.OS === 'android' ? hp(3) : hp(2),
  },
  txtInputCont: {
    marginVertical: 10,
    marginHorizontal: Platform.OS === 'android' ? wp(5) : wp(3),
    height: Platform.OS === 'android' ? hp(7) : hp(6),
    flexDirection: 'row',
    paddingHorizontal: Platform.OS === 'android' ? wp(4) : wp(2),
    borderWidth: wp(0.3),
    borderRadius: hp(1),
    // width: '100%',
    borderColor: Colors.gray700,
    alignItems: 'center',
  },
  txtInput: {
    color: Colors.primary700,
    flex: 1,
    fontSize: Platform.OS === 'android' ? hp(3) : hp(2),
  },
  iconSize: {
    fontSize: hp(3),
  },
  errTxt: {
    color: Colors.error,
    fontSize: hp(3),
  },
});
