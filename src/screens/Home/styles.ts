import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';
import {getTheme} from '../../helpers/helpers';

const getStyles = () => {
  const {colors} = getTheme();

  return StyleSheet.create({
    content: {
      flex: 1,
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

export const TouchBtn = styled.TouchableOpacity`
  margin-bottom: 10px;
`;

export const ViewContainer = styled.View`
  background-color: ${(props: {colorSecondBtn: string}) =>
    props.colorSecondBtn};
  justify-content: center;
  align-items: center;
  padding: 5px;
`;

export const TextContainer = styled.Text``;
