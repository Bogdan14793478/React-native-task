import {StyleSheet} from 'react-native';
import {getTheme} from '../../../helpers/helpers';

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
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
    },
    // bottomSheet: {
    //   overflow: 'hidden',
    //   position: 'absolute',
    //   width: '100%',
    //   zIndex: 1,
    //   // Here you can set a common style for all bottom sheets, or nothing if you
    //   // want different designs
    //   backgroundColor: colors.background,
    //   borderRadius: 16,
    // },
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
