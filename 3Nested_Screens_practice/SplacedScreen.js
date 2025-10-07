import { StyleSheet, Text, View, Button, StackActions, NavigationActions, ImageBackground, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { createStaticNavigation, NavigationContainer, useNavigation } from '@react-navigation/native';
import { LogBox } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

function splacedScreen() {
  LogBox.ignoreAllLogs();

  const navigation = useNavigation();
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      {
        navigation.replace('Auth', { screen: 'Onbording' })
      }
    }, 1550);
    timeoutId
  }, []);
  return (
    
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FF6B00' }}>
      <ImageBackground style={{ height: verticalScale(700), width: scale(500), position: 'absolute', opacity: 0.32 }} source={require('./Images/Background.png')} />
      <Text style={{ fontFamily: 'Gugi-Regular', fontSize: scale(80), color: 'white' }}>FreeBee</Text>
    </View>


  );
}

export default splacedScreen

const styles = StyleSheet.create({})