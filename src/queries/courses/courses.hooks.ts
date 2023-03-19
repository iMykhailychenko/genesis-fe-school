import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { useErrorToast } from '@app/hooks/error-toast.hook';
import { coursesListFetcher, singleCourseFetcher } from '@app/queries/courses/courses.fetcher';
import { CoursesListType, SingleCourseType } from '@app/queries/courses/courses.types';

export const useCoursesListQuery = (): UseQueryResult<CoursesListType> => {
    const errorToast = useErrorToast();

    return useQuery<CoursesListType>({
        queryKey: ['courses'],
        queryFn: coursesListFetcher,
        onError: () => errorToast(),
    });
};

export const useSingleCourseQuery = (courseId?: string): UseQueryResult<SingleCourseType> => {
    const errorToast = useErrorToast();

    return useQuery<SingleCourseType>({
        queryKey: ['courses', courseId],
        queryFn: () => singleCourseFetcher(courseId),
        enabled: Boolean(courseId),
        onError: () => errorToast(),
    });
};
