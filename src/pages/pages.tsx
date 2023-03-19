import { lazy, Suspense, useEffect } from 'react';

import { Box } from '@chakra-ui/react';
import { Routes, Route, Outlet, useLocation } from 'react-router-dom';

import { HEADER_HEIGHT } from '@app/constanta/ui.constants';
import { PipProvider } from '@app/context/pip.context';

const Home = lazy(() => import('./home/home'));
const SingleCourse = lazy(() => import('./single-course/single-course'));
const NotFound = lazy(() => import('./not-found/not-found'));

const PagesWrapper = (): JSX.Element => {
    return (
        <PipProvider>
            <Suspense fallback={null}>
                <Outlet />
            </Suspense>
        </PipProvider>
    );
};

export const Pages = (): JSX.Element => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, [pathname]);

    return (
        <Box py={HEADER_HEIGHT + 20} px={4}>
            <Routes>
                <Route path="" element={<PagesWrapper />}>
                    <Route path="" element={<Home />} />
                    <Route path="/:courseId" element={<SingleCourse />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </Box>
    );
};
