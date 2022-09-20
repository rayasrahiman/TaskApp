import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Header from '../components/Header';
import {Colors} from '../constants/colors';

export default function DashboardScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.txtCont}>
        <Text style={styles.txt}>Welcome to Dashboard Screen!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  txtCont: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    fontSize: hp(5),
    textAlign: 'center',
    color: Colors.darkBlue,
  },
});
