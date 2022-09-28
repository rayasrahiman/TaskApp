import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import AntIcon from 'react-native-vector-icons/AntDesign';
import Ionicon from 'react-native-vector-icons/Ionicons';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {Colors} from '../constants/colors';
import I18n from '../languages/i18n';

export default function BottomTab({
  tab,
  dashboardPress,
  devicePress,
  schedulePress,
  notificationPress,
}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={dashboardPress} style={{alignItems: 'center'}}>
        <AntIcon
          name="appstore-o"
          style={{
            ...styles.iconSize,
            ...{
              color: tab === 'dashboard' ? Colors.darkBlue : Colors.black,
            },
          }}
        />
        <Text
          style={{
            ...styles.btnTitle,
            ...{
              color: tab === 'dashboard' ? Colors.darkBlue : Colors.black,
            },
          }}>
          {I18n.t('Dashboard')}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={devicePress} style={{alignItems: 'center'}}>
        <Ionicon
          name="water-outline"
          style={{
            ...styles.iconSize,
            ...{color: tab === 'Device' ? Colors.darkBlue : Colors.black},
          }}
        />
        <Text
          style={{
            ...styles.btnTitle,
            ...{color: tab === 'Device' ? Colors.darkBlue : Colors.black},
          }}>
          {I18n.t('Devices')}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={schedulePress} style={{alignItems: 'center'}}>
        <Ionicon
          name="ios-calendar-outline"
          style={{
            ...styles.iconSize,
            ...{color: tab === 'Schedule' ? Colors.darkBlue : Colors.black},
          }}
        />
        <Text
          style={{
            ...styles.btnTitle,
            ...{color: tab === 'Schedule' ? Colors.darkBlue : Colors.black},
          }}>
          {I18n.t('Schedule')}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={notificationPress}
        style={{alignItems: 'center'}}>
        <FontistoIcon
          name="bell"
          style={{
            ...styles.iconSize,
            ...{
              color: tab === 'Notification' ? Colors.darkBlue : Colors.black,
            },
          }}
        />
        <Text
          style={{
            ...styles.btnTitle,
            ...{
              color: tab === 'Notification' ? Colors.darkBlue : Colors.black,
            },
          }}>
          {I18n.t('Notifications')}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: hp(4),
    shadowColor: Colors.grayishBlack,
    shadowOffset: {
      width: 0,
      height: 0.3,
    },
    shadowOpacity: 0.25,
    elevation: 5,
  },
  iconSize: {
    fontSize: hp(4),
  },
  btnTitle: {
    // color: Colors.black,
    fontSize: hp(2.5),
  },
});
