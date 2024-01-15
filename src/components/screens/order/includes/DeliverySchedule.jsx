import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

// Constants
import {SIZE} from '../../../../constants/Constants';

// Icons
import StromIcon from '../../../../assets/icons/strom.svg';
import ClockIcon from '../../../../assets/icons/clock.svg';
import SunIcon from '../../../../assets/icons/sun.svg';
import MoonIcon from '../../../../assets/icons/moon.svg';

const DeliverySchedule = () => {
  // States
  const [deliveryType, setDeliveryType] = useState('scheduled');
  const [selectedDay, setSelectedDay] = useState('today');
  const [selectedShift, setSelectedShift] = useState(1);

  // Data
  const DayShifts = [
    {id: 1, shift: 'Morning', time: '10AM to 11AM'},
    {id: 2, shift: 'Evening', time: '2PM to 3PM'},
    {id: 3, shift: 'Evening', time: '6PM to 7PM'},
  ];

  return (
    <View style={styles.mainContainer}>
      {/* Top Container */}
      <View style={styles.topContainer}>
        <TouchableOpacity
          onPress={() => setDeliveryType('instant')}
          activeOpacity={0.8}
          hitSlop={10}
          style={[
            styles.instant,
            {borderColor: deliveryType === 'instant' ? '#08C25D' : '#EDEDED'},
          ]}>
          <View style={styles.topLeftIcon}>
            <StromIcon width="100%" height="100%" />
          </View>
          <Text style={styles.topText}>Instant delivery</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setDeliveryType('scheduled')}
          activeOpacity={0.8}
          hitSlop={10}
          style={[
            styles.scheduled,
            {borderColor: deliveryType === 'scheduled' ? '#08C25D' : '#EDEDED'},
          ]}>
          <View style={styles.topRightIcon}>
            <ClockIcon width="100%" height="100%" />
          </View>
          <Text style={styles.topText}>Scheduled delivery</Text>
        </TouchableOpacity>
      </View>

      {/* Middle Container */}
      <View style={styles.middleContainer}>
        <TouchableOpacity
          onPress={() => setSelectedDay('today')}
          activeOpacity={0.8}
          hitSlop={10}
          style={[
            styles.today,
            {backgroundColor: selectedDay === 'today' ? '#08C25D' : '#fff'},
          ]}>
          <Text
            style={[
              styles.todayText,
              {color: selectedDay === 'today' ? '#FFF' : '#000'},
            ]}>
            Today
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelectedDay('tommorow')}
          activeOpacity={0.8}
          hitSlop={10}
          style={[
            styles.tommorow,
            {backgroundColor: selectedDay === 'tommorow' ? '#08C25D' : '#fff'},
          ]}>
          <Text
            style={[
              styles.tommorowText,
              {color: selectedDay === 'tommorow' ? '#FFF' : '#000'},
            ]}>
            Tommorow
          </Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Container */}
      <View style={styles.bottomContainer}>
        {DayShifts.map(item => (
          <TouchableOpacity
            key={item.id}
            onPress={() => setSelectedShift(item.id)}
            hitSlop={10}
            activeOpacity={0.8}
            style={[
              styles.tabs,
              {borderColor: selectedShift === item.id ? '#08C25D' : '#FFF'},
            ]}>
            {/* Top Section */}
            <View style={styles.top}>
              <Text style={styles.label}>{item.shift}</Text>
              <View style={styles.icon}>
                {item.shift !== 'Evening' ? <SunIcon /> : <MoonIcon />}
              </View>
            </View>
            <Text style={styles.time}>{item.time}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: SIZE(20),
    marginBottom: SIZE(11),
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: SIZE(13),
    marginBottom: SIZE(22),
  },
  instant: {
    borderWidth: 2,
    flex: 1,
    marginRight: SIZE(18),
    paddingVertical: SIZE(13.5),
    paddingHorizontal: SIZE(20),
    borderRadius: SIZE(10),
    borderColor: '#EDEDED',
    alignItems: 'center',
  },
  topLeftIcon: {
    width: SIZE(24),
    height: SIZE(31),
    marginBottom: SIZE(2),
  },
  topText: {
    fontSize: SIZE(12),
    fontFamily: 'Lexend-Regular',
    color: '#000',
  },
  topRightIcon: {
    width: SIZE(27),
    height: SIZE(27),
    marginBottom: SIZE(2),
  },
  scheduled: {
    borderWidth: 2,
    flex: 1,
    paddingVertical: SIZE(13.5),
    paddingHorizontal: SIZE(20),
    borderRadius: SIZE(10),
    borderColor: '#08C25D',
    alignItems: 'center',
  },
  middleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SIZE(21),
    marginBottom: SIZE(22),
  },
  today: {
    flex: 1,
    padding: SIZE(11),
    borderRadius: SIZE(7),
  },
  todayText: {
    textAlign: 'center',
  },
  tommorow: {
    flex: 1,
    padding: SIZE(11),
    borderRadius: SIZE(7),
  },
  tommorowText: {
    textAlign: 'center',
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SIZE(14),
  },
  tabs: {
    flex: 1,
    borderWidth: 2,
    borderRadius: SIZE(10),
    paddingTop: SIZE(11),
    paddingLeft: SIZE(12),
    paddingRight: SIZE(9),
    paddingBottom: SIZE(12),
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: SIZE(5),
  },
  label: {
    fontSize: SIZE(12),
    fontFamily: 'Lexend-Regular',
    color: '#000',
  },
  icon: {},
  time: {
    fontSize: SIZE(12),
    fontFamily: 'Lexend-Regular',
    color: '#A6A6A6',
  },
});

export default DeliverySchedule;
