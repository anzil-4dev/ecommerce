import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';

// Constants
import {SIZE} from '../../../../constants/Constants';

// Icons
import ArrowDown from '../../../../assets/icons/down-arrow.svg';
import LocationGreen from '../../../../assets/icons/location-green.svg';

// Packages
import {useNavigation} from '@react-navigation/native';

const HomeHeader = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mainContainer}>
      <View style={styles.locationContainer}>
        <View style={styles.iconContainer}>
          <LocationGreen width={'100%'} height={'100%'} />
        </View>
        <View style={styles.addressContainer}>
          {/* Type Section */}
          <View style={styles.typeContainer}>
            <Text style={styles.typeText}>Work</Text>
            <View style={styles.arrowContainer}>
              <ArrowDown width={'100%'} height={'100%'} />
            </View>
          </View>

          {/* Address Section */}
          <View style={styles.contentContainer}>
            <Text style={styles.addressText}>
              P.O. Box 3625. Sheikh Khalifa Bin Saeed Street Dubai. P.O. Box 901
            </Text>
          </View>
        </View>
      </View>

      {/* Profile Section */}
      <TouchableOpacity
        onPress={() => navigation.navigate('Logout')}
        style={styles.profileContainer}>
        <Image
          source={require('../../../../assets/images/profile-image.png')}
          style={{width: '100%', height: '100%', resizeMode: 'contain'}}
        />
      </TouchableOpacity>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: SIZE(1),
    borderColor: '#DDD',
    paddingBottom: SIZE(24),
  },
  locationContainer: {
    flexDirection: 'row',
  },
  iconContainer: {
    width: SIZE(16.848),
    height: SIZE(22),
    marginRight: SIZE(10),
  },
  addressContainer: {
    width: '80%',
  },
  typeContainer: {
    marginBottom: SIZE(4),
    flexDirection: 'row',
    alignItems: 'center',
  },
  typeText: {
    fontSize: SIZE(18),
    fontFamily: 'Lexend-Regular',
    color: '#000',
    marginRight: SIZE(8),
  },
  arrowContainer: {
    width: SIZE(11.232),
    height: SIZE(6),
  },
  contentContainer: {},
  addressText: {
    fontSize: SIZE(12),
    fontFamily: 'Lexend-Regular',
    color: '#8F8F8F',
  },
  profileContainer: {
    width: SIZE(36),
    height: SIZE(36),
  },
});

export default HomeHeader;
