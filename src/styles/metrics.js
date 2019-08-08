import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default {
  basePadding: 16,
  baseMargin: 16,
  screenWidth: width < height ? width : height,
  sceenHeight: width < height ? height : width,
  headerMaxHeight: 120,
  headerMinHeight: 70,
  profileImageMaxHeight: 80,
  profileImageMinHeight: 40,
};
