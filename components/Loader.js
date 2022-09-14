import {View, ActivityIndicator, StyleSheet} from 'react-native';
import React from 'react';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

import {Colors} from '../constants/colors';

export default function Loader() {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={Colors.primary700} size={hp(4)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
