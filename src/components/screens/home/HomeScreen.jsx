import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';

// Constants
import {SIZE} from '../../../constants/Constants';

// Components
import HomeHeader from './includes/HomeHeader';
import StoreHeader from './includes/StoreHeader';
import OfferList from './includes/OfferList';
import CategoryList from './includes/CategoryList';
import ProductsList from './includes/ProductsList';
import CheckoutButton from './includes/CheckoutButton';

const HomeScreen = () => {
  return (
    <View style={styles.mainContainer}>
      {/* Home Header */}
      <HomeHeader />

      {/* Main Content */}
      <ScrollView nestedScrollEnabled showsVerticalScrollIndicator={false}>
        {/* Store Header */}
        <StoreHeader />

        {/* Offer List */}
        <OfferList />

        {/* Category List */}
        <CategoryList />

        {/* Products List */}
        <ProductsList />
      </ScrollView>

      {/* Checkout Button */}
      <CheckoutButton />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: SIZE(20),
    paddingTop: SIZE(20),
    backgroundColor: '#fff',
  },
});

export default HomeScreen;
