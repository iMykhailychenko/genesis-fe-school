import { useToast } from '@chakra-ui/react';

interface ErrorToastParams {
    title?: string;
    description?: string;
}
type UseErrorToast = (params?: ErrorToastParams) => void;

export const useErrorToast = (): UseErrorToast => {
    const toast = useToast();

    return (params: ErrorToastParams = {}) =>
        toast({
            title: params.title ?? 'Error',
            description: params.description ?? 'We encountered a technical error',
            status: 'error',
            duration: 5_000,
            isClosable: true,
        });
};
