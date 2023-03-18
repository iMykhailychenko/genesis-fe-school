import { Center, Spinner } from '@chakra-ui/react';

export const PageLoader = (): JSX.Element => {
    return (
        <Center position="fixed" top={0} left={0} w="100%" h="100%" zIndex="modal">
            <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl" />
        </Center>
    );
};
