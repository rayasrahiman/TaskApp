import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Ionicon from 'react-native-vector-icons/Ionicons';

import Header from '../components/Header';
import {Colors} from '../constants/colors';
import BottomTab from '../components/BottomTab';
import CardSlider from '../components/CardSlider';
import WeatherTab from '../components/WeatherTab';
import SmallCard from '../components/SmallCard';
import {TestingKit} from '../assets/TestingKit';
import I18n from '../languages/i18n';

export default function DashboardScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Header dashboard={true} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollWrapper}>
        <WeatherTab />
        <View style={styles.checkMarkWrapper}>
          <Ionicon style={styles.iconSize} name="checkmark-circle" />
          <Text style={styles.checkMarkTxt}>{I18n.t('EverythingOK')}</Text>
        </View>
        <SmallCard />
        <View style={styles.txtWrapper}>
          <Text style={styles.txtTitle}>{I18n.t('ForYou')}</Text>
          <Text style={styles.txtSubTitle}>{I18n.t('tipsTxt')}</Text>
        </View>
        <View>
          <CardSlider
            data={TestingKit}
            horizontalIndicator={false}
            pagingEnabled={true}
            horizontal={true}
          />
        </View>
      </ScrollView>
      <BottomTab
        dashboardPress={() =>
          navigation.navigate('Dashboard', {tab: 'dashboard'})
        }
        devicePress={() => navigation.navigate('DummyScreen', {tab: 'Device'})}
        schedulePress={() =>
          navigation.navigate('DummyScreen', {tab: 'Schedule'})
        }
        notificationPress={() =>
          navigation.navigate('DummyScreen', {tab: 'Notification'})
        }
        tab={'dashboard'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollWrapper: {
    paddingBottom: hp(5),
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
  iconSize: {
    fontSize: hp(4),
    color: Colors.green,
    marginRight: wp(2),
  },
  checkMarkWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: hp(3),
    marginHorizontal: wp(5),
  },
  checkMarkTxt: {
    color: Colors.green,
    fontSize: hp(3),
  },
  txtWrapper: {
    marginVertical: hp(3),
    marginHorizontal: wp(5),
  },
  txtTitle: {
    color: Colors.black,
    fontWeight: 'bold',
    fontSize: hp(3.5),
  },
  txtSubTitle: {
    color: Colors.grayishBlack,
    fontSize: hp(3),
  },
});
