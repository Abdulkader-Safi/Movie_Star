import { ReactNode } from 'react';
import { H2, Separator, Theme, YStack } from 'tamagui';

import { EditScreenInfo } from './EditScreenInfo';

type ScreenContentProps = {
  title: string;
  path: string;
  children?: ReactNode;
};

export const ScreenContent = ({ title, path, children }: ScreenContentProps) => {
  return (
    <Theme name="light">
      <YStack flex={1} alignItems="center" justifyContent="center">
        <H2>{title}</H2>
        <Separator />
        <EditScreenInfo path={path} />
        {children}
      </YStack>
    </Theme>
  );
};
