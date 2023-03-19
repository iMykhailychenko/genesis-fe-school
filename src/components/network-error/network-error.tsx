import { ReactNode, useEffect } from 'react';

import { Center, Stack, Text, Image, Button, useDisclosure } from '@chakra-ui/react';

interface Props {
    children: ReactNode;
}
export const NetworkError = ({ children }: Props): JSX.Element => {
    const { isOpen, onOpen } = useDisclosure();

    useEffect(() => {
        window.addEventListener('offline', onOpen);
        return () => {
            window.removeEventListener('offline', onOpen);
        };
    }, []);

    const handleReload = () => {
        document.location.reload();
    };

    return (
        <>
            {isOpen ? (
                <Center h="100vh">
                    <Stack spacing={10} alignItems="center">
                        <Image src="/disconnected.png" alt="Network error" w="200px" />
                        <Text w="250px" textAlign="center">
                            It seems that you have problems with the Internet
                        </Text>
                        <Button onClick={handleReload}>Reconnect</Button>
                    </Stack>
                </Center>
            ) : (
                children
            )}
        </>
    );
};
