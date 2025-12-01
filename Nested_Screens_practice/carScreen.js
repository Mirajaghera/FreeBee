import React, { useContext, useState, useCallback, useEffect } from 'react';
import { CartContext } from './CartContext';
import Fonts from '../Fonts';
import Fonts2 from '../Fonts2';
import {
  createStaticNavigation,
  NavigationContainer,
  useNavigation,
} from '@react-navigation/native';
import { Screen } from 'react-native-screens';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnJS,
  withSpring,
  interpolate,
  Easing,
} from 'react-native-reanimated';
import {
  GestureDetector,
  GestureHandlerRootView,
  Gesture,
} from 'react-native-gesture-handler';
import { useFocusEffect } from '@react-navigation/native';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import Modall from './Modal';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const carScreen = () => {
  const translateY = useSharedValue(0);
  const animation = useSharedValue(0);
  const animationn = useSharedValue(0);
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const [arrow, setArrow] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const { cartItems, addToCart, removeFromCart, offer_price, SetOffer_price } =
    useContext(CartContext);
  let subTotal = cartItems.reduce(
    (total, item) =>
      total + parseInt(item.prices.replace('₹', '')) * item.Quantiy,
    0,
  );
  let Taxes = Math.round(subTotal * 0.18);
  let Delivary = 25;
  let Total = Taxes + Delivary + subTotal - offer_price;
  const [orderPlaced, setOrderPlaced] = useState(false);
  useFocusEffect(
    useCallback(() => {
      return () => {
        animation.value = 0; // Reset when screen is unfocused
      };
    }, []),
  );
  useEffect(() => {
    if (cartItems.length > 0) {
      null;
    } else {
      SetOffer_price(0);
    }
  }, []);
  const panGesture = Gesture.Pan()
    .onUpdate(event => {
      translateY.value = event.translationY;
      console.log(translateY.value);
      if (translateY.value < 0) {
        animationn.value = withTiming(1, {
          duration: 450,
          easing: Easing.in(Easing.elastic(1.1)),
        });
      } else {
        animationn.value = withTiming(0, { duration: 400 });
      }
    })
    .onEnd(() => {
      translateY.value = 0; // Reset position with animation
    });
  const animatedStylee = useAnimatedStyle(() => {
    const height = interpolate(animationn.value, [1, 0], [465, 60]);
    return {
      height: height,
    };
  });
  const animateddStylee = useAnimatedStyle(() => {
    const rotate = interpolate(animationn.value, [0, 1], [180, 0]);
    return {
      transform: [{ rotate: `${rotate}deg` }],
    };
  });

  function navigate2() {
    setIsLoading(true);
    animation.value = withTiming(1, { duration: 800 }, () => {
      runOnJS(setIsLoading)(false);
      runOnJS(navigation.navigate)('Payment'); // Navigate after animation completes
    });
  }
  // Apply animation style
  const animatedStyle = useAnimatedStyle(() => {
    return {
      width:
        animation.value == 0
          ? withTiming(350, { duration: 400 })
          : withTiming(80, { duration: 400 }),
      backgroundColor: '#fccaa5',
    };
  });

  return (
    <GestureHandlerRootView style={styles.container}>
      <Text style={styles.header}>Your Cart</Text>
      <View
        style={{
          height: 50,
          width: '100%',
          alignItems: 'center',
          marginBottom: 10,
          backgroundColor: 'white',
          borderRadius: 20,
        }}
      >
        <View
          style={{
            height: 40,
            width: '49%',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            paddingTop: 5,
          }}
        >
          {cartItems.length > 0 ? (
            <FastImage
              style={{ height: 70, width: 60, marginLeft: 5 }}
              source={require('./Images/dummy3.gif')}
            />
          ) : null}
          <Text style={{ fontSize: 18, fontFamily: Fonts2.BOLD }}>
            {cartItems.length === 0 ? '----' : '20-25 Minutes'}
          </Text>
        </View>
      </View>

      {cartItems.length === 0 ? (
        <Text style={styles.emptyCart}>Your cart is empty</Text>
      ) : (
        <FlatList
          data={cartItems}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.box}>
              <View style={styles.box_image_container}>
                <Image style={{ height: 80, width: 110 }} source={item.image} />
              </View>
              <View style={styles.itemInfo}>
                <Text style={styles.box_Text}>{item.name}</Text>
                <Image style={styles.box_ratting} source={item.rating} />
                <Text style={styles.box_price}>{item.prices}</Text>
                <View
                  style={{
                    justifyContent: 'space-between',
                    position: 'absolute',
                    height: 105,
                    width: 45,
                    backgroundColor: 'red',
                    borderRadius: 15,
                    alignSelf: 'flex-end',
                    top: -12,
                    flexDirection: 'column',
                  }}
                >
                  <TouchableOpacity onPress={() => removeFromCart(item.id)}>
                    <View
                      style={{
                        height: 40,
                        width: 45,
                        borderRadius: 15,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 23,
                          color: 'white',
                          bottom: 3.5,
                          fontWeight: '700',
                        }}
                      >
                        -
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <Text
                    style={{
                      fontSize: 18,
                      color: 'white',
                      alignSelf: 'center',
                      bottom: 2,
                      fontWeight: '700',
                    }}
                  >
                    {item.Quantiy}
                  </Text>
                  <TouchableOpacity onPress={() => addToCart(item)}>
                    <View
                      style={{
                        height: 40,
                        width: 45,
                        borderRadius: 15,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 22,
                          color: 'white',
                          bottom: 1.8,
                          fontWeight: '700',
                        }}
                      >
                        +
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        />
      )}
      {cartItems.length > 0 && (
        <GestureDetector gesture={panGesture}>
          <Animated.View style={[animatedStylee, styles.total]}>
            <Animated.Image
              style={[
                animateddStylee,
                {
                  height: 32,
                  width: 32,
                  position: 'absolute',
                  alignSelf: 'center',
                  marginTop: 15,
                },
              ]}
              source={require('./Images/icons8-chevron-down-100.png')}
            />
            <View
              style={{
                width: '100%',
                height: 30,
                marginTop: 30,
                flexDirection: 'row',
              }}
            >
              <Text
                style={{ fontFamily: Fonts2.SEMI_BOLD, fontSize: 17, flex: 1 }}
              >
                Subtotal:
              </Text>
              <Text style={{ fontFamily: Fonts2.SEMI_BOLD, fontSize: 17 }}>
                ₹{subTotal}/-
              </Text>
            </View>
            <View style={{ width: '100%', height: 30, flexDirection: 'row' }}>
              <Text
                style={{ fontFamily: Fonts2.SEMI_BOLD, fontSize: 17, flex: 1 }}
              >
                Taxes:
              </Text>
              <Text style={{ fontFamily: Fonts2.SEMI_BOLD, fontSize: 17 }}>
                ₹{Taxes}/-
              </Text>
            </View>
            <View style={{ width: '100%', height: 30, flexDirection: 'row' }}>
              <Text
                style={{ fontFamily: Fonts2.SEMI_BOLD, fontSize: 17, flex: 1 }}
              >
                Delivary charges:
              </Text>
              <Text style={{ fontFamily: Fonts2.SEMI_BOLD, fontSize: 17 }}>
                ₹{Delivary}/-
              </Text>
            </View>
            {offer_price > 0 ? (
              <View style={{ width: '100%', height: 30, flexDirection: 'row' }}>
                <Text
                  style={{
                    fontFamily: Fonts2.SEMI_BOLD,
                    fontSize: 17,
                    flex: 1,
                  }}
                >
                  Offers:
                </Text>
                <Text
                  style={{
                    fontFamily: Fonts2.SEMI_BOLD,
                    fontSize: 17,
                    color: 'green',
                  }}
                >
                  ₹-{offer_price}
                </Text>
              </View>
            ) : null}
            <View
              style={{ borderWidth: 0.2, width: '100%', marginTop: 15 }}
            ></View>
            <View
              style={{
                width: '100%',
                height: 30,
                flexDirection: 'row',
                marginTop: 15,
              }}
            >
              <Text style={{ fontFamily: Fonts2.BOLD, fontSize: 20, flex: 1 }}>
                Total
              </Text>
              <Text
                style={{
                  fontFamily: Fonts2.SEMI_BOLD,
                  fontSize: 20,
                  color: 'green',
                }}
              >
                ₹{Total}/-
              </Text>
            </View>
            <Text
              style={{ fontSize: 19, fontFamily: Fonts.BOLD, marginTop: 25 }}
            >
              Offers & Benefits
            </Text>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(true), console.log(modalVisible);
              }}
            >
              {console.log(offer_price)}
              <View style={styles.copen}>
                <Text style={{ fontSize: 18, fontFamily: Fonts2.SEMI_BOLD }}>
                  Apply Coupons
                </Text>
                {offer_price == 0 ? (
                  <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                    {'>'}
                  </Text>
                ) : (
                  <Image
                    source={require('./Images/icons8-verified-100.png')}
                    style={{ height: 30, width: 30 }}
                  />
                )}
              </View>
            </TouchableOpacity>
            {isLoading ? (
              <Animated.View
                style={[
                  {
                    height: 60,
                    width: '100%',
                    // backgroundColor: '#006bff',
                    borderRadius: 20,
                    marginTop: 15,
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
                onPress={() => {
                  navigate2();
                }}
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed ? '#fccaa5' : '#FF6B00',
                  },
                  styles.button,
                ]}
              >
                <Text style={styles.buttonText}>Place your order</Text>
              </Pressable>
            )}
          </Animated.View>
        </GestureDetector>
      )}
      <Modall modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </GestureHandlerRootView>
  );
};

export default carScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 17,
    paddingTop: 20,
    backgroundColor: '#f9f3f0',
  },
  header: {
    fontFamily: Fonts.BOLD,
    fontSize: 25,
    alignSelf: 'center',
    marginBottom: 15,
  },
  button: {
    height: verticalScale(48),
    width: '100%',
    // backgroundColor: '#006bff',
    borderRadius: 20,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  emptyCart: {
    fontFamily: Fonts.REGULAR,
    fontSize: 18,
    alignSelf: 'center',
    marginTop: 50,
  },
  total: {
    width: '110%',
    backgroundColor: 'white',
    bottom: -215,
    flex: 1,
    borderRadius: 27,
    paddingTop: 35,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 35,
    borderTopWidth: 0.2,
    borderRightWidth: 0.2,
    borderLeftWidth: 0.2,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  box: {
    height: 125,
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 10,
    borderWidth: 0.6,
    borderColor: 'rgba(0, 0, 0,0.17)',
  },
  box_image_container: {
    height: 100,
    width: 110,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemInfo: {
    flex: 1,
    marginLeft: 15,
  },
  box_Text: {
    fontFamily: Fonts.BOLD,
    fontSize: 18,
    marginBottom: 2,
  },
  box_ratting: {
    height: 15,
    width: 75,
    resizeMode: 'stretch',
  },
  box_price: {
    fontFamily: Fonts.MEDUIM,
    fontSize: 18,
    color: 'black',
    fontWeight: '700',
    marginTop: 5,
  },
  buttonText: {
    fontSize: 20,
    fontFamily: Fonts2.BOLD,
    color: '#fff',
  },
  box_cart: {
    height: 37,
    width: 90,
    backgroundColor: 'red',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 5,
  },

  totalText: {
    fontSize: 20,
    fontFamily: Fonts.BOLD,

    color: 'white',
  },
  checkoutButton: {
    backgroundColor: '#FF6B00',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  checkoutText: {
    fontSize: 18,
    fontFamily: Fonts.BOLD,
    color: 'white',
  },
  copen: {
    height: 55,
    width: '100%',
    marginTop: 10,
    marginBottom: 16,
    borderRadius: 15,
    alignItems: 'center',
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'black',
  },
});
