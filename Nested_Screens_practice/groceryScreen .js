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
import { CartContext } from './CartContext';
import Fonts2 from '../Fonts2';
import { LogBox } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const welcomeScreen = () => {
  LogBox.ignoreAllLogs();

  const Data = [
    {
      id: 1,
      link: require('./Images/depositphotos_201989724-stock-photo-fresh-fruits-white-background-removebg-preview.png'),
      name: 'Fruits',
    },
    {
      id: 2,
      link: require('./Images/basket-full-of-vegetables-removebg-preview.png'),
      name: 'Vegetables',
    },
    {
      id: 3,
      link: require('./Images/packaged-food-brands-1024x768-removebg-preview.png'),
      name: 'Packet Products',
    },
    {
      id: 4,
      link: require('./Images/cleaning-items-basket-isolated-white-background_93675-122107-removebg-preview.png'),
      name: 'Cleaning items',
    },
    {
      id: 5,
      link: require('./Images/bakery-products-isolated-on-the-white-background-DCH8FD-removebg-preview.png'),
      name: 'Bakery',
    },
    {
      id: 6,
      link: require('./Images/dummy10.png'),
      name: 'Frozen Food',
    },
    {
      id: 7,
      link: require('./Images/pantry-master-list-1389303-hero-01-9ffad227ac094f91911d33c508686919-removebg-preview.png'),
      name: 'pantry',
    },
  ];

  const Data_2 = [
    {
      id: 1,
      image: require('./Images/download-removebg-preview.png'),
      name: 'Banana',
      rating: require('./Images/rating1.png'),
      prices: '₹600',
      Quantiy: 0,
    },
    {
      id: 2,
      image: require('./Images/download-removebg-preview2.png'),
      name: 'Kurkure',
      rating: require('./Images/rating2.png'),
      prices: '₹10',
      Quantiy: 0,
    },
    {
      id: 3,
      image: require('./Images/dummy5.png'),
      name: 'Meggi',
      rating: require('./Images/rating3.png'),
      prices: '₹12',
      Quantiy: 0,
    },
    {
      id: 4,
      image: require('./Images/images-removebg-previ.png'),
      name: 'Lays',
      rating: require('./Images/rating3.png'),
      prices: '₹15',
      Quantiy: 0,
    },
  ];

  const Data_3 = [
    {
      id: 1,
      image: require('./Images/amul-taaza-milk-removebg-preview.png'),
      name: 'Amul Milk',
      rating: require('./Images/rating3.png'),
      prices: '₹10',
    },
    {
      id: 2,
      image: require('./Images/dummy7.png'),
      name: 'Tata Sault',
      rating: require('./Images/rating1.png'),
      prices: '₹30',
    },
    {
      id: 3,
      image: require('./Images/png-transparent-white-bread-bakery-loaf-packaging-and-labeling-bread-package-food-baking-food-packaging-removebg-preview.png'),
      name: 'Bread',
      rating: require('./Images/rating3.png'),
      prices: '₹55',
    },
    {
      id: 4,
      image: require('./Images/cheese.png'),
      name: 'Amul Cheese',
      rating: require('./Images/rating3.png'),
      prices: '₹155',
    },
  ];

  const Data_4 = [
    {
      id: 1,
      image: require('./Images/cone.png'),
      name: 'Vadilal Cone',
      rating: require('./Images/rating3.png'),
      prices: '₹12',
    },
    {
      id: 2,
      image: require('./Images/candy.png'),
      name: 'Vadilal candy',
      rating: require('./Images/rating3.png'),
      prices: '₹10',
    },
    {
      id: 3,
      image: require('./Images/istockphoto-1316780583-612x612-removebg-preview.png'),
      name: 'Gullab Jamum',
      rating: require('./Images/rating2.png'),
      prices: '₹800',
    },
    {
      id: 4,
      image: require('./Images/kajukatli.png'),
      name: 'Kaju-Katli',
      rating: require('./Images/rating3.png'),
      prices: '₹754',
    },
  ];
  const [items, setItems] = useState(Data_2);
  const increaseQuantity = id => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, Quantiy: item.Quantiy + 1 } : item,
      ),
    );
  };
  const DecreseQuality = id => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, Quantiy: item.Quantiy - 1 } : item,
      ),
    );
  };
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

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
            placeholder="Search for Grocery"
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
              source={require('./Images/jiomartgroceryshopping.jpg')}
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
              source={require('./Images/dummy11.jpg')}
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
              source={require('./Images/dummy8.jpg')}
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
              source={require('./Images/groceries-offers.jpg')}
            />
          </View>
        </PagerView>

        <View
          style={{
            flexDirection: 'row',
            gap: 10,
            alignSelf: 'center',
            marginTop: 12,
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
              marginTop: 9,
              fontFamily: Fonts.BOLD,
              fontSize: scale(18),
              flex: 1,
            }}
          >
            Categories
          </Text>
        </View>

        <FlatList
          data={Data}
          horizontal={true}
          renderItem={({ item }) => (
            <View
              style={{
                paddingVertical: verticalScale(1),
                width: scale(85),
                justifyContent: 'center',
                paddingLeft: 5,
                marginTop: 5,
                alignItems: 'center',
              }}
            >
              <View style={styles.options}>
                <Image
                  style={{
                    height: verticalScale(45),
                    width: scale(65),
                    resizeMode: 'cover',
                  }}
                  source={item.link}
                />
              </View>
              <View style={{ height: 50, width: 100 }}>
                <Text
                  style={{
                    fontFamily: Fonts.MEDUIM,
                    fontSize: scale(12),
                    marginTop: 8,
                    paddingRight: 12,
                    textAlign: 'center',
                    flexWrap: 'wrap',
                  }}
                >
                  {item.name}
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
              marginTop: 9,
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
          data={items.map(item => {
            const cartItem = cartItems.find(
              cartItem => cartItem.id === item.id,
            );
            return cartItem ? { ...item, Quantiy: cartItem.Quantiy } : item;
          })}
          numColumns={2}
          renderItem={({ item }) => (
            <View style={styles.box}>
              <View style={styles.box_image_container}>
                <Image style={{ height: 85, width: 85 }} source={item.image} />
              </View>
              <Image
                source={require('./Images/icons8-heart-100.png')}
                style={{
                  height: 24,
                  width: 24,
                  position: 'absolute',
                  alignSelf: 'flex-end',
                  right: 10,
                  marginTop: 5,
                }}
              />

              <Text style={styles.box_Text}>{item.name}</Text>
              <Image style={styles.box_ratting} source={item.rating} />
              <View
                style={{ flexDirection: 'row', gap: 2, alignItems: 'center' }}
              >
                <Text style={styles.box_price}>{item.prices}</Text>
              </View>
              <Text
                style={{
                  fontSize: scale(12),
                  fontFamily: Fonts2.SEMI_BOLD,
                  color: 'rgb(125, 125, 125)',
                  marginTop: 5,
                  left: 10,
                }}
              >
                More ▼
              </Text>

              {item.Quantiy === 0 || !item.Quantiy ? (
                <TouchableOpacity onPress={() => addToCart(item)}>
                  <View style={styles.box_cart}>
                    <Text
                      style={{
                        fontSize: scale(16),
                        color: 'white',
                        fontWeight: '900',
                        marginBottom: 2,
                      }}
                    >
                      ＋
                    </Text>
                  </View>
                </TouchableOpacity>
              ) : (
                <View
                  style={[
                    styles.box_cart,
                    {
                      width: scale(75),
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                      marginBottom: 14.5,
                    },
                  ]}
                >
                  <TouchableOpacity onPress={() => removeFromCart(item.id)}>
                    <View
                      style={{
                        height: 45,
                        width: 25,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Text style={{ fontSize: 20, color: 'white' }}>-</Text>
                    </View>
                  </TouchableOpacity>
                  <Text style={{ fontSize: 17, color: 'white' }}>
                    {item.Quantiy}
                  </Text>
                  <TouchableOpacity onPress={() => addToCart(item)}>
                    <View
                      style={{
                        height: 45,
                        width: 25,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Text style={{ fontSize: 20, color: 'white' }}>+</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          )}
          keyExtractor={item => item.id.toString()}
        />

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text
            style={{
              marginTop: 9,
              fontFamily: Fonts.BOLD,
              fontSize: 22,
              flex: 1,
            }}
          >
            Routines items
          </Text>
          <Text
            style={{
              fontFamily: Fonts.MEDUIM,
              fontSize: 15,
              marginTop: 10,
              color: '#f9c901',
            }}
          >
            See all
          </Text>
        </View>

        <FlatList
          data={Data_3}
          numColumns={2}
          renderItem={({ item }) => (
            <View style={styles.box}>
              <View style={styles.box_image_container}>
                <Image style={{ height: 85, width: 85 }} source={item.image} />
              </View>
              <Image
                source={require('./Images/icons8-heart-100.png')}
                style={{
                  height: 24,
                  width: 24,
                  position: 'absolute',
                  alignSelf: 'flex-end',
                  right: 10,
                  marginTop: 5,
                }}
              />

              <Text style={styles.box_Text}>{item.name}</Text>
              <Image style={styles.box_ratting} source={item.rating} />
              <View
                style={{ flexDirection: 'row', gap: 2, alignItems: 'center' }}
              >
                <Text style={styles.box_price}>{item.prices}</Text>
              </View>
              <Text
                style={{
                  fontSize: scale(12),
                  fontFamily: Fonts2.SEMI_BOLD,
                  color: 'rgb(125, 125, 125)',
                  marginTop: 5,
                  left: 10,
                }}
              >
                More ▼
              </Text>

              <TouchableOpacity
                onPress={() => {
                  console.log('hi');
                }}
              >
                <View style={[styles.box_cart]}>
                  <Text
                    style={{
                      fontSize: scale(16),
                      color: 'white',
                      fontWeight: '900',
                    }}
                  >
                    ＋
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={item => item.id}
        />

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text
            style={{
              marginTop: 9,
              fontFamily: Fonts.BOLD,
              fontSize: 22,
              flex: 1,
            }}
          >
            Sweets/Ice cream
          </Text>
          <Text
            style={{
              fontFamily: Fonts.MEDUIM,
              fontSize: 15,
              marginTop: 10,
              color: '#f9c901',
            }}
          >
            See all
          </Text>
        </View>

        <FlatList
          data={Data_4}
          numColumns={2}
          renderItem={({ item }) => (
            <View style={styles.box}>
              <View style={styles.box_image_container}>
                <Image style={{ height: 85, width: 85 }} source={item.image} />
              </View>
              <Image
                source={require('./Images/icons8-heart-100.png')}
                style={{
                  height: 24,
                  width: 24,
                  position: 'absolute',
                  alignSelf: 'flex-end',
                  right: 10,
                  marginTop: 5,
                }}
              />

              <Text style={styles.box_Text}>{item.name}</Text>
              <Image style={styles.box_ratting} source={item.rating} />
              <View
                style={{ flexDirection: 'row', gap: 2, alignItems: 'center' }}
              >
                <Text style={styles.box_price}>{item.prices}</Text>
              </View>
              <Text
                style={{
                  fontSize: scale(12),
                  fontFamily: Fonts2.SEMI_BOLD,
                  color: 'rgb(125, 125, 125)',
                  marginTop: 5,
                  left: 10,
                }}
              >
                More ▼
              </Text>

              <TouchableOpacity
                onPress={() => {
                  console.log('hi');
                }}
              >
                <View style={[styles.box_cart]}>
                  <Text
                    style={{
                      fontSize: scale(16),
                      color: 'white',
                      fontWeight: '900',
                    }}
                  >
                    ＋
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </ScrollView>
    </View>
  );
};

export default welcomeScreen;

const styles = StyleSheet.create({
  search: {
    height: verticalScale(49),
    width: '99%',
    borderRadius: 20,
    backgroundColor: 'white',
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
    height: verticalScale(62),
    width: scale(65),
    backgroundColor: '#FFE8DF',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 13,
    alignSelf: 'center',
  },
  box: {
    height: verticalScale(202),
    width: scale(150),
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    marginTop: 18,
    borderWidth: 0.6,
    marginRight: 20,
    marginBottom: 12,
    borderColor: 'rgba(0, 0, 0,0.17)',
    elevation: 7,
    shadowColor: '#52006A',
  },
  box_image_container: {
    height: verticalScale(88),
    width: '99%',
    backgroundColor: '#FFFFFF',

    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignSelf: 'center',
    marginTop: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box_Text: {
    fontFamily: Fonts.BOLD,
    fontSize: scale(15),
    marginLeft: 10,
    marginTop: 9,
  },
  box_ratting: {
    height: verticalScale(15),
    width: scale(80),
    resizeMode: 'stretch',
    marginLeft: 10,
  },
  box_price: {
    fontFamily: Fonts.MEDUIM,
    fontSize: scale(17),
    marginLeft: 15,
    marginTop: 6,
    color: 'black',
    fontWeight: 700,
  },
  box_cart: {
    height: verticalScale(37),
    width: scale(40),
    position: 'absolute',
    alignSelf: 'flex-end',
    backgroundColor: 'red',
    bottom: -8,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
    right: -5,
  },
});
