import { Center, Spinner } from '@chakra-ui/react';

export const VideoLoader = (): JSX.Element => {
    return (
        <Center position="absolute" top={0} left={0} w="100%" h="100%" bg="rgba(0, 0, 0, 0.5)">
            <Spinner color="white" />
        </Center>
    );
};
