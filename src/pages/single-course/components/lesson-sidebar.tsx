import { memo } from 'react';

import { Stack } from '@chakra-ui/react';
import { range } from 'lodash-es';

import { LessonItemLoader } from '@app/components/lesson-item/components/lesson-item-loader';
import { LessonItem } from '@app/components/lesson-item/lesson-item';
import { SingleCourseType } from '@app/queries/courses/courses.types';

interface Props {
    isLoading: boolean;
    data?: SingleCourseType;
    selectedIndex: number | null;
    setVideoIndex: (index: number) => void;
}
export const LessonSidebar = memo(({ isLoading, selectedIndex, setVideoIndex, data }: Props): JSX.Element => {
    return (
        <Stack as="aside" w="30%" maxW="600px" minW="400px" spacing={2} p={4}>
            {isLoading
                ? range(5).map(item => <LessonItemLoader key={item} />)
                : data?.lessons.map((lesson, index) => (
                      <LessonItem
                          key={lesson.id}
                          index={index}
                          lesson={lesson}
                          onSelect={setVideoIndex}
                          isActive={index === selectedIndex}
                      />
                  ))}
        </Stack>
    );
});

LessonSidebar.displayName = 'LessonSidebar';
