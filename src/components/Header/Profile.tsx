import { Avatar, Text, Box, Flex } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Herbert Araújo</Text>
          <Text color="gray.300" fontSize="small">
            herbertaraujo.contact@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Herbert Araújo"
        src="https://github.com/hertaraujo.png"
      />
    </Flex>
  );
}

export default Profile;
