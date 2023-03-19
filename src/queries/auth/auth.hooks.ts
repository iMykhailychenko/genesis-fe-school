import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { useErrorToast } from '@app/hooks/error-toast.hook';
import { authToken } from '@app/http/http';
import { logInFetcher } from '@app/queries/auth/auth.fetcher';
import { AuthResponse } from '@app/queries/auth/auth.types';

export const useAuthQuery = (): UseQueryResult<AuthResponse> => {
    const isTokenPresent = authToken.refresh();
    const errorToast = useErrorToast();

    const queryData = useQuery<AuthResponse>({
        queryKey: ['auth'],
        queryFn: logInFetcher,
        enabled: !isTokenPresent,
        onSuccess: authToken.set,
        staleTime: 0,
        onError: () => {
            authToken.remove();
            errorToast();
        },
    });

    return isTokenPresent ? ({ ...queryData, isLoading: false } as UseQueryResult<AuthResponse>) : queryData;
};
