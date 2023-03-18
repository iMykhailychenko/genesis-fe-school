import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { authToken } from '@app/http/http';
import { logInFetcher } from '@app/queries/auth/auth.fetcher';
import { AuthResponse } from '@app/queries/auth/auth.types';

export const useAuthQuery = (): UseQueryResult<AuthResponse> => {
    const isTokenPresent = authToken.refresh();

    const queryData = useQuery<AuthResponse>({
        queryKey: ['auth'],
        queryFn: logInFetcher,
        enabled: !isTokenPresent,
        onError: authToken.remove,
        onSuccess: authToken.set,
        staleTime: 0,
    });

    return isTokenPresent ? ({ ...queryData, isLoading: false } as UseQueryResult<AuthResponse>) : queryData;
};
