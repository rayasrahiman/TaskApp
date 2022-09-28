import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import Ionicon from 'react-native-vector-icons/Ionicons';
import FeatherIcon from 'react-native-vector-icons/Feather';

import {Colors} from '../constants/colors';
import I18n from '../languages/i18n';

export default function WeatherTab() {
  return (
    <View style={styles.container}>
      <View style={styles.firstCont}>
        <FontAwesomeIcon name="cloud-sun" style={styles.iconSize} />
        <Text style={styles.titleTxt}>{I18n.t("PartlyCloudy")}</Text>
      </View>
      <View style={styles.secondMainCont}>
        <View style={styles.cont}>
          <Ionicon name="water" style={styles.iconSize} />
          <Text style={styles.titleTxt}>{I18n.t("78")}</Text>
        </View>
        <View style={styles.cont}>
          <FeatherIcon name="wind" style={styles.iconSize} />
          <Text style={styles.titleTxt}>{I18n.t("70")}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: hp(3),
    backgroundColor: Colors.lightestBlue,
    shadowColor: Colors.grayishBlack,
    shadowOffset: {
      width: 0,
      height: 0.3,
    },
    shadowOpacity: 0.25,
    elevation: 5,
  },
  firstCont: {
    marginHorizontal: wp(0.5),
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleTxt: {
    fontWeight: 'bold',
    fontSize: hp(3),
    color: Colors.darkBlue,
  },
  secondMainCont: {
    flexDirection: 'row',
  },
  cont: {
    marginHorizontal: wp(3),
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconSize: {
    fontSize: hp(4),
    marginRight: wp(2),
    color: Colors.darkBlue,
  },
});
