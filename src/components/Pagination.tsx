import { Button, Stack } from "@chakra-ui/react";

function Pagination() {
  return (
    <Stack>
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="pink"
        disabled
        _disabled={{ bgColor: "pink.500", curso: "default" }}
      >
        1
      </Button>
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        bgColor="gray.700"
        _hover={{ bg: "gray.500" }}
      >
        1
      </Button>
    </Stack>
  );
}

export default Pagination;
