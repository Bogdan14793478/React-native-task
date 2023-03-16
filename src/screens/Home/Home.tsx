import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import getStyles, {TextContainer, TouchBtn, ViewContainer} from './styles';
import {RootState} from '../../redux/actions/interface';
import {
  changeColorFirst,
  changeColorSecond,
  changeColorThird,
} from '../../redux/actions/typeActionColor';
import {AnimatedButton} from '../../components/ReanimatedBtn/ReanimatedBtn';

const Home = () => {
  const dispatch = useDispatch();

  const colorFirstBtn = useSelector(
    (state: RootState) => state.color.colorFirstBtn,
  );
  const colorSecondBtn = useSelector(
    (state: RootState) => state.color.colorSecondBtn,
  );
  const colorThirdBtn = useSelector(
    (state: RootState) => state.color.colorThirdBtn,
  );

  console.log(colorFirstBtn, colorSecondBtn, colorThirdBtn);

  const styles = getStyles();

  const stylesList = StyleSheet.create({
    container: {
      backgroundColor: colorFirstBtn,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 5,
    },
  });

  const changeColorBtn = (name: string): void => {
    switch (name) {
      case 'first':
        dispatch(changeColorFirst(1));
        break;
      case 'second':
        dispatch(changeColorSecond(1));
        break;
      case 'third':
        dispatch(changeColorThird(1));
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.content}>
      <Text style={styles.text}>Try to press</Text>
      <TouchableOpacity onPress={() => changeColorBtn('first')}>
        <View style={stylesList.container}>
          <Text>Press Btn 1</Text>
        </View>
      </TouchableOpacity>

      <TouchBtn onPress={() => changeColorBtn('second')}>
        <ViewContainer colorSecondBtn={colorSecondBtn}>
          <TextContainer>Press Btn 2</TextContainer>
        </ViewContainer>
      </TouchBtn>

      <AnimatedButton
        onPress={() => changeColorBtn('third')}
        label="Press Btn 3"
        backgroundColor={colorThirdBtn}
      />
    </View>
  );
};

export default Home;
