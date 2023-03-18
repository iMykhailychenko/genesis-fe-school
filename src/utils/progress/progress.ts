import { get } from 'lodash-es';

import { Storage, StorageType } from '@app/utils/progress/storage';
import {
    CourseId,
    CourseProgressType,
    LessonId,
    LessonsProgressType,
    SingleLessonProgressType,
    UpdateProgressParams,
} from '@app/utils/progress/types';

class Progress {
    private readonly IS_DONE_OFFSET = 5;
    public static readonly PROGRESS_KEY = 'course-progress-key';

    constructor(private readonly storage: StorageType<CourseProgressType>) {}

    public getCourseProgress = (courseId: CourseId): LessonsProgressType => {
        const progress = this.storage.getLocalData();
        return get(progress, [courseId], { lessons: {}, order: [] }) as LessonsProgressType;
    };

    public getLessonProgress = (courseId: CourseId, lessonId: LessonId): SingleLessonProgressType => {
        const progress = this.storage.getLocalData();
        return get(progress, [courseId, 'lessons', lessonId], { time: 0, isDone: false }) as SingleLessonProgressType;
    };

    public updateProgress = (newData: UpdateProgressParams): void => {
        const prev = this.storage.getLocalData() || {};

        const nextState = this.mergeState(prev, newData);
        if (nextState) {
            this.storage.setLocalData(nextState);
        }
    };

    private mergeState = (prevState: CourseProgressType, newData: UpdateProgressParams): CourseProgressType | null => {
        const { courseId, lessonId, time, duration } = newData;

        const prevOrder = get(prevState, [courseId, 'order'], []) as LessonId[];
        const prevLessons = get(prevState, [courseId, 'lessons'], {});

        const prevIsDone = get(prevLessons, [lessonId, 'isDone'], false);
        if (prevIsDone) return null;

        return {
            ...prevState,
            [courseId]: {
                lessons: {
                    ...prevLessons,
                    [lessonId]: {
                        isDone: duration - time < this.IS_DONE_OFFSET,
                        time: time || get(prevLessons, [lessonId, 'time'], 0),
                    },
                },
                order: prevOrder.includes(lessonId) ? prevOrder : [...prevOrder, lessonId],
            },
        };
    };
}

export const progress = new Progress(new Storage<CourseProgressType>(Progress.PROGRESS_KEY));
