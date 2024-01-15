import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

// Constants
import {SIZE} from '../../../../constants/Constants';

// Context
import {useFetchState} from '../../../../context/Store';

const BillDetails = () => {
  // States
  const {cart} = useFetchState();
  const totalAmount = cart.reduce(
    (acc, item) => acc + item.discount * item.quantity,
    0,
  );

  return (
    <View style={styles.mainContainer}>
      {/* Promo Code */}
      <View style={styles.promoCode}>
        <Text style={styles.promoCodeText}>Do you have a promo code ?</Text>
        <TouchableOpacity
          hitSlop={10}
          activeOpacity={0.8}
          style={styles.promoCodeButtom}>
          <Text style={styles.buttonText}>Redeem Now</Text>
        </TouchableOpacity>
      </View>

      {/* Order Total */}
      <View style={styles.orderTotal}>
        <Text style={styles.orderTotalText}>Order total</Text>
        <Text style={styles.orderTotalPrice}>
          <Text style={styles.rupees}>&#8377;</Text>
          {totalAmount ?? 0}
        </Text>
      </View>

      {/* Delivery Fee */}
      <View style={styles.deliveryFee}>
        <Text style={styles.deliveryFeeText}>Delivery fee</Text>
        <Text style={styles.deliveryFeePrice}>
          <Text style={styles.rupees}>&#8377;</Text>
          {totalAmount ? 20 : 0}
        </Text>
      </View>

      {/* Total Cost */}
      <View style={styles.totalCost}>
        <Text style={styles.totalCostText}>Total cost</Text>
        <Text style={styles.totalCostPrice}>
          <Text style={styles.rupees}>&#8377;</Text>
          {totalAmount ? totalAmount + 20 : 0}
        </Text>
      </View>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: SIZE(42),
    paddingTop: SIZE(6),
    marginBottom: SIZE(20),
  },
  promoCode: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SIZE(14),
  },
  promoCodeText: {
    fontSize: SIZE(12),
    fontFamily: 'Lexend-Regular',
    color: '#000',
    marginRight: SIZE(7),
  },
  promoCodeButtom: {},
  buttonText: {
    fontSize: SIZE(12),
    fontFamily: 'Lexend-Regular',
    color: '#08C25D',
  },
  orderTotal: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: SIZE(11),
  },
  orderTotalText: {
    fontSize: SIZE(15),
    fontFamily: 'Lexend-Regular',
    color: '#000',
  },
  orderTotalPrice: {
    fontSize: SIZE(15),
    fontFamily: 'Lexend-Regular',
    color: '#000',
  },
  deliveryFee: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: SIZE(37),
  },
  deliveryFeeText: {
    fontSize: SIZE(15),
    fontFamily: 'Lexend-Regular',
    color: '#000',
  },
  deliveryFeePrice: {
    fontSize: SIZE(15),
    fontFamily: 'Lexend-Regular',
    color: '#000',
  },
  totalCost: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  totalCostText: {
    fontSize: SIZE(18),
    fontFamily: 'Lexend-Regular',
    color: '#000',
  },
  totalCostPrice: {
    fontSize: SIZE(18),
    fontFamily: 'Lexend-Regular',
    color: '#000',
  },
  rupees: {
    fontFamily: 'Lato-Regular',
  },
});

export default BillDetails;
