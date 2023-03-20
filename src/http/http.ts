import axios from 'axios';

import { logInFetcher } from '@app/queries/auth/auth.fetcher';
import { AuthResponse } from '@app/queries/auth/auth.types';
import { AuthToken } from '@app/utils/auth-token';
import { Storage } from '@app/utils/storage';

export const publicApi = axios.create({
    baseURL: 'https://api.wisey.app/api/v1',
});

export const privateApi = axios.create({
    baseURL: 'https://api.wisey.app/api/v1',
});

export const authToken = new AuthToken(new Storage<AuthResponse>(), privateApi);

privateApi.interceptors.response.use(
    conf => conf,
    async error => {
        const request = error.config;

        if (error?.response?.status === 401) {
            if (request._isRetry) {
                authToken.remove();
                return Promise.reject(error);
            }

            request._isRetry = true;
            try {
                authToken.set(await logInFetcher());
                return privateApi.request(request);
            } catch {
                return Promise.reject(error);
            }
        }

        return Promise.reject(error);
    },
);
