import { get } from 'lodash-es';

import { CourseId, LessonId } from '@app/queries/courses/courses.types';
import { LessonsProgressType, SingleLessonProgressType, UpdateProgressParams } from '@app/utils/progress/types';
import { Storage, StorageType } from '@app/utils/storage';

class Progress {
    private readonly IS_DONE_OFFSET = 5;
    public static readonly STORAGE_PREFIX = 'progress-key-';

    constructor(private readonly storage: StorageType<LessonsProgressType>) {}

    public getCourseProgress = (courseId: CourseId): LessonsProgressType => {
        return this.storage.getLocalData(courseId) ?? ({ lessons: {}, order: [] } as LessonsProgressType);
    };

    public getLessonProgress = (courseId: CourseId, lessonId: LessonId): SingleLessonProgressType => {
        const progress = this.storage.getLocalData(courseId);
        return get(progress, ['lessons', lessonId], { time: 0, isDone: false }) as SingleLessonProgressType;
    };

    public updateProgress = ({ courseId, lessonId, time, duration }: UpdateProgressParams): void => {
        const { lessons, order } = this.getCourseProgress(courseId);
        const { isDone, time: prevTime } = this.getLessonProgress(courseId, lessonId);
        if (isDone) return;

        const newState = {
            lessons: {
                ...lessons,
                [lessonId]: {
                    isDone: duration - time < this.IS_DONE_OFFSET,
                    time: time || prevTime,
                },
            },
            order: order.includes(lessonId) ? order : [...order, lessonId],
        };

        this.storage.setLocalData(courseId, newState);
    };
}

export const progress = new Progress(new Storage<LessonsProgressType>(Progress.STORAGE_PREFIX));
