import React, { useState, useContext, useEffect } from 'react';
import { View, StyleSheet, Text, Image, Pressable, Modal, Alert, TextInput, TouchableOpacity } from 'react-native';
import Fonts2 from '../Fonts2';
import { CartContext } from './CartContext';
import Icon from 'react-native-vector-icons/FontAwesome';
import FastImage from 'react-native-fast-image';
const Modall = ({ modalVisible, setModalVisible, }) => {
  const [userName, setUserName] = useState('')
  const [another_modal, setAnother_modal] = useState(false)
  const { SetOffer_price, offer_price } = useContext(CartContext);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      {
        setAnother_modal(false)
      }
    }, 4000);
  }, [another_modal])
  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        <View style={styles.container_modal}>
          <View style={styles.cupons_inside_box}>

            <View style={styles.background} />
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Icon name="close" size={25} color="white" style={{ position: "absolute", alignSelf: 'flex-end', right: 20, top: 7 }} />
            </TouchableOpacity>

            <Text style={styles.Header_cupons}>Apply Cupons</Text>

            <View style={styles.search}>
              <TextInput
                style={{ fontSize: 20, flex: 0.95 }}
                onChangeText={text => {
                  setUserName(text)

                }}
                value={userName}
                placeholder="Enter Coupon code"
                returnKeyType="done"
                placeholderTextColor="#9a9a9a"

              />

              <Text style={{ fontSize: 17, fontFamily: Fonts2.BOLD, color: 'red' }}>Apply</Text>
            </View>
            <Text style={styles.cupons_Offer_header}>Best Cupons</Text>
            <View style={styles.cupons_design_box}>

              <View style={styles.left_side_inside_cupon_box}>
                <Text style={{
                  transform: [{ rotate: "270deg" }], fontFamily: Fonts2.BOLD, fontSize: 18, color: 'white'
                }}>OFF </Text>
                <Text style={{
                  transform: [{ rotate: "270deg" }], fontFamily: Fonts2.BOLD, fontSize: 18, color: 'white'
                }}>30% </Text>

              </View>
              <View style={{ height: 20, width: 20, backgroundColor: '#f2f1f6', position: 'absolute', borderRadius: 50, marginTop: 15, left: -12 }} />
              <View style={{ height: 20, width: 20, backgroundColor: '#f2f1f6', position: 'absolute', borderRadius: 50, marginTop: 50, left: -12 }} />
              <View style={{ height: 20, width: 20, backgroundColor: '#f2f1f6', position: 'absolute', borderRadius: 50, marginTop: 85, left: -12 }} />

              <View style={{ height: 140, width: "82%", marginLeft: 62, position: 'absolute', paddingTop: 7.5, paddingLeft: 8.8, paddingRight: 9 }}>
                <View style={{ flexDirection: 'row', alignItems: "center" }}>
                  <Text style={{ fontSize: 22, fontFamily: Fonts2.BOLD, flex: 0.92 }}>
                    Jumbo
                  </Text>
                  {
                    offer_price > 0 ? (
                      <TouchableOpacity onPress={() => SetOffer_price(0)}>
                        <Text style={{ fontSize: 15, fontFamily: Fonts2.SEMI_BOLD, color: 'red' }}>
                          Remove
                        </Text>
                      </TouchableOpacity>) : (<TouchableOpacity onPress={() => { SetOffer_price(100), setAnother_modal(true) }}>
                        <Text style={{ fontSize: 15, fontFamily: Fonts2.SEMI_BOLD, color: 'red' }}>
                          Apply
                        </Text>
                      </TouchableOpacity>)
                  }
                </View>
                <Text style={{ fontSize: 14, fontFamily: Fonts2.SEMI_BOLD, color: '#3d9579' }}>Save ₹100 on this order</Text>
                <Text style={{ marginTop: 4 }}>It is a long established fact that a reader will be distracted  </Text>
                <Text style={{ fontSize: 17, marginTop: 5 }}>More▼</Text>
              </View>
            </View>
          </View>
        </View>
      </Modal >
      <Modal animationType="fade"
        transparent={true}
        visible={another_modal}
        onRequestClose={() => {
          setAnother_modal(false);
        }} >

        <View style={styles.anomther_container}>
          <View style={styles.anomther_container_mainbox}>
            <Text style={{ fontSize: 13, fontFamily: Fonts2.SEMI_BOLD, alignSelf: 'center' }}>'Jumbo' applied</Text>
            <FastImage source={require('./Images/icons8-offer.gif')} style={{ height: 50, width: 50, alignSelf: 'center' }} />
            <FastImage source={require("./Images/UTnGiI38vG.gif")} style={{ height: 280, width: 200, position: 'absolute' }} />
            <Text style={{ fontSize: 45, fontFamily: Fonts2.BLACK }}>₹100</Text>
            <Text style={{ fontSize: 15, fontFamily: Fonts2.MEDUIM, bottom: 10, marginBottom: 10 }}>saving with this coupons</Text>
            <Text style={{ fontSize: 15, fontFamily: Fonts2.REGULAR, textAlign: "center" }}> Keep looking out for more exiciting offers and save more with each order</Text>
            <Text style={{ fontSize: 15, fontFamily: Fonts2.SEMI_BOLD, color: '#FF6B00', bottom: -12 }}>YAY!</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default Modall

const styles = StyleSheet.create({
  container_modal: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  },
  button: {
    height: 50,
    width: 50,
    backgroundColor: 'red',
  },
  cupons_inside_box: {
    height: "89%",
    width: "93%",
    backgroundColor: '#f2f1f6',
    borderRadius: 25,
    overflow: 'hidden'
  },
  Header_cupons: {
    fontSize: 25,
    fontFamily: Fonts2.BOLD,
    alignSelf: 'center',
    marginTop: 20,
    color: 'white'
  },
  search: {
    height: 60,
    width: '90%',
    borderRadius: 15,
    backgroundColor: 'white',
    marginTop: 13,
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 10,
    marginLeft: 5
  },
  background: {
    height: 150,
    width: 385,
    backgroundColor: '#FF6B00',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: 'absolute'
  },
  cupons_design_box: {
    height: 140,
    width: "89%",
    alignSelf: 'center',
    backgroundColor: 'white',
    marginTop: 15,
    borderRadius: 20
  },
  cupons_Offer_header: {
    fontFamily: Fonts2.BOLD,
    fontSize: 18,
    marginTop: 40,
    marginLeft: 20
  },
  left_side_inside_cupon_box: {
    height: 140,
    width: 60,
    backgroundColor: '#FF6B00',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    gap: 15,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 5
  },
  anomther_container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(255,237,230,0.9)',
    justifyContent: "center"
  },
  anomther_container_mainbox: {
    paddingVertical: 17,
    height: 300,
    width: 300,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    paddingHorizontal: 10,
  }
})