import { StyleSheet } from 'react-native';
import { colors } from '../../assets';
import { height, width } from '../units';

const styles = StyleSheet.create({
  tabIcon: {
    height: 7 * width,
    width: 7 * width,
    resizeMode: 'contain',
    margin: 0,
  },
  tabContainer: {
    padding: 0,
    margin: 0,
  },
  tabLabel: {
    padding: 0,
    margin: 0,
    fontSize: 1.3 * height,
  },
  tabStyle: {
    backgroundColor: colors.red,
    elevation: 10,
  },
});
export default styles;
