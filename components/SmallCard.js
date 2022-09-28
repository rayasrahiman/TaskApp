import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AntIcon from 'react-native-vector-icons/AntDesign';
import EntypoIcon from 'react-native-vector-icons/Entypo';

import {Colors} from '../constants/colors';
import I18n from '../languages/i18n';

export default function SmallCard() {
  return (
    <View style={styles.container}>
      <View style={styles.cardWrapper}>
        <AntIcon style={styles.iconStyle} name="medicinebox" />
        <Text style={styles.cardTitle}>{I18n.t("IntelliConnect")}</Text>
        <Text style={styles.cardSubTitle}>Auto</Text>
      </View>
      <View style={styles.cardWrapper}>
        <EntypoIcon style={styles.iconStyle} name="cycle" />
        <Text style={styles.cardTitle}>{I18n.t("IntelliFlo")}</Text>
        <Text style={styles.cardSubTitle}>{I18n.t("ONuntil")}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: wp(5),
  },
  cardWrapper: {
    marginRight: wp(2),
    borderWidth: hp(0.3),
    borderColor: Colors.gray,
    borderRadius: hp(2),
    width: wp(44),
    height: hp(20),
  },
  iconStyle: {
    fontSize: hp(4),
    color: Colors.lightBlue,
    paddingHorizontal: wp(3),
    paddingTop: hp(2),
  },
  cardTitle: {
    color: Colors.lightBlue,
    fontWeight: 'bold',
    fontSize: hp(3.5),
    paddingHorizontal: wp(3),
    paddingTop: hp(2),
  },
  cardSubTitle: {
    color: Colors.lightBlue,
    fontSize: hp(3),
    paddingHorizontal: wp(3),
  },
});
