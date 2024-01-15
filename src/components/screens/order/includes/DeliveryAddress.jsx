import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

// Constants
import {SIZE} from '../../../../constants/Constants';

// Icons
import EditIcon from '../../../../assets/icons/edit.svg';

const DeliveryAddress = () => {
  const [address, setAddress] = useState(
    '416 Grandrose Ave. Des Plaines, IL 60016',
  );
  const [isEdit, setEdit] = useState(false);

  return (
    <View style={styles.mainContainer}>
      {/* Header Text */}
      <Text style={styles.headerText}>Delivery address</Text>

      {/* Address Container */}
      <View style={styles.addressContainer}>
        {isEdit ? (
          // Editable Address Input
          <TextInput
            style={[
              styles.address,
              {
                borderWidth: SIZE(0.5),
                borderRadius: SIZE(5),
                borderColor: '#A6A6A6',
              },
            ]}
            onChangeText={text => setAddress(text)}
            value={address}
            onBlur={() => setEdit(false)}
          />
        ) : (
          // Display Address Text
          <Text style={styles.address}>{address}</Text>
        )}

        {/* Edit Icon */}
        <TouchableOpacity
          activeOpacity={0.8}
          hitSlop={10}
          onPress={() => setEdit(true)}
          style={styles.icon}>
          <EditIcon width="100%" height="100%" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: SIZE(20),
  },
  headerText: {
    fontSize: SIZE(12),
    fontFamily: 'Lexend-Regular',
    color: '#A6A6A6',
    marginBottom: SIZE(5),
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingLeft: SIZE(24),
    paddingTop: SIZE(15),
    paddingRight: SIZE(13),
    paddingBottom: SIZE(20),
  },
  address: {
    width: '65%',
    fontSize: SIZE(15),
    fontFamily: 'Lexend-Light',
    color: '#000',
  },
  icon: {
    width: SIZE(18),
    height: SIZE(18),
  },
});

export default DeliveryAddress;
