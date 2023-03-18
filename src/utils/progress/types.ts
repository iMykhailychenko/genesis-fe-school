export type CourseId = string;
export type LessonId = string;

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

export interface CourseProgressType {
    [key: CourseId]: LessonsProgressType;
}

export interface UpdateProgressParams {
    courseId: CourseId;
    lessonId: LessonId;
    time: number;
    duration: number;
}
