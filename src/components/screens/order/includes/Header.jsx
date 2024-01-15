import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

// Package
import {useNavigation} from '@react-navigation/native';

// Constants
import {SIZE} from '../../../../constants/Constants';

// Icons
import BackIcon from '../../../../assets/icons/back-icon.svg';

const Header = () => {
  // navigation
  const navigation = useNavigation();

  return (
    <View style={styles.mainContainer}>
      {/* Back Button */}
      <TouchableOpacity
        hitSlop={10}
        activeOpacity={0.8}
        onPress={() => navigation.goBack()}
        style={styles.backIconContainer}>
        <BackIcon width="100%" height="100%" />
      </TouchableOpacity>
      {/* Header Text */}
      <Text style={styles.headerText}>Your Order</Text>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#3AC77A',
    paddingVertical: SIZE(19),
    paddingHorizontal: SIZE(20),
    flexDirection: 'row',
    alignItems: 'center',
  },
  backIconContainer: {
    width: SIZE(21),
    height: SIZE(13.857),
  },
  headerText: {
    flex: 1,
    fontSize: SIZE(18),
    fontFamily: 'Lexend-Regular',
    color: '#FFF',
    textAlign: 'center',
  },
});

export default Header;
