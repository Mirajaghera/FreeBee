import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import PagerView from 'react-native-pager-view';
import Fonts from '../Fonts';
import {
  createStaticNavigation,
  NavigationContainer,
  useNavigation,
} from '@react-navigation/native';
import { ActivityIndicator } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  runOnJS,
  Easing,
} from 'react-native-reanimated';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const onbordeingscreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const animation = useSharedValue(0);

  const Pageref = useRef(null);
  const navigation = useNavigation();
  const [Ne, setNe] = useState();

  function navigate() {
    if (Ne <= 2) {
      return Ne + 1;
    } else {
      setIsLoading(true); // Start loading
      animation.value = withTiming(1, { duration: 800 }, () => {
        runOnJS(setIsLoading)(false);
        runOnJS(navigation.replace)('Login'); // Navigate after animation completes
      });
      // setTimeout(() => {   // Simulate loading time (Replace this with actual logic)
      //     setIsLoading(false); // Stop loading
      //     navigation.replace('Login') // Navigate after loading
      // }, 1000); // Adjust time as needed
    }
  }
  const animatedStyle = useAnimatedStyle(() => {
    return {
      width:
        animation.value == 0
          ? withTiming(290, { duration: 400 })
          : withTiming(60, { duration: 400 }),
      backgroundColor: '#fccaa5',
    };
  });
  return (
    <View style={{ flex: 1, backgroundColor: '#f9f3f0' }}>
      <PagerView
        style={styles.pagerView}
        initialPage={0}
        ref={Pageref}
        onPageSelected={e => {
          setNe(e.nativeEvent.position);
        }}
      >
        <View
          key="1"
          style={{ backgroundColor: '#f9f3f0', paddingHorizontal: 14 }}
        >
          <Image
            style={styles.images}
            source={require('./Images/result_onbording1.png')}
          />
          <Text
            style={{
              fontFamily: Fonts.Extra_Bold,
              fontSize: scale(18),
              alignSelf: 'center',
              marginBottom: 9,
            }}
          >
            You name it, we'll get it
          </Text>
          <Text
            style={{
              fontFamily: Fonts.MEDUIM,
              fontSize: scale(16),
              textAlign: 'center',
            }}
          >
            We deliver every thing related to food or groceries{' '}
          </Text>
        </View>

        <View
          key="2"
          style={{ backgroundColor: '#f9f3f0', paddingHorizontal: 14 }}
        >
          <Image
            style={styles.images}
            source={require('./Images/result_onbording2.png')}
          />
          <Text
            style={{
              fontFamily: Fonts.Extra_Bold,
              fontSize: scale(18),
              alignSelf: 'center',
              marginBottom: 9,
            }}
          >
            Test the Best
          </Text>
          <Text
            style={{
              fontFamily: Fonts.MEDUIM,
              fontSize: scale(16),
              textAlign: 'center',
            }}
          >
            Enjoy the taste of all meals you love in one place. we are experts
          </Text>
          <View
            style={{
              flexDirection: 'row',
              gap: 10,
              alignSelf: 'center',
              marginTop: 50,
              alignItems: 'center',
            }}
          ></View>
        </View>

        <View key="3" style={{ backgroundColor: '#f9f3f0' }}>
          <Image
            style={{
              height: 480,
              width: 480,
              alignSelf: 'center',
              marginLeft: 10,
              top: -55,
            }}
            source={require('./Images/onbording3.png')}
          />
          <Text
            style={{
              fontFamily: Fonts.Extra_Bold,
              fontSize: scale(18),
              alignSelf: 'center',
              marginBottom: 0,
              position: 'absolute',
              bottom: 65,
            }}
          >
            Fasted Dilevery
          </Text>
          <Text
            style={{
              fontFamily: Fonts.MEDUIM,
              fontSize: scale(16),
              textAlign: 'center',
              position: 'absolute',
              bottom: 0,
              marginLeft: 15,
            }}
          >
            Enjoy lighting-fast delivery to your doorstep
          </Text>
        </View>

        <View
          key="4"
          style={{ backgroundColor: '#f9f3f0', paddingHorizontal: 14 }}
        >
          <Image
            style={{
              height: 400,
              width: 400,
              alignSelf: 'center',
              marginTop: 0,
              marginLeft: 10,
              marginBottom: 25,
            }}
            source={require('./Images/onbording4_optimized.png')}
          />
          <Text
            style={{
              fontFamily: Fonts.Extra_Bold,
              fontSize: scale(18),
              alignSelf: 'center',
              marginBottom: 9,
              position: 'absolute',
              bottom: 70,
            }}
          >
            Door-Stop Delivery
          </Text>
          <Text
            style={{
              fontFamily: Fonts.MEDUIM,
              fontSize: scale(16),
              textAlign: 'center',
              position: 'absolute',
              bottom: 0,
              marginLeft: 20,
            }}
          >
            No worry to go out.Now every store at you door-step
          </Text>
        </View>
      </PagerView>
      <View
        style={{
          flexDirection: 'row',
          gap: 10,
          alignSelf: 'center',
          marginTop: moderateScale(30),
          alignItems: 'center',
        }}
      >
        {Ne == 0 ? (
          <View
            style={{
              height: 15,
              width: 15,
              borderRadius: 50,
              backgroundColor: '#FF6B00',
            }}
          />
        ) : (
          <View
            style={{
              height: 10,
              width: 10,
              borderRadius: 50,
              backgroundColor: '#6D676e',
              opacity: 0.5,
            }}
          />
        )}
        {Ne == 1 ? (
          <View
            style={{
              height: 15,
              width: 15,
              borderRadius: 50,
              backgroundColor: '#FF6B00',
            }}
          />
        ) : (
          <View
            style={{
              height: 10,
              width: 10,
              borderRadius: 50,
              backgroundColor: '#6D676e',
              opacity: 0.5,
            }}
          />
        )}
        {Ne == 2 ? (
          <View
            style={{
              height: 15,
              width: 15,
              borderRadius: 50,
              backgroundColor: '#FF6B00',
            }}
          />
        ) : (
          <View
            style={{
              height: 10,
              width: 10,
              borderRadius: 50,
              backgroundColor: '#6D676e',
              opacity: 0.5,
            }}
          />
        )}
        {Ne == 3 ? (
          <View
            style={{
              height: 15,
              width: 15,
              borderRadius: 50,
              backgroundColor: '#FF6B00',
            }}
          />
        ) : (
          <View
            style={{
              height: 10,
              width: 10,
              borderRadius: 50,
              backgroundColor: '#6D676e',
              opacity: 0.5,
            }}
          />
        )}
      </View>
      {isLoading ? (
        <Animated.View
          style={[
            {
              height: verticalScale(44),
              width: '80%',
              // backgroundColor: '#006bff',
              borderRadius: 15,
              marginTop: verticalScale(30),
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
            },
            animatedStyle,
          ]}
        >
          <ActivityIndicator size="large" color="white" style={{}} />
        </Animated.View>
      ) : (
        <Pressable
          onPress={() => Pageref.current.setPage(navigate())}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? '#fccaa5' : '#FF6B00',
            },
            styles.button,
          ]}
        >
          {Ne == 3 ? (
            <Text
              style={{
                fontSize: 20,
                fontFamily: Fonts.BOLD,
                color: 'white',
                marginTop: 3,
              }}
            >
              Done
            </Text>
          ) : (
            <Text
              style={{
                fontSize: 20,
                fontFamily: Fonts.BOLD,
                color: 'white',
                marginTop: 3,
              }}
            >
              Next
            </Text>
          )}
        </Pressable>
      )}
    </View>
  );
};

export default onbordeingscreen;

const styles = StyleSheet.create({
  pagerView: {
    marginTop: moderateScale(99),
    height: verticalScale(400),
    width: scale(350),
    // backgroundColor: 'red'
  },
  images: {
    height: verticalScale(290),
    width: scale(300),
    alignSelf: 'center',
    marginTop: 0,
    marginRight: 5,
    marginBottom: 25,
  },
  button: {
    height: verticalScale(44),
    width: '80%',
    // backgroundColor: '#006bff',
    borderRadius: 15,
    marginTop: verticalScale(30),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
