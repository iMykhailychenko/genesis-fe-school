import { CourseId, LessonId } from '@app/queries/courses/courses.types';

export interface SingleLessonProgressType {
    isDone: boolean;
    time: number;
}

export interface LessonsProgressType {
    order: LessonId[];
    lessons: {
        [key: LessonId]: SingleLessonProgressType;
    };
}

export interface UpdateProgressParams {
    courseId: CourseId;
    lessonId: LessonId;
    time: number;
    duration: number;
}
