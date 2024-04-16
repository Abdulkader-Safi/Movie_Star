import { forwardRef } from 'react';
import { ButtonProps, TouchableOpacity } from 'react-native';

import { ButtonText, Button as TButton } from '../tamagui.config';

export const Button = forwardRef<TouchableOpacity, ButtonProps>(({ onPress, title }, ref) => {
  return (
    <TButton onPress={onPress}>
      <ButtonText>{title}</ButtonText>
    </TButton>
  );
});
