import { CourseId, LessonType } from '@app/queries/courses/courses.types';

import { StorageType, Storage } from './storage';

type StoredLessonType = LessonType & { courseId: CourseId };

class LastLessonStorage {
    public readonly STORAGE_KEY = 'last-lesson-key';
    constructor(private storage: StorageType<StoredLessonType>) {}

    setLesson = (value: StoredLessonType): void => {
        this.storage.setLocalData(this.STORAGE_KEY, value);
    };

    getLesson = (): StoredLessonType | null => {
        return this.storage.getLocalData(this.STORAGE_KEY);
    };
}

export const lastLessonStorage = new LastLessonStorage(new Storage<StoredLessonType>());
