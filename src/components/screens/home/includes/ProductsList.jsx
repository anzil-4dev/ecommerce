import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';

// Icons
import DecrementIcon from '../../../../assets/icons/decrement.svg';
import IncrementIcon from '../../../../assets/icons/increment.svg';

// Context
import {useFetchState} from '../../../../context/Store';

// Constants
import {SIZE} from '../../../../constants/Constants';

const ProductsList = () => {
  const [selectedItem, setSelectedItem] = useState('');

  const {cart, addToCart, removeFromCart} = useFetchState();

  // Function for add item from cart
  const handleAddItemToCart = (item, id) => {
    setSelectedItem(id);
    addToCart(item);
  };

  // Function for remove item from cart
  const handleRemoveItemToCart = id => {
    setSelectedItem(id);
    removeFromCart(id);
  };

  // Data
  const DATA = [
    {
      id: 1,
      name: 'Siamese Hybrid Chicken',
      image: require('../../../../assets/images/products/normal-chicken.png'),
      price: 250,
      discount: 200,
      offer: 20,
    },
    {
      id: 2,
      name: 'Vietnamese Turkey',
      image: require('../../../../assets/images/products/flavoured-chicken.png'),
      price: 250,
      discount: 200,
      offer: 20,
    },
    {
      id: 3,
      name: 'Siamese Hybrid Chicken',
      image: require('../../../../assets/images/products/normal-chicken.png'),
      price: 250,
      discount: 200,
      offer: 20,
    },
    {
      id: 4,
      name: 'SVietnamese Turkey',
      image: require('../../../../assets/images/products/flavoured-chicken.png'),
      price: 250,
      discount: 200,
      offer: 20,
    },
    {
      id: 5,
      name: 'Siamese Hybrid Chicken',
      image: require('../../../../assets/images/products/normal-chicken.png'),
      price: 250,
      discount: 200,
      offer: 20,
    },
    {
      id: 6,
      name: 'Vietnamese Turkey',
      image: require('../../../../assets/images/products/flavoured-chicken.png'),
      price: 250,
      discount: 200,
      offer: 20,
    },
  ];

  const Item = ({data}) => (
    <View
      style={[
        styles.item,
        {borderColor: data.id === selectedItem ? '#08C25D' : '#FFF'},
      ]}>
      <View style={styles.imageContainer}>
        <Image
          source={data.image}
          style={{width: '100%', height: '100%', resizeMode: 'contain'}}
        />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{data.name}</Text>
        <View style={styles.priceContainer}>
          <View style={styles.left}>
            <Text style={styles.discount}>
              <Text style={styles.rupees}>&#8377;</Text>
              {data.discount}/kg
            </Text>
            <Text style={styles.price}>
              <Text style={styles.rupees}>&#8377;</Text>
              {data.price}
            </Text>
          </View>
          <View style={styles.right}>
            <Text style={styles.offer}>-{data.offer}%</Text>
          </View>
        </View>
        <View style={styles.quantityContainer}>
          <TouchableOpacity
            hitSlop={10}
            activeOpacity={0.8}
            onPress={() => handleRemoveItemToCart(data.id)}
            style={styles.increment}>
            <DecrementIcon />
          </TouchableOpacity>
          <View style={styles.countContainer}>
            <Text style={styles.count}>
              {cart.length > 0 && cart.find(item => item.id === data.id)
                ? cart.find(item => item.id === data.id).quantity
                : 0}{' '}
              Nos
            </Text>
          </View>
          <TouchableOpacity
            hitSlop={10}
            activeOpacity={0.8}
            onPress={() => handleAddItemToCart(data, data.id)}
            style={styles.decrement}>
            <IncrementIcon />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item data={item} />}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
        contentContainerStyle={{
          paddingBottom: '28%',
        }}
      />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  item: {
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: SIZE(13),
    paddingLeft: SIZE(24),
    paddingRight: SIZE(18),
    marginBottom: SIZE(18),
    borderRadius: SIZE(18),
    borderWidth: SIZE(2),
  },
  imageContainer: {
    width: SIZE(111),
    height: SIZE(78),
    marginRight: SIZE(40),
  },
  detailsContainer: {
    flex: 1,
  },
  name: {
    fontSize: SIZE(12),
    fontFamily: 'Lexend-Regular',
    color: '#000',
    marginBottom: SIZE(3),
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: SIZE(7),
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  discount: {
    fontSize: SIZE(15),
    fontFamily: 'Lexend-SemiBold',
    color: '#000',
    marginRight: SIZE(3),
  },
  price: {
    fontSize: SIZE(12),
    fontFamily: 'Lexend-SemiBold',
    color: '#B8B8B8',
    textDecorationLine: 'line-through',
  },
  rupees: {
    fontFamily: 'Lato-Regular',
  },
  right: {
    backgroundColor: '#F9C941',
    borderRadius: SIZE(5),
  },
  offer: {
    fontSize: SIZE(12),
    fontFamily: 'Lexend-Regular',
    color: '#fff',
    paddingHorizontal: SIZE(3),
    paddingVertical: SIZE(1),
  },
  quantityContainer: {
    backgroundColor: '#F5F5F5',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: SIZE(3),
    borderRadius: SIZE(5),
  },
  decrement: {
    width: SIZE(27),
    height: SIZE(27),
  },
  countContainer: {},
  count: {},
  increment: {
    width: SIZE(27),
    height: SIZE(27),
  },
});

export default ProductsList;
