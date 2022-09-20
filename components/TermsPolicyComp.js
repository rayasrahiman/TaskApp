import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import IoniconS from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {Colors} from '../constants/colors';
import I18n from '../languages/i18n';

export default function TermsPolicyComp({
  terms,
  termsOnPress,
  termsIconPress,
  updates,
  updatesIconPress,
  privacyOnPress,
  error,
}) {
  return (
    <View style={styles.mainCont}>
      <View style={styles.termsCont}>
        <IoniconS
          style={{
            ...styles.termsIcon,
            ...{
              color: terms
                ? Colors.lightBlue
                : error.termsError
                ? Colors.red
                : Colors.grayishBlack,
            },
          }}
          name={terms ? 'ios-checkbox' : 'ios-square-outline'}
          onPress={termsIconPress}
        />
        <View>
          <Text numberOfLines={2} style={styles.termsTxt1}>
            {I18n.t('termsTxt1')}
          </Text>
          <TouchableOpacity onPress={termsOnPress}>
            <Text numberOfLines={2} style={styles.termsTxt2}>
              {I18n.t('termsTxt2')}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.updatesCont}>
        <IoniconS
          style={{
            ...styles.updatesIcon,
            ...{
              color: updates
                ? Colors.lightBlue
                : error.updatesError
                ? Colors.red
                : Colors.grayishBlack,
            },
          }}
          name={updates ? 'ios-checkbox' : 'ios-square-outline'}
          onPress={updatesIconPress}
        />
        <Text style={styles.updatesTxt}>{I18n.t('updatesTxt')}</Text>
      </View>
      <View style={styles.privacyCont}>
        <Text numberOfLines={2} style={styles.privacyTxt1}>
          {I18n.t('privacyTxt1')}
        </Text>
        <TouchableOpacity onPress={privacyOnPress}>
          <Text numberOfLines={2} style={styles.privacyTxt2}>
            {I18n.t('privacyTxt2')}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainCont: {
    marginHorizontal: wp(5),
    marginTop: hp(3),
  },
  termsCont: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: hp(1),
  },
  termsIcon: {
    fontSize: hp(5),
    marginRight: wp(2),
  },
  termsTxt1: {
    fontSize: hp(3),
    color: Colors.grayishBlack,
    marginRight: wp(1),
  },
  termsTxt2: {
    fontSize: hp(3),
    color: Colors.lightBlue,
  },
  updatesCont: {
    flexDirection: 'row',
    marginVertical: hp(1),
  },
  updatesIcon: {
    fontSize: hp(5),
    marginRight: wp(2),
  },
  updatesTxt: {
    flexWrap: 'wrap',
    fontSize: hp(3),
    color: Colors.grayishBlack,
    marginRight: wp(5),
  },
  privacyCont: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: hp(5),
    alignItems: 'center',
  },
  privacyTxt1: {
    fontSize: hp(3),
    color: Colors.grayishBlack,
    marginRight: wp(1),
  },
  privacyTxt2: {
    fontSize: hp(3),
    color: Colors.lightBlue,
  },
});
