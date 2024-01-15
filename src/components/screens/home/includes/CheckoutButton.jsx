import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

// Icons
import CheckoutArrow from '../../../../assets/icons/checkout-arrow.svg';
import CartIcon from '../../../../assets/icons/cart-icon.svg';

// Navigation and Context
import {useNavigation} from '@react-navigation/native';
import {useFetchState} from '../../../../context/Store';

// Constants
import {SIZE} from '../../../../constants/Constants';

const CheckoutButton = () => {
  // States
  const {cart} = useFetchState();
  const totalAmount = cart.reduce(
    (acc, item) => acc + item.discount * item.quantity,
    0,
  );
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Navigation
  const navigation = useNavigation();

  // Render
  return (
    <View style={styles.mainContainer}>
      <CheckoutArrow style={styles.upArrow} />

      {/* Price Details */}
      <View style={styles.priceDetails}>
        <Text style={styles.quantity}>{totalQuantity ?? 0} Items</Text>
        <Text style={styles.amount}>
          <Text style={styles.rupees}>&#8377;</Text>
          {totalAmount}
        </Text>
      </View>

      {/* Checkout Button */}
      <TouchableOpacity
        hitSlop={10}
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Order')}
        style={styles.cartContainer}>
        <Text style={styles.cartLabel}>Checkout</Text>
        <View style={styles.cartIcon}>
          <CartIcon />
        </View>
      </TouchableOpacity>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    position: 'absolute',
    bottom: SIZE(20),
    left: SIZE(20),
    right: SIZE(20),
    backgroundColor: '#08C25D',
    borderRadius: SIZE(17),
    padding: SIZE(19),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  upArrow: {
    width: SIZE(33),
    height: SIZE(13),
    top: -SIZE(10),
    left: '50%',
    position: 'absolute',
  },
  priceDetails: {},
  quantity: {
    fontSize: SIZE(15),
    fontFamily: 'Lexend-Regular',
    color: '#FFF',
    marginBottom: SIZE(1),
  },
  amount: {
    fontSize: SIZE(18),
    fontFamily: 'Lexend-Medium',
    color: '#FFF',
  },
  rupees: {
    fontFamily: 'Lato-Regular',
  },
  cartContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingHorizontal: SIZE(34),
    paddingTop: SIZE(12),
    paddingBottom: SIZE(13),
    borderRadius: SIZE(10),
  },
  cartLabel: {
    fontSize: SIZE(18),
    fontFamily: 'Lexend-Medium',
    color: '#000',
    marginRight: SIZE(16),
  },
  cartIcon: {
    width: SIZE(22),
    height: SIZE(21),
  },
});

export default CheckoutButton;
