import { privateApi } from '@app/http/http';
import { CoursesListType, SingleCourseType } from '@app/queries/courses/courses.types';

export const coursesListFetcher = (): Promise<CoursesListType> => {
    return privateApi.get<CoursesListType>('/core/preview-courses').then(response => response.data);
};

export const singleCourseFetcher = (courseId?: string): Promise<SingleCourseType> => {
    return privateApi.get<SingleCourseType>(`/core/preview-courses/${courseId}`).then(response => response.data);
};
