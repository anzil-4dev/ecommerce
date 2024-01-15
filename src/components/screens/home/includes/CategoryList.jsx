import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

// Constants
import {SIZE, ScreenWidth} from '../../../../constants/Constants';

// Data
const categories = [
  {
    id: '1',
    image: require('../../../../assets/images/categories/tea.png'),
    title: 'Rice',
  },
  {
    id: '2',
    image: require('../../../../assets/images/categories/drinks.png'),
    title: 'Drinks',
  },
  {
    id: '3',
    image: require('../../../../assets/images/categories/tea.png'),
    title: 'Tea',
  },
  {
    id: '4',
    image: require('../../../../assets/images/categories/others.png'),
    title: 'Others',
  },
];

// Component
const CategoryList = () => {
  return (
    <View style={styles.mainContainer}>
      {categories.map((item, index) => (
        <View key={item.id} style={styles.itemContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={item.image}
              style={{width: '100%', height: '100%', resizeMode: 'cover'}}
            />
          </View>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      ))}
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: SIZE(24),
    paddingBottom: SIZE(17),
  },
  itemContainer: {
    alignItems: 'center',
  },
  imageContainer: {
    width: (ScreenWidth - SIZE(100)) / 4,
    height: SIZE(62),
    marginBottom: SIZE(6),
    borderRadius: SIZE(10),
    overflow: 'hidden',
  },
  title: {
    fontSize: SIZE(12),
    fontFamily: 'Lexend-Regular',
    color: '#000',
  },
});

export default CategoryList;
