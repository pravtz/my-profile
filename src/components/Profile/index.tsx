import { Avatar, Box, Text } from '@chakra-ui/react';

type ProfileProps = {
  name: string;
  avatar?: {
    path: string;
  };
  bio?: string;
};

export const Profile = ({ name, avatar, bio }: ProfileProps) => {
  return (
    <Box>
      <Avatar name={name} src={avatar?.path} />

      <Text>{name}</Text>
      {bio && <Text>{bio}</Text>}
    </Box>
  );
};
