import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

// Constants
import {SIZE} from '../../../../constants/Constants';

//Icons
import TickIcon from '../../../../assets/icons/tick.svg';

const SubmitButton = () => {
  // States
  const [isClicked, setClicked] = useState(false);
  const [isVerified, setVerified] = useState(false);

  // Render
  return (
    <View style={styles.mainContainer}>
      {/* Terms and Conditions */}
      <View style={styles.termsAndCondition}>
        <TouchableOpacity
          onPress={() => setVerified(!isVerified)}
          activeOpacity={0.8}
          hitSlop={10}
          style={styles.icon}>
          {isVerified && <TickIcon width={SIZE(18)} height={SIZE(13)} />}
        </TouchableOpacity>
        <Text style={styles.termsAndConditionText}>
          By placing an order you agree to our{' '}
          <Text style={styles.bold}>Terms</Text> and{' '}
          <Text style={styles.bold}>Conditions</Text>
        </Text>
      </View>

      {/* Submit Button */}
      <TouchableOpacity
        onPress={() => setClicked(!isClicked)}
        activeOpacity={0.8}
        hitSlop={10}
        style={[
          styles.button,
          {borderColor: isVerified ? '#08C25D' : '#F5F5F5'},
        ]}>
        <Text style={styles.buttonText}>Proceed</Text>
      </TouchableOpacity>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: SIZE(20),
    paddingBottom: SIZE(28),
  },
  termsAndCondition: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SIZE(15),
  },
  icon: {
    width: SIZE(39),
    height: SIZE(37),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SIZE(5),
    backgroundColor: '#EBEBEB',
    marginRight: SIZE(27),
  },
  termsAndConditionText: {
    fontSize: SIZE(15),
    fontFamily: 'Lexend-Regular',
    color: '#A8A8A8',
    flex: 1,
  },
  bold: {
    color: '#333',
  },
  button: {
    borderWidth: SIZE(2),
    backgroundColor: '#F5F5F5',
    paddingVertical: SIZE(23),
    borderRadius: SIZE(11),
  },
  buttonText: {
    fontSize: SIZE(18),
    fontFamily: 'Lexend-Regular',
    color: '#000',
    textAlign: 'center',
  },
});

export default SubmitButton;
