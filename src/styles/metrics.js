import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const fonts = {
  smallFont: 14,
  mediumFont: 16,
  largeFont: 18,
  extraLargeFont: 22,
};

const space = {
  basePadding: 16,
  baseMargin: 16,
};

const screen = {
  screenWidth: width < height ? width : height,
  sceenHeight: width < height ? height : width,
};

const sizes = {
  headerMaxHeight: 140,
  headerMinHeight: 70,
  profileImageMaxHeight: 80,
  profileImageMinHeight: 40,
  toolbarHeight: 54,
};

export default { ...fonts, ...space, ...screen, ...sizes };
