import { Stack } from '@chakra-ui/react';
import { range } from 'lodash-es';

import { LessonItemLoader } from '@app/components/lesson-item/components/lesson-item-loader';
import { LessonItem } from '@app/components/lesson-item/lesson-item';
import { useSelectedLesson } from '@app/context/selected-lesson.context';

export const LessonSidebar = (): JSX.Element => {
    const { data, isLoading, selectedIndex, setVideoIndex } = useSelectedLesson();

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
};
