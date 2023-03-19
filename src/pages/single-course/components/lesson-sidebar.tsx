import { Stack } from '@chakra-ui/react';
import { range } from 'lodash-es';

import { LessonItemLoader } from '@app/components/lesson-item/components/lesson-item-loader';
import { LessonItem } from '@app/components/lesson-item/lesson-item';
import { useSelectedLesson } from '@app/context/selected-lesson.context';

const skeletonArray = range(5);

export const LessonSidebar = (): JSX.Element => {
    const { data, isLoading, selectedIndex, setVideoIndex } = useSelectedLesson();

    return (
        <Stack
            as="aside"
            spacing={2}
            pl={{ base: 0, xl: 4 }}
            mt={{ base: 10, xl: 0 }}
            w={{ base: '100%', xl: '30%' }}
            maxW={{ base: '100%', xl: '600px' }}
            minW={{ base: '100%', xl: '400px' }}
        >
            {isLoading
                ? skeletonArray.map(item => <LessonItemLoader key={item} />)
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
