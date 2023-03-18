import axios from 'axios';

import { logInFetcher } from '@app/queries/auth/auth.fetcher';
import { AuthResponse } from '@app/queries/auth/auth.types';

const AUTH_KEY = 'jwt-auth-key';

export const publicApi = axios.create({
    baseURL: 'https://api.wisey.app/api/v1',
    // baseURL: 'http://localhost:3000',
});

export const privateApi = axios.create({
    baseURL: 'https://api.wisey.app/api/v1',
    // baseURL: 'http://localhost:3000',
});

export const authToken = {
    set(data: AuthResponse): void {
        localStorage.setItem(AUTH_KEY, JSON.stringify(data));
        privateApi.defaults.headers.Authorization = `Bearer ${data.token}`;
    },

    remove(): void {
        localStorage.setItem(AUTH_KEY, '');
        privateApi.defaults.headers.Authorization = null;
    },

    refresh(): boolean {
        const json = localStorage.getItem(AUTH_KEY);
        if (!json) return false;

        const { token }: AuthResponse = JSON.parse(json);
        if (!token) return false;

        privateApi.defaults.headers.Authorization = `Bearer ${token}`;
        return true;
    },
};

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
