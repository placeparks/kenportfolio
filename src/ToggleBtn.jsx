import React from 'react';
import { useColorMode, Switch, FormControl, FormLabel, Stack } from '@chakra-ui/react';

const ToggleBtn = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <FormControl display="flex" alignItems="center" mr="2">
      <FormLabel htmlFor="theme-toggle" mb="0">
        {isDark ? 'Dark' : 'Light'} Mode
      </FormLabel>
      <Switch id="theme-toggle" isChecked={isDark} onChange={toggleColorMode} />
    </FormControl>
  );
};

export default ToggleBtn;
