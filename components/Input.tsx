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
import Loader from './Loader';

export type Props = {
  label: string;
  placeholder: string;
  titleContProp: any;
  titleHeaderProp: any;
  txtInputContProp: any;
  txtInputProp: any;
  onChangeText: (text: string) => void;
  iconName: string;
  txt: string;
  error: boolean;
  password: boolean;
  forgotPassword: boolean;
  passwordLoader: boolean;
  createPass: boolean;
  inputValue: boolean;
  confirmNew: boolean;
  onFocus(): void;
  forgotPass(): void;
};

const Input: React.FC<Props> = ({
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
  forgotPassword,
  passwordLoader,
  inputValue,
  txt,
  onFocus,
  forgotPass,
  createPass,
  confirmNew,
  ...inputProps
}) => {
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
              ? Colors.red
              : isFocused
              ? Colors.black
              : Colors.grayishBlack,
            backgroundColor: inputValue ? Colors.lightGray : Colors.white,
          },
          ...txtInputContProp,
        }}>
        <TextInput
          {...inputProps}
          style={{
            ...styles.txtInput,
            ...{color: inputValue ? Colors.grayishBlack : Colors.black},
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
            {confirmNew && (
              <AntIcon
                name="checkcircle"
                style={[
                  styles.iconSize,
                  {marginRight: wp(2), color: Colors.green},
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
      {createPass && (
        <View style={{...styles.titleCont, ...{marginVertical: hp(3)}}}>
          <View style={styles.createPassCont}>
            <Icon
              name="check"
              style={{
                ...styles.iconSize,
                ...{
                  color: txt.match(/(?=^.{8,}$)/) ? Colors.green : Colors.gray,
                  marginRight: wp(1),
                },
              }}
            />
            <Text style={styles.createPassTxt}>
              {I18n.t('eightCharacters')}
            </Text>
          </View>
          <View style={styles.createPassCont}>
            <Icon
              name="check"
              style={{
                ...styles.iconSize,
                ...{
                  color: txt.match(/(?=.*[a-z])(?=.*[A-Z])/)
                    ? Colors.green
                    : Colors.gray,
                  marginRight: wp(1),
                },
              }}
            />
            <Text style={styles.createPassTxt}>
              {I18n.t('upperandlowercase')}
            </Text>
          </View>
          <View style={styles.createPassCont}>
            <Icon
              name="check"
              style={{
                ...styles.iconSize,
                ...{
                  color: txt.match(/(?=.*[0-9])/) ? Colors.green : Colors.gray,
                  marginRight: wp(1),
                },
              }}
            />
            <Text style={styles.createPassTxt}>{I18n.t('oneNumber')}</Text>
          </View>
          <View style={styles.createPassCont}>
            <Icon
              name="check"
              style={{
                ...styles.iconSize,
                ...{
                  color: txt.match(
                    /(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])/,
                  )
                    ? Colors.green
                    : Colors.gray,
                  marginRight: wp(1),
                },
              }}
            />
            <Text style={styles.createPassTxt}>{I18n.t('specialChar')}</Text>
          </View>
        </View>
      )}
      {forgotPassword && (
        <TouchableOpacity style={styles.titleCont} onPress={forgotPass}>
          <Text style={styles.txtInput}>{I18n.t('ForgotPassword')}</Text>
        </TouchableOpacity>
      )}
      {passwordLoader && <Loader />}
    </View>
  );
};

const styles = StyleSheet.create({
  titleCont: {
    marginHorizontal: Platform.OS === 'android' ? wp(5) : wp(3),
  },
  titleHeader: {
    fontWeight: 'bold',
    fontSize: Platform.OS === 'android' ? hp(3) : hp(2),
    color: Colors.black,
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
    borderColor: Colors.grayishBlack,
    alignItems: 'center',
  },
  txtInput: {
    color: Colors.darkBlue,
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
  createPassCont: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  createPassTxt: {
    fontSize: hp(3),
    color: Colors.grayishBlack,
  },
});

export default Input;
