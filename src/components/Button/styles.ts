import {ButtonProps} from './types';
import {StyleSheet} from 'react-native';
import {getTheme} from '../../helpers/helpers';

const getStyles = (type: ButtonProps['type'], size: ButtonProps['size']) => {
  const {dark} = getTheme();

  const btnSizes = {
    big: {
      paddingVertical: 10,
      paddingHorizontal: 16,
    },
    small: {
      paddingVertical: 4,
      paddingHorizontal: 8,
    },
  };
  const btnSize = size && btnSizes[size] ? btnSizes[size] : btnSizes['big']; // big by default

  const textSizes = {
    big: {
      fontSize: 16,
    },
    small: {
      fontSize: 14,
    },
  };
  const textSize = size && textSizes[size] ? textSizes[size] : textSizes['big']; // big by default

  const baseStyles: any = {
    button: {
      cursor: 'pointer',
      borderRadius: 999,
      alignSelf: 'baseline',
      backgroundColor: 'red',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      ...btnSize,
    },

    text: {
      ...textSize,
    },

    icon: {
      width: 16,
      height: 16,
    },
  };

  const additionalStyles: any = {
    withoutBackground: {
      backgroundColor: 'none',
    },
    withoutIcon: {
      minWidth: 80, // this is need for buttons without icons and with small text
    },
    iconWithMargin: {
      marginRight: 10,
    },
    uniformPadding: {
      paddingVertical: btnSize.paddingHorizontal,
    },
  };

  const primary = StyleSheet.create({
    ...baseStyles,

    btnDisabled: {
      backgroundColor: dark ? 'rgb(70, 71, 72)' : 'rgba(34, 37, 40, 0.05)',
    },
    // btnNormal: {
    //   backgroundColor: colors.accent.green,
    // },
    btnPressed: {
      backgroundColor: 'rgb(32, 143, 128)',
    },

    txtDisabled: {
      color: dark ? 'rgb(107, 108, 109)' : 'rgb(173, 174, 175)',
    },
    txtNormal: {
      color: 'rgb(255, 255, 255)',
    },
    txtPressed: {
      color: 'rgb(225, 225, 225)',
    },

    ...additionalStyles,
  });

  const secondary = StyleSheet.create({
    ...baseStyles,

    btnDisabled: {
      backgroundColor: dark ? 'rgb(36, 37, 38)' : 'rgb(225, 225, 225)',
    },
    btnNormal: {
      backgroundColor: dark ? 'rgb(47, 48, 48)' : 'rgb(255, 255, 255)',
    },
    btnPressed: {
      backgroundColor: dark ? 'rgb(70, 71, 72)' : 'rgb(232, 232, 232)',
    },

    txtDisabled: {
      color: dark ? 'rgb(79, 80, 81)' : 'rgb(181, 181, 182)',
    },
    txtNormal: {
      color: dark ? 'rgb(65, 216, 194)' : 'rgb(9, 147, 147)',
    },
    txtPressed: {
      color: dark ? 'rgb(32, 148, 148)' : 'rgb(6, 120, 120)',
    },

    ...additionalStyles,
  });

  const simple = StyleSheet.create({
    ...baseStyles,

    btnDisabled: {
      backgroundColor: dark ? 'rgb(36, 37, 38)' : 'rgb(225, 225, 225)',
    },
    btnNormal: {
      backgroundColor: dark ? 'rgb(47, 48, 48)' : 'rgb(255, 255, 255)',
    },
    btnPressed: {
      backgroundColor: dark ? 'rgb(70, 71, 72)' : 'rgb(232, 232, 232)',
    },

    txtDisabled: {
      color: dark ? 'rgb(70, 71, 72)' : 'rgb(181, 181, 182)',
    },
    txtNormal: {
      color: dark ? 'rgb(185, 186, 186)' : 'rgb(91, 92, 94)',
    },
    txtPressed: {
      color: dark ? 'rgb(255, 255, 255)' : 'rgb(30, 30, 30)',
    },

    ...additionalStyles,
  });

  switch (type) {
    case 'primary':
      return primary;
    case 'secondary':
      return secondary;

    case 'simple':
      return simple;

    default:
      return primary;
  }
};

export default getStyles;
