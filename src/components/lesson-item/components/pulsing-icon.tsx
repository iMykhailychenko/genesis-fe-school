import { Box } from '@chakra-ui/react';
import { BsFillRecordCircleFill } from 'react-icons/all';

export const PulsingIcon = (): JSX.Element => {
    return (
        <Box
            borderRadius="50%"
            animation="pulse 2s infinite"
            sx={{
                '@keyframes pulse': {
                    '0%': {
                        transform: 'scale(0.95)',
                        boxShadow: '0 0 0 0 rgba(0, 0, 0, 0.7)',
                    },
                    '70%': {
                        transform: 'scale(1)',
                        boxShadow: '0 0 0 10px rgba(0, 0, 0, 0)',
                    },
                    '100%': {
                        transform: 'scale(0.95)',
                        boxShadow: '0 0 0 0 rgba(0, 0, 0, 0)',
                    },
                },
            }}
        >
            <BsFillRecordCircleFill />
        </Box>
    );
};
