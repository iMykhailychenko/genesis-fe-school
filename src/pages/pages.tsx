import { lazy, Suspense, useEffect } from 'react';

import { Box } from '@chakra-ui/react';
import { Routes, Route, Outlet, useLocation } from 'react-router-dom';

import { HEADER_HEIGHT } from '@app/constanta/ui.constants';

const CourseList = lazy(() => import('./course-list/course-list'));
const SingleCourse = lazy(() => import('./single-course/single-course'));

const SuspenseWrapper = (): JSX.Element => {
    return (
        <Suspense fallback={null}>
            <Outlet />
        </Suspense>
    );
};

export const Pages = (): JSX.Element => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, [pathname]);

    return (
        <Box pt={HEADER_HEIGHT}>
            <Routes>
                <Route path="" element={<SuspenseWrapper />}>
                    <Route path="" element={<CourseList />} />
                    <Route path="/:courseId" element={<SingleCourse />} />
                </Route>
            </Routes>
        </Box>
    );
};
