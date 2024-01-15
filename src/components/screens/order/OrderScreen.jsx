import React from 'react';
import {View, ScrollView, StyleSheet, Text} from 'react-native';

// Components
import Header from './includes/Header';
import OrderedItems from './includes/OrderedItems';
import RecommendedItems from './includes/RecommendedItems';
import DeliverySchedule from './includes/DeliverySchedule';
import DeliveryAddress from './includes/DeliveryAddress';
import BillDetails from './includes/BillDetails';
import SubmitButton from './includes/SubmitButton';

const OrderScreen = () => {
  return (
    <View style={styles.mainContainer}>
      {/* Header */}
      <Header />

      {/* Cart Scroll Area */}
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <OrderedItems />
        <RecommendedItems />
        <DeliverySchedule />
        <DeliveryAddress />
        <BillDetails />
        <SubmitButton />
      </ScrollView>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});

export default OrderScreen;
