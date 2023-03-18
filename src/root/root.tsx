import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';

import { AuthWrapper } from '@app/components/auth-wrapper/auth-wrapper';
import { Pages } from '@app/pages/pages';
import { theme } from '@app/utils/theme';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 5_000,
            refetchOnWindowFocus: false,
        },
    },
});

export const Root = (): JSX.Element => {
    return (
        <ChakraProvider theme={theme}>
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <AuthWrapper>
                        <Pages />
                    </AuthWrapper>
                </BrowserRouter>
            </QueryClientProvider>
        </ChakraProvider>
    );
};
