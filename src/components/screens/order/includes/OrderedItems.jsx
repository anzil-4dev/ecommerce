import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

// Icons
import DecrementIcon from '../../../../assets/icons/decrement.svg';
import IncrementIcon from '../../../../assets/icons/increment.svg';

// Context
import {useFetchState} from '../../../../context/Store';

// Constants
import {SIZE} from '../../../../constants/Constants';

const OrderedItems = () => {
  const [selectedItem, setSelectedItem] = useState('');
  const {cart, addToCart, removeFromCart} = useFetchState();

  // Handlers for Adding and Removing Items from Cart
  const handleAddItemToCart = (item, id) => {
    setSelectedItem(id);
    addToCart(item);
  };

  const handleRemoveItemToCart = (item, id) => {
    setSelectedItem(id);
    removeFromCart(id);
  };

  // Item Component for FlatList
  const Item = ({data}) => (
    <View
      style={[
        styles.item,
        {borderColor: data.id === selectedItem ? '#08C25D' : '#FFF'},
      ]}>
      <View style={styles.detailsContainer}>
        <View style={styles.priceContainer}>
          <View style={styles.left}>
            {/* Product Name */}
            <Text style={styles.name}>{data.name}</Text>
            <View style={styles.priceDetails}>
              {/* Discounted Price */}
              <Text style={styles.discount}>
                <Text style={styles.rupees}>&#8377;</Text>
                {data.discount}/kg
              </Text>
              {/* Original Price */}
              <Text style={styles.price}>
                <Text style={styles.rupees}>&#8377;</Text>
                {data.price}
              </Text>
              <View style={styles.right}>
                {/* Offer Percentage */}
                <Text style={styles.offer}>-{data.offer}%</Text>
              </View>
            </View>
          </View>
        </View>
        {/* Quantity Control */}
        <View style={styles.quantityContainer}>
          <TouchableOpacity
            hitSlop={styles.touchableHitSlop}
            activeOpacity={0.8}
            onPress={() => handleRemoveItemToCart(data, data.id)}
            style={styles.decrement}>
            {/* Decrement Icon */}
            <DecrementIcon width="100%" height="100%" />
          </TouchableOpacity>
          <View style={styles.countContainer}>
            {/* Display Quantity */}
            <Text style={styles.count}>{data.quantity} Nos</Text>
          </View>
          <TouchableOpacity
            hitSlop={styles.touchableHitSlop}
            activeOpacity={0.8}
            onPress={() => handleAddItemToCart(data, data.id)}
            style={styles.increment}>
            {/* Increment Icon */}
            <IncrementIcon width="100%" height="100%" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View>
      {cart.length > 0 ? (
        <FlatList
          data={cart}
          renderItem={({item}) => <Item data={item} />}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          scrollEnabled={false}
          contentContainerStyle={{
            paddingTop: SIZE(28),
            paddingHorizontal: SIZE(20),
          }}
        />
      ) : (
        <Text style={styles.emptyCartText}>Your cart is empty</Text>
      )}
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  item: {
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: SIZE(15),
    paddingLeft: SIZE(17),
    paddingRight: SIZE(13),
    marginBottom: SIZE(16),
    borderRadius: SIZE(18),
    borderWidth: SIZE(2),
  },
  detailsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: SIZE(12),
    fontFamily: 'Lexend-Regular',
    color: '#000',
    marginBottom: SIZE(3),
  },
  priceContainer: {
    flexDirection: 'row',
    marginBottom: SIZE(7),
  },
  left: {},
  priceDetails: {
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
    marginRight: SIZE(6),
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
    color: '#FFF',
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
  countContainer: {
    marginHorizontal: SIZE(15),
  },
  count: {},
  increment: {
    width: SIZE(27),
    height: SIZE(27),
  },
  touchableHitSlop: {
    top: 10,
    bottom: 10,
    left: 10,
    right: 10,
  },
  emptyCartText: {
    padding: SIZE(25),
    width: '100%',
    textAlign: 'center',
    fontSize: SIZE(12),
    fontFamily: 'Lexend-Regular',
    color: '#000',
  },
});

export default OrderedItems;
