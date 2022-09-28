import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CircleSlider from 'react-native-circle-slider';
import CircularProgress from 'react-native-circular-progress-indicator';

import Header from '../components/Header';
import BottomTab from '../components/BottomTab';
import {Colors} from '../constants/colors';
import I18n from '../languages/i18n';

export default function DummyScreen({navigation, route}) {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.txtCont}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {/* <CircleSlider
            value={0}
            dialRadius={hp(5)}
            dialWidth={hp(2)}
            btnRadius={hp(2)}
            textSize={hp(3)}
            meterColor="#0cd"
          /> */}
          <CircularProgress
            value={100}
            radius={120}
            inActiveStrokeOpacity={0.5}
            activeStrokeWidth={15}
            inActiveStrokeWidth={20}
            progressValueStyle={{fontWeight: '100', color: Colors.darkBlue}}
            activeStrokeSecondaryColor={Colors.darkBlue}
            inActiveStrokeColor={Colors.lightBlue}
            duration={5000}
            dashedStrokeConfig={{
              count: 50,
              width: 4,
            }}
          />
        </View>
        <Text style={styles.welcomeTxt}>
          {I18n.t('Welcometo')} {route.params.tab}
        </Text>
      </View>
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
        tab={route.params.tab}
      />
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
  welcomeTxt: {
    fontSize: hp(5),
    color: Colors.black,
    fontWeight: 'bold',
  },
});
