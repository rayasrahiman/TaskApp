import React, {CSSProperties} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors} from '../constants/colors';

export type Props = {
  title: string;
  onPress(): void;
  btnWrapper: any;
  btnContainerProp: any;
  btnTxtProp: any;
};

const Button: React.FC<Props> = ({
  btnWrapper,
  title,
  onPress,
  btnContainerProp,
  btnTxtProp,
  ...touchable
}) => {
  return (
    <View style={{...styles.container, ...btnWrapper}}>
      <TouchableOpacity
        {...touchable}
        onPress={onPress}
        style={{...styles.buttonContainer, ...btnContainerProp}}>
        <Text style={{...styles.btnTxt, ...btnTxtProp}}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: wp(5),
  },
  buttonContainer: {
    width: '100%',
    height: hp(7),
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary700,
  },
  btnTxt: {
    fontSize: hp(3),
    paddingVertical: hp(0.5),
    color: 'white',
  },
});

export default Button;
