import React, { ReactNode } from 'react';

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
        return <>Error</>;
    }

    return <>{children}</>;
};
