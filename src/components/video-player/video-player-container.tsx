import { ReactNode } from 'react';

import { BoxProps } from '@chakra-ui/layout/dist/box';
import { Box } from '@chakra-ui/react';

interface Props extends BoxProps {
    objectFit?: 'cover' | 'contain';
    children: ReactNode;
}
export const VideoPlayerContainer = ({ children, objectFit = 'cover', borderRadius = 'md', ...props }: Props): JSX.Element => {
    return (
        <Box
            bg="black"
            position="relative"
            borderRadius={borderRadius}
            sx={{ video: { h: '100%', w: '100%', objectFit, borderRadius } }}
            {...props}
        >
            {children}
        </Box>
    );
};
