import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const ScreenWidth = wp(100);
export const ScreenHeight = hp(100);

export function SIZE(val) {
  return wp(val / 4.2);
}
