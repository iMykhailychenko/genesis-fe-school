import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from 'react';

import { get } from 'lodash-es';
import { useParams } from 'react-router-dom';

import { useSingleCourseQuery } from '@app/queries/courses/courses.hooks';
import { LessonsType, SingleCourseType } from '@app/queries/courses/courses.types';
import { progress } from '@app/utils/progress/progress';

interface UseSelectedLesson {
    lesson?: LessonsType;
    data?: SingleCourseType;
    isLoading: boolean;
    selectedIndex: number | null;
    setNextVideoIndex: () => void;
    setVideoIndex: (index: number) => void;
}

const SelectedLessonContext = createContext<UseSelectedLesson>({} as UseSelectedLesson);

interface Props {
    children: ReactNode;
}
export const SelectedLessonProvider = ({ children }: Props): JSX.Element => {
    const { courseId } = useParams();

    const { data, isLoading } = useSingleCourseQuery(courseId as string);

    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const lesson = get(data, ['lessons', selectedIndex ?? 0]);

    const setNextVideoIndex = useCallback(() => {
        if (data) {
            setSelectedIndex(prev => {
                const nextIndex = (prev ?? 1) + 1;

                const isNextLessonUnlocked = data.lessons[nextIndex]?.status === 'unlocked';
                return isNextLessonUnlocked ? nextIndex : 0;
            });
        }
    }, [data]);

    const setVideoIndex = useCallback(
        (nextIndex: number) => {
            if (data) {
                const isNextLessonUnlocked = data.lessons[nextIndex]?.status === 'unlocked';
                const index = isNextLessonUnlocked ? nextIndex : 0;
                setSelectedIndex(index);
            }
        },
        [data],
    );

    useEffect(() => {
        if (data && courseId) {
            const { order, lessons } = progress.getCourseProgress(courseId);

            // User opened the video for the first time
            if (!order.length) {
                const index = data.lessons.findIndex(lesson => lesson.status === 'unlocked');
                setSelectedIndex(index);

                return;
            }

            const index = data.lessons.findIndex(lesson => lesson.status === 'unlocked' && !lessons[lesson.id].isDone);
            setSelectedIndex(index === -1 ? 0 : index);
        }
    }, [data, courseId]);

    return (
        <SelectedLessonContext.Provider value={{ selectedIndex, setNextVideoIndex, setVideoIndex, lesson, data, isLoading }}>
            {children}
        </SelectedLessonContext.Provider>
    );
};

export const useSelectedLesson = (): UseSelectedLesson => {
    return useContext(SelectedLessonContext);
};
