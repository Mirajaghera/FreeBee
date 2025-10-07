import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { createStaticNavigation, NavigationContainer, useNavigation } from '@react-navigation/native';
import Fonts from '../Fonts';
import { androidCameraPermission } from '../permissions';
import ImagePicker from 'react-native-image-crop-picker';


const accountScreen = () => {
    const [changedImage, SetchangedImage] = useState('');

    const [UploadedStatus, setUploadedStatus] = useState(false);

    const onSelectImage = async () => {
        const permissionStatus = await androidCameraPermission()
        if (permissionStatus || Platform.OS === 'android') {
            Alert.alert(
                'Upload Picture',
                'Choose Option',
                [
                    { text: 'Camera', onPress: onCamera },
                    { text: 'Gallery', onPress: onGallery },
                    { text: 'Cancel', onPress: () => { } }
                ]
            )
        }

    }

    const onCamera = () => {
        ImagePicker.openCamera({
            width: 150,
            height: 180,
            cropping: true,
            freeStyleCropEnabled: true,
        }).then(image => {
            console.log(image);
            SetchangedImage(image.path);
            setUploadedStatus(true);
        });
    }

    const onGallery = () => {
        ImagePicker.openPicker({
            width: 150,
            height: 180,
            cropping: true,
            freeStyleCropEnabled: true,
        }).then(image => {

            console.log(image);
            SetchangedImage(image.path);
            setUploadedStatus(true);
        });
    }
    const navigation = useNavigation();
    function navigate() {
        navigation.replace("Auth", { screen: 'Login' })
        return (null)
    }

    return (
        <ScrollView style={{ flex: 1, }} showsVerticalScrollIndicator={false}>
            <View style={{ flex: 1, backgroundColor: '#f9f3f0' }}>
                <View style={styles.profile}>
                    {
                        UploadedStatus === false ? (
                            <Image style={{ height: 180, width: 140, alignSelf: 'center', }} source={require('./Images/pngtree-man-avatar-image-for-profile-png-image_13001877.png')} />) :
                            (<Image style={{ height: 150, width: 150, alignSelf: 'center', }} source={{ uri: changedImage }} />)
                    }
                </View>
                <Text style={{ fontFamily: Fonts.BOLD, fontSize: 25, alignSelf: 'center', marginTop: 50 }}>Miraj Aghera</Text>
                <Text style={{ fontFamily: Fonts.REGULAR, fontSize: 15, alignSelf: 'center', bottom: 0.2 }}>mirajaghera@gmail.com</Text>
                <TouchableOpacity onPress={onSelectImage} style={styles.Edit_profile}>
                    <Image style={{ height: 23, width: 23, }} source={require('./Images/icons8-edit-10.png')} />
                </TouchableOpacity>
                <View style={styles.box}>
                    <Text style={{ fontSize: 19, fontFamily: Fonts.BOLD, }}>Account</Text>
                    <View style={{ flexDirection: 'colorm' }}>
                        <View style={styles.inside_of_inside_box}>
                            <Text style={{ fontFamily: Fonts.SEMI_BOLD, fontSize: 18, flex: 1, marginLeft: 63 }}>My Store</Text>
                            <Text style={{ fontFamily: Fonts.MEDUIM, fontSize: 18, }}>{">"}</Text>
                            <View style={{ height: 40, width: 40, position: 'absolute', marginBottom: 4, backgroundColor: '#FFE8DF', borderRadius: 5, alignItems: 'center', justifyContent: 'center', marginLeft: 8 }}>
                                <Image style={{ height: 26, width: 26, }} source={require('./Images/icons8-store-10.png')} />
                            </View>
                        </View>
                        <View style={styles.inside_of_inside_box}>
                            <Text style={{ fontFamily: Fonts.SEMI_BOLD, fontSize: 18, flex: 1, marginLeft: 63 }}>Delivary Addressess</Text>
                            <Text style={{ fontFamily: Fonts.MEDUIM, fontSize: 18, }}>{">"}</Text>
                            <View style={{ height: 40, width: 40, position: 'absolute', marginBottom: 4, backgroundColor: '#FFE8DF', borderRadius: 5, alignItems: 'center', justifyContent: 'center', marginLeft: 8 }}>
                                <Image style={{ height: 26, width: 26, }} source={require('./Images/icons8-home-address-10.png')} />
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.box}>
                    <Text style={{ fontSize: 19, fontFamily: Fonts.BOLD, }}>Payments</Text>
                    <View style={{ flexDirection: 'colorm' }}>
                        <View style={styles.inside_of_inside_box}>
                            <Text style={{ fontFamily: Fonts.SEMI_BOLD, fontSize: 18, flex: 1, marginLeft: 63 }}>Add a payment method</Text>
                            <Text style={{ fontFamily: Fonts.MEDUIM, fontSize: 18, }}>{">"}</Text>
                            <View style={{ height: 40, width: 40, position: 'absolute', marginBottom: 4, backgroundColor: '#FFE8DF', borderRadius: 5, alignItems: 'center', justifyContent: 'center', marginLeft: 8 }}>
                                <Image style={{ height: 26, width: 26, }} source={require('./Images/icons8-bank-cards-100.png')} />
                            </View>
                        </View>
                        <View style={styles.inside_of_inside_box}>
                            <Text style={{ fontFamily: Fonts.SEMI_BOLD, fontSize: 18, flex: 1, marginLeft: 63 }}>Gifts cards</Text>
                            <Text style={{ fontFamily: Fonts.MEDUIM, fontSize: 18, }}>{">"}</Text>
                            <View style={{ height: 40, width: 40, position: 'absolute', marginBottom: 4, backgroundColor: '#FFE8DF', borderRadius: 5, alignItems: 'center', justifyContent: 'center', marginLeft: 8 }}>
                                <Image style={{ height: 25, width: 25, }} source={require('./Images/icons8-christmas-gift-100.png')} />
                            </View>
                        </View>
                    </View>
                </View>

                <View style={[styles.box, { height: 240 }]}>
                    <Text style={{ fontSize: 19, fontFamily: Fonts.BOLD, }}>Support</Text>
                    <View style={{ flexDirection: 'coloum' }}>
                        <View style={styles.inside_of_inside_box}>
                            <Text style={{ fontFamily: Fonts.SEMI_BOLD, fontSize: 18, flex: 1, marginLeft: 63 }}>Change password</Text>
                            <Text style={{ fontFamily: Fonts.MEDUIM, fontSize: 18, }}>{">"}</Text>
                            <View style={{ height: 40, width: 40, position: 'absolute', marginBottom: 4, backgroundColor: '#FFE8DF', borderRadius: 5, alignItems: 'center', justifyContent: 'center', marginLeft: 8 }}>
                                <Image style={{ height: 26, width: 26, }} source={require('./Images/icons8-password-100.png')} />
                            </View>
                        </View>
                        <View style={styles.inside_of_inside_box}>
                            <Text style={{ fontFamily: Fonts.SEMI_BOLD, fontSize: 18, flex: 1, marginLeft: 63 }}>Info</Text>
                            <Text style={{ fontFamily: Fonts.MEDUIM, fontSize: 18, }}>{">"}</Text>
                            <View style={{ height: 40, width: 40, position: 'absolute', marginBottom: 4, backgroundColor: '#FFE8DF', borderRadius: 5, alignItems: 'center', justifyContent: 'center', marginLeft: 8 }}>
                                <Image style={{ height: 26, width: 26, }} source={require('./Images/icons8-info-100.png')} />
                            </View>
                        </View>
                        <View style={styles.inside_of_inside_box}>
                            <Text style={{ fontFamily: Fonts.SEMI_BOLD, fontSize: 18, flex: 1, marginLeft: 63 }}>Help</Text>
                            <Text style={{ fontFamily: Fonts.MEDUIM, fontSize: 18, }}>{">"}</Text>
                            <View style={{ height: 40, width: 40, position: 'absolute', marginBottom: 4, backgroundColor: '#FFE8DF', borderRadius: 5, alignItems: 'center', justifyContent: 'center', marginLeft: 8 }}>
                                <Image style={{ height: 26, width: 26, }} source={require('./Images/icons8-help-100.png')} />
                            </View>
                        </View>
                    </View>
                </View>
                {/* <View style={[styles.box, { height: 290 }]}>
                    <Text style={{ fontSize: 19, fontFamily: Fonts.BOLD }}>Previous Orders</Text>
                    <View style={{ marginTop: 10 }}>
                        <TouchableOpacity style={styles.orderItem}>
                            <Image style={styles.orderImage} source={require('./Images/1000_F_650728790_9aln0Bq5zPUSDhsQaz7N8QaKBIuFf8NS-removebg-preview.png')} />
                            <View style={styles.orderDetails}>
                                <Text style={styles.orderText}>Order #12345</Text>
                                <Text style={styles.orderSubText}>Delivered on Feb 20, 2025</Text>
                            </View>
                            <Text style={styles.orderStatusPending}>Pending</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.orderItem}>
                            <Image style={styles.orderImage} source={require('./Images/pngtree-best-food-samosa-white-background-png-image_18710971-removebg-preview.png')} />
                            <View style={styles.orderDetails}>
                                <Text style={styles.orderText}>Order #12346</Text>
                                <Text style={styles.orderSubText}>Delivered on Feb 15, 2025</Text>
                            </View>
                            <Text style={styles.orderStatus}>Completed</Text>
                        </TouchableOpacity>
                        <Text style={{ alignSelf: 'center', color: '#FF6B00', fontSize: 18, fontFamily: Fonts.BOLD }}>See All</Text>
                    </View>
                </View> */}



                <TouchableOpacity onPress={() => { navigate() }}>
                    <View style={[styles.box, { height: 60, backgroundColor: 'red', marginBottom: 20 }]}>
                        <Text style={{ fontFamily: Fonts.MEDUIM, fontSize: 18, flex: 1, color: 'white' }}>Logout</Text>

                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView >
    )
}

export default accountScreen

const styles = StyleSheet.create({
    profile: {
        height: 150,
        width: 150,
        borderRadius: 20,
        alignSelf: 'center',
        bottom: -37,
        borderWidth: 2,
        overflow: 'hidden'
    },
    Edit_profile: {
        height: 45,
        width: 45,
        borderRadius: 50,
        backgroundColor: 'black',
        position: 'absolute',
        alignSelf: 'center',
        marginTop: 145,
        right: 140,
        borderWidth: 2,
        borderColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    box: {
        height: 180,
        width: "90%",
        backgroundColor: 'white',
        alignSelf: 'center',
        marginTop: 18,
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingTop: 15,


    },
    inside_of_inside_box: {
        height: 60,
        width: '100%',
        // backgroundColor: 'red',
        flexDirection: 'row',
        alignItems: 'center',
    }, orderItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 12,
        borderRadius: 10,
        marginVertical: 6,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3, // For Android shadow
    },
    orderImage: {
        height: 50,
        width: 50,
        borderRadius: 10,
        marginRight: 10,
    },
    orderDetails: {
        flex: 1,
    },
    orderText: {
        fontSize: 16,
        fontFamily: Fonts.BOLD,
    },
    orderSubText: {
        fontSize: 14,
        fontFamily: Fonts.REGULAR,
        color: 'gray',
    },
    orderStatus: {
        fontSize: 14,
        fontFamily: Fonts.MEDUIM,
        color: 'green',
    },
    orderStatusPending: {
        fontSize: 14,
        fontFamily: Fonts.MEDUIM,
        color: 'orange',
    },

})