import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

// Constants
import {SIZE} from '../../../../constants/Constants';

const StoreHeader = () => {
  return (
    <View style={styles.mainContainer}>
      {/* Logo Container */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../../../../assets/images/company-logo.png')}
          style={{width: '100%', height: '100%', resizeMode: 'contain'}}
        />
      </View>

      {/* Description Container */}
      <View style={styles.descriptionContainer}>
        <Text style={styles.headText}>Store 1</Text>
        <Text style={styles.descriptionText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
      </View>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  mainContainer: {
    paddingVertical: SIZE(24),
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoContainer: {
    width: SIZE(73),
    height: SIZE(66),
    borderRadius: SIZE(6),
    marginRight: SIZE(20),
  },
  descriptionContainer: {
    flex: 1,
  },
  headText: {
    fontSize: SIZE(15),
    fontFamily: 'Lexend-Regular',
    color: '#000',
    marginBottom: SIZE(3),
  },
  descriptionText: {
    fontSize: SIZE(12),
    fontFamily: 'Lexend-Regular',
    color: '#8F8F8F',
  },
});

export default StoreHeader;
