import {StyleSheet} from 'react-native';
import {getTheme} from '../../helpers/helpers';

const getStyles = () => {
  const {colors} = getTheme();

  return StyleSheet.create({
    content: {
      flex: 1,
      // backgroundColor: colors.background,
    },
    text: {
      marginBottom: 50,
      fontSize: 22,
      fontWeight: 'bold',
      color: colors.text,
    },
  });
};

export default getStyles;
