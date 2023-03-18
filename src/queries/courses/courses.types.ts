export interface CourseMetaType {
    slug: string;
    skills: string[];
    courseVideoPreview: {
        link: string;
        duration: number;
        previewImageLink: string;
    };
}

export interface LessonsType {
    id: string;
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
    id: string;
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
    lessons: LessonsType[];
}

export type CoursesListItemType = Omit<SingleCourseType, 'lessons'> & { lessonsCount: number };

export interface CoursesListType {
    courses: CoursesListItemType[];
}
