import {StyleSheet} from 'react-native';
import {getTheme} from '../../helpers/helpers';

const getStyles = () => {
  const {colors} = getTheme();

  return StyleSheet.create({
    container: {
      display: 'flex',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      marginBottom: 50,
      fontSize: 22,
      fontWeight: 'bold',
      color: colors.text,
    },
    textSmall: {
      marginBottom: 2,
      fontSize: 8,
      fontWeight: 'bold',
      color: '#fff',
    },
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
    },
  });
};

export default getStyles;

// const styles = StyleSheet.create({
//   container: {
//     display: 'flex',
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text: {
//     marginBottom: 50,
//     fontSize: 22,
//     fontWeight: 'bold',
//   },
// });

// export default styles;
