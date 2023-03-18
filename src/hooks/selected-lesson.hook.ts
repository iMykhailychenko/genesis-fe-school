import { useCallback, useEffect, useState } from 'react';

import { get } from 'lodash-es';
import { useParams } from 'react-router-dom';

import { LessonsType, SingleCourseType } from '@app/queries/courses/courses.types';
import { progess } from '@app/utils/progress/progess';

interface UseSelectedLesson {
    lesson?: LessonsType;
    selectedIndex: number | null;
    setNextVideoIndex: () => void;
    setVideoIndex: (index: number) => void;
}

export const useSelectedLesson = (data?: SingleCourseType): UseSelectedLesson => {
    const { courseId } = useParams();

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
            const progress = progess.getCourseProgress(courseId);
            if (!progress.order.length) {
                setSelectedIndex(0);
            }

            const index = progress.order.findIndex(lessonId => !progress.lessons[lessonId].isDone);

            if (index === -1) {
                const nextIndex = progress.order.length;
                const isNextVideoUnlocked = data.lessons[nextIndex]?.status === 'unlocked';
                setSelectedIndex(isNextVideoUnlocked ? nextIndex : 0);

                return;
            }

            setSelectedIndex(index);
        }
    }, [data, courseId]);

    return { selectedIndex, setNextVideoIndex, setVideoIndex, lesson };
};
