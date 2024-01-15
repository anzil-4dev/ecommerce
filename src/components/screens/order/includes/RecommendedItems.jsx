import React, {useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

// Constants
import {SIZE} from '../../../../constants/Constants';

// Context
import {useFetchState} from '../../../../context/Store';

// Component Section
const RecommendedItems = () => {
  // States
  const [selected, setSelected] = useState();
  const {addToCart} = useFetchState();

  // Data
  const recommendList = [
    {
      id: 11,
      image: require('../../../../assets/images/recommended/cabbage.png'),
      name: 'Cabbage',
      price: 120,
      discount: 100,
      offer: 20,
    },
    {
      id: 12,
      image: require('../../../../assets/images/recommended/cherry.png'),
      name: 'Cherry',
      price: 250,
      discount: 420,
      offer: 20,
    },
    {
      id: 13,
      image: require('../../../../assets/images/recommended/garlic.png'),
      name: 'Garlic',
      price: 250,
      discount: 200,
      offer: 20,
    },
    {
      id: 14,
      image: require('../../../../assets/images/recommended/kiwi.png'),
      name: 'Kiwi',
      price: 250,
      discount: 200,
      offer: 20,
    },
    {
      id: 15,
      image: require('../../../../assets/images/recommended/cabbage.png'),
      name: 'Cabbage',
      price: 250,
      discount: 200,
      offer: 20,
    },
    {
      id: 16,
      image: require('../../../../assets/images/recommended/cherry.png'),
      name: 'Cherry',
      price: 250,
      discount: 200,
      offer: 20,
    },
    {
      id: 17,
      image: require('../../../../assets/images/recommended/garlic.png'),
      name: 'Garlic',
      price: 250,
      discount: 200,
      offer: 20,
    },
    {
      id: 18,
      image: require('../../../../assets/images/recommended/kiwi.png'),
      name: 'Kiwi',
      price: 250,
      discount: 200,
      offer: 20,
    },
  ];
  // Handler for Adding Items to Cart
  const handleAddItemToCart = (item, id) => {
    setSelected(id);
    addToCart(item);
  };

  // Item Component for FlatList
  const Item = ({data}) => (
    <View key={data.id} style={[styles.itemContainer]}>
      <View
        style={[
          styles.imageContainer,
          {borderColor: selected === data.id ? '#08C25D' : '#FFF'},
        ]}>
        <Image
          source={data.image}
          style={{width: '100%', height: '100%', resizeMode: 'cover'}}
        />
      </View>
      <Text style={styles.title}>{data.name}</Text>
      <Text style={styles.price}>
        <Text style={styles.rupees}>&#8377;</Text>
        {data.discount}
      </Text>
      <TouchableOpacity
        hitSlop={styles.touchableHitSlop}
        activeOpacity={0.8}
        onPress={() => handleAddItemToCart(data, data.id)}
        style={styles.addButton}>
        <Text style={styles.addText}>Add</Text>
      </TouchableOpacity>
    </View>
  );

  // Render FlatList of Recommended Items
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.headerText}>Recommended</Text>
      <FlatList
        data={recommendList}
        renderItem={({item}) => <Item data={item} />}
        keyExtractor={item => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </View>
  );
};

// Styles Section
const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: SIZE(24),
    paddingBottom: SIZE(38),
  },
  headerText: {
    fontSize: SIZE(15),
    fontFamily: 'Lexend-Regular',
    color: '#000',
    textAlign: 'center',
    marginBottom: SIZE(17),
  },
  itemContainer: {
    alignItems: 'center',
  },
  imageContainer: {
    width: SIZE(72),
    height: SIZE(56),
    marginRight: SIZE(11),
    marginBottom: SIZE(7),
    borderWidth: SIZE(2),
    borderRadius: SIZE(10),
    overflow: 'hidden',
    padding: SIZE(8),
  },
  title: {
    fontSize: SIZE(12),
    fontFamily: 'Lexend-Regular',
    color: '#000',
    marginBottom: SIZE(2),
  },
  price: {
    fontSize: SIZE(12),
    fontFamily: 'Lexend-Medium',
    color: '#000',
    marginBottom: SIZE(9),
  },
  rupees: {
    fontFamily: 'Lato-Regular',
  },
  addButton: {
    backgroundColor: '#08C25D',
    paddingVertical: SIZE(3),
    paddingHorizontal: SIZE(13),
    borderRadius: SIZE(4),
  },
  addText: {
    fontSize: SIZE(12),
    fontFamily: 'Lexend-Regular',
    color: '#F5F5F5',
  },
  touchableHitSlop: {
    top: 10,
    bottom: 10,
    left: 10,
    right: 10,
  },
});

export default RecommendedItems;
