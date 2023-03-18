import { publicApi } from '@app/http/http';
import { AuthResponse } from '@app/queries/auth/auth.types';

export const logInFetcher = (): Promise<AuthResponse> => {
    return publicApi.get('/auth/anonymous?platform=subscriptions').then(response => response.data);
};
