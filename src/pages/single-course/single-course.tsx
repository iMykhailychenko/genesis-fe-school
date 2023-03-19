import React from 'react';

import { HStack, Button, Flex } from '@chakra-ui/react';
import { IoIosArrowBack } from 'react-icons/all';
import { Link } from 'react-router-dom';

import { Header } from '@app/components/header/header';
import { SelectedLessonProvider } from '@app/context/selected-lesson.context';
import { VideoProvider } from '@app/context/vidoe.context';
import { CourseVideo } from '@app/pages/single-course/components/course-video';
import { LessonSidebar } from '@app/pages/single-course/components/lesson-sidebar';

const SingleCourse = (): JSX.Element => {
    return (
        <VideoProvider>
            <Header>
                <HStack spacing={4}>
                    <Button as={Link} to="/" leftIcon={<IoIosArrowBack />}>
                        Go Back
                    </Button>
                </HStack>
            </Header>

            <SelectedLessonProvider>
                <Flex flexDir={{ base: 'column', xl: 'row' }} mt={0}>
                    <CourseVideo />
                    <LessonSidebar />
                </Flex>
            </SelectedLessonProvider>
        </VideoProvider>
    );
};

export default SingleCourse;
