import {useTheme} from '@react-navigation/native';
import {ITheme} from '../styles/types';

export const getTheme = useTheme as () => ITheme;
