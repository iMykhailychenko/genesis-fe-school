import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { coursesListFetcher, singleCourseFetcher } from '@app/queries/courses/courses.fetcher';
import { CoursesListType, SingleCourseType } from '@app/queries/courses/courses.types';

export const useCoursesListQuery = (): UseQueryResult<CoursesListType> => {
    return useQuery<CoursesListType>({
        queryKey: ['courses'],
        queryFn: coursesListFetcher,
    });
};

export const useSingleCourseQuery = (courseId: string): UseQueryResult<SingleCourseType> => {
    return useQuery<SingleCourseType>({
        queryKey: ['courses', courseId],
        queryFn: () => singleCourseFetcher(courseId),
    });
};
