import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors} from '../constants/colors';

export default function Header({
  dashboard,
  headerRight,
  onPress,
  title,
  ...headerProps
}) {
  return (
    <View
      {...headerProps}
      style={{
        ...styles.container,
        ...(dashboard && {
          marginTop: Dimensions.get('window').height < 800 ? -hp(11) : -hp(5),
        }),
      }}>
      <View style={styles.imgCont}>
        <Image
          source={require('../assets/Logo.png')}
          style={styles.img}
          resizeMode="contain"
        />
      </View>
      {headerRight && (
        <TouchableOpacity onPress={onPress} style={styles.btnCont}>
          <Text style={styles.btnTxt}>{title}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: Colors.gray,
    borderBottomWidth: wp(0.3),
    width: Dimensions.get('window').width,
    height: hp(15),
  },
  imgCont: {
    marginLeft: wp(40),
  },
  img: {
    width: wp(15),
    height: hp(15),
  },
  btnCont: {
    marginRight: wp(5),
  },
  btnTxt: {
    fontSize: hp(3),
    color: Colors.lightBlue,
  },
});
