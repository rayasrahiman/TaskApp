import React, {useRef, useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Colors} from '../constants/colors';

export default function CardSlider({
  data,
  horizontalIndicator,
  pagingEnabled,
  horizontal,
  BottomRgtBtn,
  navigation,
  ...fLprops
}) {
  const [testSlider, setTestSlider] = useState(0);
  const ref = useRef(null);

  const onChange = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(
      contentOffsetX / Dimensions.get('window').width,
    );
    setTestSlider(currentIndex);
  };

  //For auto slide:

  // const goToNextSlide = () => {
  //   const nextSlideIndex = testSlider + 1;
  //   if (nextSlideIndex != data.length) {
  //     const offset = nextSlideIndex * Dimensions.get('window').width;
  //     ref?.current.scrollToOffset({offset});
  //     setTestSlider(testSlider + 1);
  //   }
  // };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     goToNextSlide();
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, [testSlider]);

  const renderItem = ({item}) => {
    return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <View>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.desc}>{item.description}</Text>
            <View style={styles.testingWrapper}>
              <Text style={styles.testingTxt}>{item.testing}</Text>
            </View>
          </View>
          <View>
            <View style={{...styles.iconCont, ...{marginLeft: -wp(8)}}}>
              <MaterialIcon
                name="close"
                style={{...styles.iconSize, ...{fontSize: hp(5)}}}
              />
            </View>
            <View style={{...styles.iconCont, ...{marginLeft: -wp(16)}}}>
              <MaterialIcon
                name="mailbox-open-outline"
                style={{...styles.iconSize, ...{fontSize: hp(10)}}}
              />
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        {...fLprops}
        data={data}
        ref={ref}
        onMomentumScrollEnd={onChange}
        showsHorizontalScrollIndicator={horizontalIndicator}
        pagingEnabled={pagingEnabled}
        horizontal={horizontal}
        keyExtractor={(item, index) => item.id}
        renderItem={renderItem}
      />
      <View style={styles.wrapDot}>
        {data.map((e, index) => (
          <View
            key={e.id}
            style={testSlider === index ? styles.dotActive : styles.dot}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: wp(5),
    borderWidth: hp(0.3),
    borderColor: Colors.gray,
    borderRadius: hp(2),
    width: wp(90),
    height: hp(40),
  },
  title: {
    paddingTop: hp(2),
    paddingLeft: wp(3),
    paddingRight: wp(25),
    fontWeight: 'bold',
    fontSize: hp(4),
    color: Colors.darkBlue,
  },
  desc: {
    paddingTop: hp(1),
    paddingLeft: wp(3),
    paddingRight: wp(25),
    fontSize: hp(3),
    color: Colors.darkBlue,
  },
  testingWrapper: {
    marginVertical: hp(3),
  },
  testingTxt: {
    paddingLeft: wp(3),
    paddingRight: wp(25),
    fontSize: hp(3),
    color: Colors.lightBlue,
  },
  iconCont: {
    marginVertical: hp(3),
  },
  iconSize: {
    color: Colors.lightBlue,
  },
  wrapDot: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: hp(3),
  },
  dotActive: {
    margin: 3,
    backgroundColor: Colors.darkBlue,
    borderRadius: hp(2.5) / 2,
    borderWidth: 5,
    borderColor: Colors.darkBlue,
    height: hp(2.5),
    width: hp(2.5),
  },
  dot: {
    margin: 3,
    backgroundColor: Colors.grayishBlack,
    borderRadius: hp(2.5) / 2,
    borderWidth: 5,
    borderColor: Colors.grayishBlack,
    height: hp(2.5),
    width: hp(2.5),
  },
});
