import React, { ReactNode } from 'react';

import { Button, Center, Image, Stack, Text } from '@chakra-ui/react';

import { NetworkError } from '@app/components/network-error/network-error';
import { PageLoader } from '@app/components/page-loader/page-loader';
import { useAuthQuery } from '@app/queries/auth/auth.hooks';

interface Props {
    children: ReactNode;
}
export const AuthWrapper = ({ children }: Props): JSX.Element => {
    const { isLoading, isError } = useAuthQuery();

    if (isLoading) {
        return <PageLoader />;
    }

    if (isError) {
        return (
            <Center h="100vh">
                <Stack spacing={10} alignItems="center">
                    <Image src="/genesis-fe-school/disconnected.png" alt="Network error" w="200px" />
                    <Text w="250px" textAlign="center">
                        Ooops. Something went wrong
                    </Text>
                </Stack>
            </Center>
        );
    }

    return <>{children}</>;
};
