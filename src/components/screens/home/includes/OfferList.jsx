import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';

// Icons
import OfferLogo from '../../../../assets/icons/offer.svg';

// Constants
import {SIZE} from '../../../../constants/Constants';

// Data
const DATA = [
  {
    id: '1',
    offer: '60% OFF up to Rs120',
    code: 'ZCRICKET',
  },
  {
    id: '2',
    offer: '60% OFF up to Rs120',
    code: 'WELCOME',
  },
  {
    id: '3',
    offer: '60% OFF up to Rs120',
    code: 'MINT60',
  },
  {
    id: '4',
    offer: '60% OFF up to Rs120',
    code: 'GIFT',
  },
];

// Item Component
const Item = ({data}) => (
  <View style={styles.item}>
    <View style={styles.logoContainer}>
      <OfferLogo width="100%" height="100%" />
    </View>
    <View>
      <Text style={styles.offerText}>{data.offer}</Text>
      <Text style={styles.codeText}>use code {data.code}</Text>
    </View>
  </View>
);

const OfferList = () => {
  return (
    <View>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item data={item} />}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SIZE(11),
    paddingVertical: SIZE(9),
    borderRadius: SIZE(10),
    backgroundColor: '#fff',
    marginRight: SIZE(13),
  },
  logoContainer: {
    width: SIZE(34),
    height: SIZE(34),
    marginRight: SIZE(9),
  },
  offerText: {
    fontSize: SIZE(12),
    fontFamily: 'Lexend-Medium',
    color: '#000',
  },
  codeText: {
    fontSize: SIZE(12),
    fontFamily: 'Lexend-Regular',
    color: '#000',
  },
});

export default OfferList;
