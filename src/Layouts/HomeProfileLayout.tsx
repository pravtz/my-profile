import { Box } from '@chakra-ui/react';

type HomeProfileLayoutType = {
  children: React.ReactNode;
};

export const HomeProfileLayout = ({ children }: HomeProfileLayoutType) => {
  return <Box minH='100vh'>{children}</Box>;
};
