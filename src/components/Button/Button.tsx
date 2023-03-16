/**
 * @namespace Button
 * @category Components
 * @subcategory Shared
 *  */

import {Text, Pressable} from 'react-native';
import React from 'react';
import {ButtonProps} from './types';
import getStyles from './styles';

/**
 * Button component.
 * You can use this component to display several types of buttons, like
 * 'primary', 'secondary' and 'simple' button. Also you can toggle the background
 * of button, change icon and size of button, and disable button using parameters.
 *
 * @memberof Button
 * @param {ButtonProps} params
 *
 * @example
 * // Use this tag to display button
 * <Button
 *  icon={MyIcon}
 *  type="primary"
 *  onPress={() => {}}
 *  background={false}
 *  disabled
 * >Some text here<Button/>
 */
const Button: React.FC<ButtonProps> = ({
  children: text,
  type = 'primary',
  background = true,
  size = 'big',
  onPress,
  disabled = false,
  style,
}) => {
  const hasText = typeof text !== 'undefined';
  const styles = getStyles(type, size);

  const stylesButtonDynamic = disabled ? styles.btnDisabled : styles.btnNormal;
  const stylesTextDynamic = disabled ? styles.txtDisabled : styles.txtNormal;

  return (
    <Pressable
      style={({pressed}) => [
        styles.button,
        stylesButtonDynamic,
        pressed && styles.btnPressed,
        !background && styles.withoutBackground,
        style,
      ]}
      onPress={!disabled ? onPress : null}>
      {({pressed}) => {
        return (
          <>
            {hasText && (
              <Text
                selectable={false}
                style={[
                  styles.text,
                  stylesTextDynamic,
                  pressed && styles.txtPressed,
                ]}>
                {text}
              </Text>
            )}
          </>
        );
      }}
    </Pressable>
  );
};

export default Button;
