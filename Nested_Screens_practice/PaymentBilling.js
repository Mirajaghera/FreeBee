import { StyleSheet, Text, View, Image, TouchableOpacity, Pressable } from 'react-native'
import React, { useState, useContext, useEffect, useCallback } from 'react'
import Fonts2 from '../Fonts2'
import { CartContext } from './CartContext';
import { useNavigation } from '@react-navigation/native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming, runOnJS, Easing, interpolate, interpolateColor, withSpring, } from 'react-native-reanimated'
import { GestureDetector, GestureHandlerRootView, Gesture } from 'react-native-gesture-handler';
import { useFocusEffect } from '@react-navigation/native';
import FastImage from 'react-native-fast-image';


const PaymentBilling = () => {
    const animationn = useSharedValue(1)
    const [optacity, setOpacity] = useState()
    const [isLoading, setIsLoading] = useState(false);
    const animation = useSharedValue(0)
    const translateX = useSharedValue(0);

    const navigation = useNavigation();
    const [item, setitem] = useState(1)
    const [paytick, setPaytick] = useState(1)
    const { cartItems } = useContext(CartContext);
    const [visible, setvisible] = useState('false')
    let subTotal = cartItems.reduce((total, item) => total + (parseInt(item.prices.replace('₹', '')) * item.Quantiy), 0)
    let Taxes = Math.round(subTotal * 0.18)
    let Delivary = 25
    let Total = (Taxes + Delivary + subTotal)
    const [clicked, setClicked] = useState(false)

    function navigate() {
        navigation.goBack()
        return (null)
    }
    useFocusEffect(
        useCallback(() => {
            return () => {
                translateX.value = 0; // Reset when screen is unfocused
            };
        }, [])
    );
    const panGesture = Gesture.Pan()
        .onUpdate((event) => {
            const maxTranslation = 270; // Adjust based on parent width
            translateX.value = Math.min(Math.max(0, event.translationX), maxTranslation);
            runOnJS(scaleValue)(translateX.value)
        })
        .onEnd(() => {
            if (translateX.value > 250) { // Threshold to navigate
                runOnJS(navigation.replace)("orderd"); // Call navigation properly
            } else {
                translateX.value = 0
                runOnJS(scaleValue)(translateX.value)
            }

        }

        );
    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: translateX.value }],
    }));
    const animatedStylee = useAnimatedStyle(() => {
        const height = interpolate(animationn.value, [1, 0], [70, 200])
        return {
            height: height,
        }
    })
    useEffect(() => {
        if (item == 2) {
            animationn.value = withTiming(0, { duration: 350, })
        } else {
            animationn.value = withTiming(1, { duration: 100, })
        }
    }, [item])

    function scaleValue(input) {
        let xvalue = (input - 0) * (0 - 1) / (270 - 0) + 1;
        setOpacity(xvalue)
    }
    return (
        <GestureHandlerRootView>

            <View style={{ flex: 1, paddingHorizontal: 17, paddingTop: 20, backgroundColor: '#f9f3f0' }}>

                <TouchableOpacity style={styles.baclbutton} onPress={navigate}>
                    <Image
                        style={{ height: 20, width: 20 }}
                        source={require('./Images/icons8-back-100.png')}
                    />
                </TouchableOpacity>
                <Text style={styles.payment}>Payment</Text>
                <TouchableOpacity onPress={() => setitem(1)}>
                    <View style={[styles.payment_options, { backgroundColor: item == 1 ? "#02B334" : "white" }]}>
                        <Image style={{ height: 39, width: 45, left: 10, resizeMode: "stretch" }} source={require("./Images/money_14341827.png")} />
                        <Text style={[styles.payment_text, { color: item == 1 ? "white" : "black" }]}>Pay on delivery</Text>
                    </View>
                </TouchableOpacity>
                {
                    item !== 2 ? (
                        <TouchableOpacity onPress={() => { setitem(2) }}>
                            <Animated.View style={[styles.payment_options, animatedStylee, { alignItems: "flex-start", paddingTop: 16 }]}>
                                <Image style={{ height: 40, width: 45, left: 10 }} source={require("./Images/icons8-bhim-100.png")} />
                                <Text style={[styles.payment_text, { flex: 0.88, }]}>UPI app</Text>
                                <Text style={[styles.payment_text,]}>➤</Text>
                            </Animated.View>
                        </TouchableOpacity>
                    ) : (
                        <Animated.View style={[styles.payment_options, animatedStylee, { alignItems: "flex-start", paddingTop: 16 }]}>
                            <Image style={{ height: 40, width: 45, left: 10 }} source={require("./Images/icons8-bhim-100.png")} />
                            <Text style={[styles.payment_text, { flex: 0.88, }]}>UPI app</Text>
                            <Text style={[styles.payment_text, { transform: [{ rotate: "90deg" }] }]}>➤</Text>
                            <View style={{ position: 'absolute', top: 80, padding: 5, flexDirection: 'row', gap: 30, marginLeft: 30 }}>
                                <View style={{ height: 80, width: 82, alignItems: 'center', justifyContent: 'center', gap: 10, }}>
                                    <TouchableOpacity onPress={() => { setPaytick(1) }}>
                                        <View style={{ padding: 8, borderRadius: 17, alignItems: 'center', justifyContent: 'center', borderWidth: 3, borderColor: paytick == 1 ? '#02B334' : "white" }}>
                                            <Image source={require("./Images/icons8-google-pay-100.png")} style={{ height: 35, width: 35, borderRadius: 50, }} />
                                        </View>
                                    </TouchableOpacity>
                                    <Text style={{ fontFamily: Fonts2.MEDUIM }}>Google pay</Text>
                                </View>

                                <View style={{ height: 80, width: 82, alignItems: 'center', justifyContent: 'center', gap: 10 }}>
                                    <TouchableOpacity onPress={() => { setPaytick(2) }}>
                                        <View style={{ padding: 8, borderRadius: 17, alignItems: 'center', justifyContent: 'center', borderWidth: 3, borderColor: paytick == 2 ? '#02B334' : "white" }}>
                                            <Image source={require("./Images/cropped_image.png")} style={{ height: 35, width: 35, borderRadius: 50, }} />
                                        </View>
                                    </TouchableOpacity>
                                    <Text style={{ fontFamily: Fonts2.MEDUIM, top: 2 }}>Phonepay</Text>
                                </View>

                                <View style={{ height: 80, width: 82, alignItems: 'center', justifyContent: 'center', gap: 10 }}>
                                    <TouchableOpacity onPress={() => { setPaytick(3) }}>
                                        <View style={{ padding: 8, borderRadius: 17, alignItems: 'center', justifyContent: 'center', borderWidth: 3, borderColor: paytick == 3 ? '#02B334' : "white" }}>
                                            <Image source={require("./Images/icons8-paytm-100.png")} style={{ height: 35, width: 35, borderRadius: 50, }} />
                                        </View>
                                    </TouchableOpacity>
                                    <Text style={{ fontFamily: Fonts2.MEDUIM }}>paytm</Text>
                                </View>


                            </View>
                        </Animated.View>


                    )}

                <TouchableOpacity onPress={() => setitem(3)}>
                    <View style={[styles.payment_options, { backgroundColor: item == 3 ? "#02B334" : "white", }]}>
                        <Image style={{ height: 35, width: 45, left: 10, resizeMode: "stretch" }} source={require("./Images/credit-card(1).png")} />
                        <Text style={[styles.payment_text, { flex: 0.88, color: item == 3 ? "white" : "black" }]}>Debit/Credit card</Text>
                        <Text style={[styles.payment_text, { color: item == 3 ? "white" : "black" }]}>➤</Text>
                    </View>
                </TouchableOpacity>
                <View style={[styles.totalContainer]}>

                    <View style={{
                        height: 70,
                        width: "99%", // Keep it within safe bounds
                        backgroundColor: '#ffede6',
                        borderRadius: 17,
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingHorizontal: 20,
                        justifyContent: 'space-between'
                    }}>
                        <GestureDetector gesture={panGesture}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontSize: 20, fontFamily: Fonts2.SEMI_BOLD, alignSelf: 'center', left: 115, position: 'absolute', opacity: optacity }}>Slide to Pay</Text>
                                <Animated.View style={[animatedStyle, { paddingHorizontal: 16, paddingVertical: 10, backgroundColor: '#FF6B00', borderRadius: 10 }]}>
                                    <FastImage style={{ height: 35, width: 30, marginLeft: 5, transform: [{ rotate: "270deg" }], }} source={require("./Images/vRWxkaIIJF-ezgif.com-crop.gif")} />

                                </Animated.View>

                            </View>
                        </GestureDetector>
                    </View>
                    <View style={{ borderWidth: 1, alignSelf: "center", position: 'absolute', top: 15, width: 80 }} />
                </View>
            </View>

        </GestureHandlerRootView >

    )
}
{/* <Pressable onPress={() => { navigate2() }} style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}>
                        <Text style={styles.buttonText}>Place your order</Text>
                    </Pressable> */}
export default PaymentBilling

const styles = StyleSheet.create({
    payment: {
        fontFamily: Fonts2.BOLD,
        fontSize: 22,

        marginBottom: 35,
        alignSelf: 'center'
    },
    payment_options: {
        height: 70,
        width: "100%",
        marginTop: 15,
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 14,
        paddingRight: 10,
        borderWidth: 0.2,
        backgroundColor: 'white'
    },
    totalContainer: {
        position: 'absolute',
        bottom: -0, // Adjust this based on your tab bar height
        left: 0,
        right: 0,
        height: 130,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 17, // Keep consistent padding
        borderRadius: 25,
        paddingTop: 20

    },
    payment_text: {
        fontFamily: Fonts2.MEDUIM,
        fontSize: 20,
        left: 28
    },
    total: {
        height: 320,
        width: '110%',
        backgroundColor: 'white',
        bottom: -215,
        flex: 1,
        borderRadius: 27,
        paddingTop: 25,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        paddingHorizontal: 35

    },
    button: {
        height: 60,
        width: '100%',
        // backgroundColor: '#006bff',
        borderRadius: 20,
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    }, buttonPressed: {
        backgroundColor: '#e65a00',
    }, buttonText: {
        fontSize: 20,
        fontFamily: Fonts2.BOLD,
        color: '#fff',
    }, baclbutton: {
        position: 'absolute',
        height: 50,
        width: 50,
        backgroundColor: 'white',
        marginTop: 10,
        marginLeft: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'

    },
})