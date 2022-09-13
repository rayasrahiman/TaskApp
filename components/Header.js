import React from 'react';
import {View, Image, StyleSheet, Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors} from '../constants/colors';

export default function Header() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/Logo.png')}
        style={styles.img}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: Colors.gray700,
    borderBottomWidth: wp(0.3),
    width: Dimensions.get('window').width,
  },
  img: {
    width: wp(15),
    height: hp(15),
  },
});
