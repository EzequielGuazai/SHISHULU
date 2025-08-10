import { Flex, Loader } from '@mantine/core';

export const PageLoader = () => {
  return (
    <Flex
      gap="md"
      justify={"center"}
      align={"center"}
      direction="column"
      h="85vh"
    >
      <Loader type="bars" />
    </Flex>

  );
};
