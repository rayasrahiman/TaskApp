import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialComIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import WelcomeScreen from '../screens/WelcomeScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import RegisterScreen from '../screens/RegisterScreen';
import SignInScreen from '../screens/SignInScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import OTPScreen from '../screens/OTPScreen';
import DashboardScreen from '../screens/DashboardScreen';
import TermsAndPolicy from '../screens/TermsAndPolicy';
import DummyScreen from '../screens/DummyScreen';
import {Colors} from '../constants/colors';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const CustomDrawer = props => {
  return (
    <DrawerContentScrollView {...props}>
      <View>
        <View style={styles.closeWrapper}>
          <MaterialComIcon name="close" style={styles.closeIcon} />
        </View>
        <View>
          <Text style={styles.emailTxt}>Joe@gmail.com</Text>
          <View style={styles.titleCont}>
            <Text style={styles.titleTxt}>Pool Info</Text>
            <MaterialIcon style={styles.arrowIcon} name="arrow-forward-ios" />
          </View>
          <View style={styles.bottomBorder} />
          <TouchableOpacity style={styles.titleCont}>
            <Text style={styles.titleTxt}>Log Out</Text>
            <MaterialIcon style={styles.arrowIcon} name="arrow-forward-ios" />
          </TouchableOpacity>
          <View style={styles.bottomBorder} />
        </View>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerLeft: false,
        headerLeft: () => {
          const navigation = useNavigation();
          return (
            <View style={styles.headerLftCont}>
              <Ionicons
                onPress={() => navigation.toggleDrawer()}
                name="menu-outline"
                size={hp(5)}
                color={Colors.darkBlue}
              />
            </View>
          );
        },
        headerShown: true,
        headerTintColor: Colors.lightBlue,
        headerStyle: styles.headerStyle,
        headerTitle: '',
        overlayColor: Colors.darkBlue,
        drawerLabel: () => null,
        drawerActiveBackgroundColor: 'transparent',
        drawerStyle: styles.drawerStyle,
      }}>
      <Drawer.Screen name="Dashboard" component={DashboardScreen} />
    </Drawer.Navigator>
  );
};

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Pager" component={WelcomeScreen} />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="OTP" component={OTPScreen} />
        <Stack.Screen name="Dashboard" component={DrawerNavigator} />
        <Stack.Screen name="TermsPolicy" component={TermsAndPolicy} />
        <Stack.Screen name="DummyScreen" component={DummyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  closeWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginVertical: hp(3),
  },
  closeIcon: {
    fontSize: hp(5),
    color: Colors.lightBlue,
  },
  emailTxt: {
    fontSize: hp(3),
    color: Colors.black,
    fontWeight: 'bold',
  },
  titleCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: hp(3),
  },
  titleTxt: {
    fontSize: hp(3),
    color: Colors.black,
  },
  arrowIcon: {
    fontSize: hp(2.5),
    color: Colors.grayishBlack,
  },
  bottomBorder: {
    borderBottomWidth: hp(0.3),
    borderBottomColor: Colors.lightGray,
  },
  headerLftCont: {
    paddingLeft: wp(5),
    paddingTop: hp(0.8),
  },
  headerStyle: {
    backgroundColor: 'transparent',
    elevation: 0,
    shadowOpacity: 0,
    alignItems: 'center',
    fontWeight: 'bold',
  },
  drawerStyle: {
    backgroundColor: Colors.white,
    width: wp(80),
    paddingHorizontal: wp(5),
  },
});

export default MainNavigator;
