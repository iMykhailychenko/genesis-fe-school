import { useColorMode } from '@chakra-ui/react';

export const useIsDarkTheme = (): boolean => {
    const { colorMode } = useColorMode();
    return colorMode === 'dark';
};
