import {
  StyleSheet,
  Text,
  View,
  Button,
  Pressable,
  Image,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, { useContext, useState, useRef, useEffect } from 'react';
import {
  createStaticNavigation,
  NavigationContainer,
  useNavigation,
} from '@react-navigation/native';
import { AuthContext } from './AuthContext';
import Fonts from '../Fonts';
import PagerView from 'react-native-pager-view';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const welcomeScreen = () => {
  const navigation = useNavigation();

  const Data = [
    {
      id: 1,
      link: require('./Images/hamburger-isolated-on-white-background-F2C2K4-removebg-preview.png'),
      name: 'Burgers',
    },
    {
      id: 2,
      link: require('./Images/pngtree-a-hot-fresh-cheesy-pizza-white-background-png-image_15702316-removebg-preview.png'),
      name: 'Pizza',
    },
    {
      id: 3,
      link: require('./Images/club-sandwich-on-white-background-ai-generated-free-photo-removebg-preview.png'),
      name: 'Sandwich',
    },
    {
      id: 4,
      link: require('./Images/delicious-chicken-biryani-with-leg-pieces-and-vegetable-slices-white-background-free-photo-removebg-preview.png'),
      name: 'Bireyani',
    },
    {
      id: 5,
      link: require('./Images/istockphoto-996505458-612x612-removebg-preview.png'),
      name: 'Shake',
    },
    {
      id: 6,
      link: require('./Images/dummy9.png'),
      name: 'Dosa',
    },
    {
      id: 7,
      link: require('./Images/images-removebg-preview.png'),
      name: 'Pasta',
    },
    {
      id: 8,
      link: require('./Images/dummy14.png'),
      name: 'Cake',
    },
    {
      id: 9,
      link: require('./Images/pngtree-best-food-samosa-white-background-png-image_18710971-removebg-preview.png'),
      name: 'Samosa',
    },
  ];

  const Data_2 = [
    {
      id: 1,
      image: require('./Images/istockphoto-1457979959-612x612.jpg'),
      name: 'Rajdhani Restaurant',
      rating: '4.2 Rating | 945K Reviews',
      minutes: '15-20 minuts',
    },
    {
      id: 2,
      image: require('./Images/indian-food-spicy-karhai-chicken-in-tomato-sauce-close-up-and-naan-on-the-table-horizontal-top-view-from-above-rustic-style-R9CEYW.jpg'),
      name: 'Big Bites',
      rating: '3.2 Rating | 45K Reviews',
      minutes: '19-20 minuts',
    },
    {
      id: 3,
      image: require('./Images/istockphoto-1442417585-612x612.jpg'),
      name: 'Pizza Hut',
      rating: '4.5 Rating | 950K Reviews',
      minutes: '20-25 minuts',
    },
    {
      id: 4,
      image: require('./Images/p08v90pv.jpg'),
      name: 'Dosa Hub',
      rating: '4.0 Rating | 145K Reviews',
      minutes: '15-20 minuts',
    },
  ];

  const Data_3 = [
    {
      id: 1,
      image: require('./Images/Instant-Pot-Mumbai-Pav-Bhaji-Recipe.jpg'),
      name: 'Bole To Mumbai',
      rating: '4.8 Rating | 445K Reviews',
      minutes: '15-20 minuts',
    },
    {
      id: 2,
      image: require('./Images/PROD_Banner_1663162846668.jpg'),
      name: 'Ganesha',
      rating: '3.2 Rating | 45K Reviews',
      minutes: '19-20 minuts',
    },
    {
      id: 3,
      image: require('./Images/images.jpg'),
      name: 'Pasta Hub',
      rating: '4.5 Rating | 950K Reviews',
      minutes: '20-25 minuts',
    },
  ];

  const Data_4 = [
    {
      id: 1,
      image: require('./Images/dummy12.jpg'),
      name: 'Kfc',
      rating: '4.8 Rating | 795K Reviews',
      minutes: '35-40 minuts',
    },
    {
      id: 2,
      image: require('./Images/macdolans.jpg'),
      name: 'mcDonald',
      rating: '4.2 Rating | 845K Reviews',
      minutes: '19-20 minuts',
    },
    {
      id: 3,
      image: require('./Images/Rolls.jpg'),
      name: 'Rolls For you',
      minutes: '20-25 minuts',
    },
  ];

  function restaurant() {
    navigation.navigate('Restaurant');
  }
  const Pageref = useRef(null);
  const pagerRef = useRef(null);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPage(prevPage => {
        const nextPage = (prevPage + 1) % 4; // Loop through pages (0 to 3)
        pagerRef.current?.setPage(nextPage);
        return nextPage;
      });
    }, 3500); // Auto-swipe every 500ms

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);
  const [userName, setUserName] = useState('');
  const [Ne, setNe] = useState();

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 17,
        paddingTop: 20,
        backgroundColor: '#f9f3f0',
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            style={{ height: 27, width: 27, marginBottom: 1 }}
            source={require('./Images/icons8-location-10.png')}
          />
          <Text
            style={{
              fontSize: 15,
              fontFamily: Fonts.MEDUIM,
              flex: 1,
              marginLeft: 6,
              marginTop: 3,
            }}
          >
            Atmiya Collage,Rajkot▼
          </Text>
          <Image
            style={{
              height: 25,
              width: 25,
              transform: [{ scaleX: -1 }],
              marginBottom: 5,
            }}
            source={require('./Images/left.png')}
          />
        </View>
        <View style={styles.search}>
          <TextInput
            style={{ fontSize: scale(14), flex: 0.98 }}
            onChangeText={text => {
              setUserName(text);
            }}
            value={userName}
            placeholder="Search for Restaurants"
            returnKeyType="done"
            placeholderTextColor="#9a9a9a"
          />
          <Image
            style={{
              height: verticalScale(24),
              width: scale(24),
              position: 'absolute',
              marginLeft: 10,
            }}
            source={require('./Images/icons8-search-1.png')}
          />
          <View
            style={{
              height: verticalScale(40),
              width: 50,
              borderRadius: 15,
              backgroundColor: '#ffede6',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Image
              style={{ height: verticalScale(24), width: scale(24) }}
              source={require('./Images/icons8-microphone-10.png')}
            />
          </View>
        </View>

        <PagerView
          style={styles.offerStyle}
          initialPage={0}
          ref={pagerRef}
          onPageSelected={e => setPage(e.nativeEvent.position)}
        >
          <View key="1">
            <Image
              style={{
                height: verticalScale(160),
                width: '99%',
                resizeMode: 'stretch',
                borderRadius: 20,
              }}
              source={require('./Images/food-coupons.jpg')}
            />
          </View>
          <View key="2">
            <Image
              style={{
                height: verticalScale(160),
                width: '99%',
                resizeMode: 'stretch',
                borderRadius: 20,
              }}
              source={require('./Images/eat-fit-coupons.jpg')}
            />
          </View>
          <View key="3">
            <Image
              style={{
                height: verticalScale(160),
                width: '99%',
                resizeMode: 'stretch',
                borderRadius: 20,
              }}
              source={require('./Images/the-good-bowl-coupon.jpg')}
            />
          </View>
          <View key="4">
            <Image
              style={{
                height: verticalScale(160),
                width: '99%',
                resizeMode: 'stretch',
                borderRadius: 20,
              }}
              source={require('./Images/maxresdefault.jpg')}
            />
          </View>
        </PagerView>

        <View
          style={{
            flexDirection: 'row',
            gap: 10,
            alignSelf: 'center',
            marginTop: moderateScale(14),
            alignItems: 'center',
          }}
        >
          {page == 0 ? (
            <View
              style={{
                height: 10,
                width: 10,
                borderRadius: 50,
                backgroundColor: '#FF6B00',
              }}
            />
          ) : (
            <View
              style={{
                height: 8,
                width: 8,
                borderRadius: 50,
                backgroundColor: '#e6e6e6',
              }}
            />
          )}
          {page == 1 ? (
            <View
              style={{
                height: 10,
                width: 10,
                borderRadius: 50,
                backgroundColor: '#FF6B00',
              }}
            />
          ) : (
            <View
              style={{
                height: 8,
                width: 8,
                borderRadius: 50,
                backgroundColor: '#e6e6e6',
              }}
            />
          )}
          {page == 2 ? (
            <View
              style={{
                height: 10,
                width: 10,
                borderRadius: 50,
                backgroundColor: '#FF6B00',
              }}
            />
          ) : (
            <View
              style={{
                height: 8,
                width: 8,
                borderRadius: 50,
                backgroundColor: '#e6e6e6',
              }}
            />
          )}
          {page == 3 ? (
            <View
              style={{
                height: 10,
                width: 10,
                borderRadius: 50,
                backgroundColor: '#FF6B00',
              }}
            />
          ) : (
            <View
              style={{
                height: 8,
                width: 8,
                borderRadius: 50,
                backgroundColor: '#e6e6e6',
              }}
            />
          )}
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text
            style={{
              marginTop: 10,
              fontFamily: Fonts.BOLD,
              fontSize: scale(18),
              flex: 1,
            }}
          >
            Whats for Today!
          </Text>
        </View>
        <FlatList
          data={Data}
          horizontal={true}
          renderItem={({ item }) => (
            <View
              style={{
                height: verticalScale(90),
                width: scale(85),
                justifyContent: 'center',
                paddingLeft: 5,
                marginTop: 5,
              }}
            >
              <View style={styles.options}>
                <Image
                  style={{
                    height: verticalScale(45),
                    width: scale(45),
                    resizeMode: 'cover',
                  }}
                  source={item.link}
                />
              </View>
              <Text
                style={{
                  fontFamily: Fonts.MEDUIM,
                  fontSize: scale(12),
                  marginTop: 5,
                  alignSelf: 'center',
                  paddingRight: 12,
                }}
              >
                {item.name}
              </Text>
            </View>
          )}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
        />
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text
            style={{
              marginTop: 10,
              fontFamily: Fonts.BOLD,
              fontSize: scale(18),
              flex: 1,
            }}
          >
            Top pickup of Yours
          </Text>
          <Text
            style={{
              fontFamily: Fonts.MEDUIM,
              fontSize: 15,
              marginTop: 10,
              color: '#FF6B00',
            }}
          >
            See all
          </Text>
        </View>

        <FlatList
          data={Data_2}
          horizontal={true}
          renderItem={({ item }) => (
            <View style={styles.box}>
              <Pressable
                onPress={() => {
                  restaurant();
                }}
                style={({ pressed }) => [
                  {
                    opacity: pressed ? 0.8 : 1,
                  },
                ]}
              >
                <View
                  style={{
                    height: verticalScale(100),
                    width: '100%',
                    backgroundColor: '#d1d1d1',
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                  }}
                >
                  <Image
                    style={{
                      height: verticalScale(105),
                      width: '100%',
                      resizeMode: 'cover',
                      borderTopLeftRadius: 15,
                      borderTopRightRadius: 15,
                    }}
                    source={item.image}
                  />
                </View>
                <Text
                  style={{
                    fontFamily: Fonts.BOLD,
                    fontSize: scale(17),
                    marginTop: 15,
                    marginLeft: 10,
                  }}
                >
                  {item.name}
                </Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image
                    style={{
                      height: verticalScale(15),
                      width: scale(17),
                      marginLeft: 10,
                      top: -3,
                    }}
                    source={require('./Images/icons8-star-100.png')}
                  />
                  <Text
                    style={{
                      fontFamily: Fonts.MEDUIM,
                      fontSize: scale(12),
                      marginLeft: 10,
                    }}
                  >
                    {item.rating}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 5,
                  }}
                >
                  <Image
                    style={{
                      height: verticalScale(15),
                      width: scale(17),
                      marginLeft: 10,
                      top: -3,
                    }}
                    source={require('./Images/icons8-clock-100.png')}
                  />
                  <Text
                    style={{
                      fontFamily: Fonts.MEDUIM,
                      fontSize: scale(12),
                      marginLeft: 10,
                    }}
                  >
                    {item.minutes}
                  </Text>
                </View>
              </Pressable>
            </View>
          )}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
        />

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text
            style={{
              marginTop: 19,
              fontFamily: Fonts.BOLD,
              fontSize: scale(18),
              flex: 1,
            }}
          >
            Top Rating
          </Text>
          <Text
            style={{
              fontFamily: Fonts.MEDUIM,
              fontSize: 15,
              marginTop: 10,
              color: '#FF6B00',
            }}
          >
            See all
          </Text>
        </View>

        <FlatList
          data={Data_3}
          horizontal={true}
          renderItem={({ item }) => (
            <View style={styles.box}>
              <View
                style={{
                  height: verticalScale(100),
                  width: '100%',
                  backgroundColor: '#d1d1d1',
                  borderTopLeftRadius: 15,
                  borderTopRightRadius: 15,
                }}
              >
                <Image
                  style={{
                    height: verticalScale(105),
                    width: '100%',
                    resizeMode: 'cover',
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                  }}
                  source={item.image}
                />
              </View>
              <Text
                style={{
                  fontFamily: Fonts.BOLD,
                  fontSize: scale(17),
                  marginTop: 15,
                  marginLeft: 10,
                }}
              >
                {item.name}
              </Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                  style={{
                    height: verticalScale(15),
                    width: scale(17),
                    marginLeft: 10,
                    top: -3,
                  }}
                  source={require('./Images/icons8-star-100.png')}
                />
                <Text
                  style={{
                    fontFamily: Fonts.MEDUIM,
                    fontSize: scale(12),
                    marginLeft: 10,
                  }}
                >
                  {item.rating}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 5,
                }}
              >
                <Image
                  style={{
                    height: verticalScale(15),
                    width: scale(17),
                    marginLeft: 10,
                    top: -3,
                  }}
                  source={require('./Images/icons8-clock-100.png')}
                />
                <Text
                  style={{
                    fontFamily: Fonts.MEDUIM,
                    fontSize: scale(12),
                    marginLeft: 10,
                  }}
                >
                  {item.minutes}
                </Text>
              </View>
            </View>
          )}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
        />

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text
            style={{
              marginTop: 19,
              fontFamily: Fonts.BOLD,
              fontSize: scale(18),
              flex: 1,
            }}
          >
            Most Famous
          </Text>
          <Text
            style={{
              fontFamily: Fonts.MEDUIM,
              fontSize: 15,
              marginTop: 10,
              color: '#FF6B00',
            }}
          >
            See all
          </Text>
        </View>
        <FlatList
          data={Data_4}
          horizontal={true}
          renderItem={({ item }) => (
            <View style={styles.box}>
              <View
                style={{
                  height: verticalScale(100),
                  width: '100%',
                  backgroundColor: '#d1d1d1',
                  borderTopLeftRadius: 15,
                  borderTopRightRadius: 15,
                }}
              >
                <Image
                  style={{
                    height: verticalScale(105),
                    width: '100%',
                    resizeMode: 'cover',
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                  }}
                  source={item.image}
                />
              </View>
              <Text
                style={{
                  fontFamily: Fonts.BOLD,
                  fontSize: scale(17),
                  marginTop: 15,
                  marginLeft: 10,
                }}
              >
                {item.name}
              </Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                  style={{
                    height: verticalScale(15),
                    width: scale(17),
                    marginLeft: 10,
                    top: -3,
                  }}
                  source={require('./Images/icons8-star-100.png')}
                />
                <Text
                  style={{
                    fontFamily: Fonts.MEDUIM,
                    fontSize: scale(12),
                    marginLeft: 10,
                  }}
                >
                  {item.rating}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 5,
                }}
              >
                <Image
                  style={{
                    height: verticalScale(15),
                    width: scale(17),
                    marginLeft: 10,
                    top: -3,
                  }}
                  source={require('./Images/icons8-clock-100.png')}
                />
                <Text
                  style={{
                    fontFamily: Fonts.MEDUIM,
                    fontSize: scale(12),
                    marginLeft: 10,
                  }}
                >
                  {item.minutes}
                </Text>
              </View>
            </View>
          )}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
        />
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text
            style={{
              marginTop: 19,
              fontFamily: Fonts.BOLD,
              fontSize: scale(18),
              flex: 1,
            }}
          >
            Todays Deals!
          </Text>
        </View>
        <PagerView
          style={styles.offerStyle}
          initialPage={0}
          ref={Pageref}
          onPageSelected={e => {
            setNe(e.nativeEvent.position);
          }}
        >
          <View key="1">
            <Image
              style={styles.DownOffer}
              source={require('./Images/offers.jpg')}
            />
          </View>
          <View key="2">
            <Image
              style={styles.DownOffer}
              source={require('./Images/maxresdefault.jpg')}
            />
          </View>
          <View key="3">
            <Image
              style={styles.DownOffer}
              source={require('./Images/dummy1.jpg')}
            />
          </View>
          <View key="4">
            <Image
              style={styles.DownOffer}
              source={require('./Images/blog-Is-it-affordable-to-build-an-on-demand-food-delivery-application-like-Zomato-Swiggy_-1.png')}
            />
          </View>
        </PagerView>
        <View style={{ marginTop: 20 }}></View>
      </ScrollView>
    </View>
  );
};

export default welcomeScreen;

const styles = StyleSheet.create({
  search: {
    height: verticalScale(49),
    width: '99%',
    borderRadius: 15,
    backgroundColor: '#FFFFFF',
    marginTop: 25,
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 45,
  },
  offerStyle: {
    height: verticalScale(160),
    width: '100%',
    alignSelf: 'center',
    //backgroundColor: 'red',
    borderRadius: 20,
    marginTop: 20,
  },
  options: {
    height: verticalScale(60),
    width: scale(65),
    backgroundColor: '#FFE8DF',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 13,
  },
  box: {
    height: verticalScale(200),
    width: scale(220),
    backgroundColor: 'white',
    borderRadius: 15,
    marginTop: 20,
    borderWidth: 0.3,
    marginRight: 20,
    shadowColor: '#000',
    shadowRadius: 10,
    shadowOpacity: 1,
    marginBottom: 3,
  },
  DownOffer: {
    height: verticalScale(160),
    width: '99%',
    resizeMode: 'stretch',
    borderRadius: 20,
  },
});
