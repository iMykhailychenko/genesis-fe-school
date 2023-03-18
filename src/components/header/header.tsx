import { ReactNode } from 'react';

import { IconButton, Flex, useColorMode } from '@chakra-ui/react';
import { FcIdea, FcNoIdea } from 'react-icons/all';

import { HEADER_HEIGHT } from '@app/constanta/ui.constants';

interface Props {
    children?: ReactNode;
}
export const Header = ({ children }: Props): JSX.Element => {
    const { colorMode, setColorMode } = useColorMode();
    const isDark = colorMode === 'dark';
    const toggleMode = () => setColorMode(isDark ? 'light' : 'dark');

    return (
        <Flex
            px={4}
            w="100%"
            top={0}
            left={0}
            zIndex="modal"
            h={HEADER_HEIGHT}
            position="fixed"
            borderTop="1px"
            borderBottom="1px"
            alignItems="center"
            justifyContent="space-between"
            bg={isDark ? 'gray.700' : 'white'}
            borderColor={isDark ? 'gray.600' : 'gray.300'}
        >
            {children || <span />}
            <IconButton aria-label="Change theme" onClick={toggleMode} fontSize="25px">
                {isDark ? <FcIdea /> : <FcNoIdea />}
            </IconButton>
        </Flex>
    );
};
