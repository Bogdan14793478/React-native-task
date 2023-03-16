import {StyleProp, ViewStyle} from 'react-native';

type Type = 'primary' | 'secondary' | 'simple';
type Size = 'big' | 'small';

/**
 * @memberof Button
 * @typedef {Object} ButtonProps
 */
export type ButtonProps = {
  /** Come as body of button */
  children?: string;
  /** 'primary' | 'secondary' | 'simple' */
  type?: Type;
  background?: boolean;
  /** 'big' | 'small' */
  size?: Size;
  onPress: () => void;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
};
