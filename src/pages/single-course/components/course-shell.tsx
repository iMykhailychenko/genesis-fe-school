import React from 'react';

import { Flex } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

import { useSelectedLesson } from '@app/hooks/selected-lesson.hook';
import { CourseVideo } from '@app/pages/single-course/components/course-video';
import { LessonSidebar } from '@app/pages/single-course/components/lesson-sidebar';
import { useSingleCourseQuery } from '@app/queries/courses/courses.hooks';

export const CourseShell = (): JSX.Element => {
    const { courseId } = useParams();

    const { data, isLoading } = useSingleCourseQuery(courseId as string);

    const { lesson, selectedIndex, setNextVideoIndex, setVideoIndex } = useSelectedLesson(data);

    return (
        <Flex minH="100vh">
            <CourseVideo isLoading={isLoading} lesson={lesson} data={data} setNextVideoIndex={setNextVideoIndex} />
            <LessonSidebar data={data} isLoading={isLoading} selectedIndex={selectedIndex} setVideoIndex={setVideoIndex} />
        </Flex>
    );
};
