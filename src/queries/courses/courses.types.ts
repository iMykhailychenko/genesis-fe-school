export type CourseId = string;
export type LessonId = string;

export interface CourseMetaType {
    slug: string;
    skills: string[];
    courseVideoPreview: {
        link: string;
        duration: number;
        previewImageLink: string;
    };
}

export interface LessonType {
    id: LessonId;
    title: string;
    duration: number;
    order: number;
    type: string;
    status: string;
    link: string;
    previewImageLink: string;
    meta: CourseMetaType | null;
}

export interface SingleCourseType {
    id: CourseId;
    title: string;
    tags: string[];
    launchDate: string;
    status: string;
    description: string;
    duration: number;
    containsLockedLessons: boolean;
    previewImageLink: string;
    rating: number;
    meta: CourseMetaType;
    lessons: LessonType[];
}

export type CoursesListItemType = Omit<SingleCourseType, 'lessons'> & { lessonsCount: number };

export interface CoursesListType {
    courses: CoursesListItemType[];
}
