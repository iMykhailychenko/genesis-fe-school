import { LessonType } from '@app/queries/courses/courses.types';

export const getPosterUrl = (lesson?: LessonType): string | undefined => {
    return lesson ? `${lesson.previewImageLink}/lesson-${lesson.order}.webp` : undefined;
};
