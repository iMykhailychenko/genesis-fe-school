import React, { useEffect } from 'react';

import { Stack, HStack, Button, Flex } from '@chakra-ui/react';
import { IoIosArrowBack } from 'react-icons/all';
import { Link } from 'react-router-dom';

import { Header } from '@app/components/header/header';
import { SelectedLessonProvider } from '@app/context/selected-lesson.context';
import { CourseVideo } from '@app/pages/single-course/components/course-video';
import { LessonSidebar } from '@app/pages/single-course/components/lesson-sidebar';
import { CollapseVideo } from '@app/pages/single-course/components/сollapse-vidoe';

const SingleCourse = (): JSX.Element => {
    useEffect(() => {
        if (document.pictureInPictureElement) {
            document.exitPictureInPicture();
        }
    }, []);

    return (
        <Stack>
            <Header>
                <HStack spacing={4}>
                    <Button as={Link} to="/" leftIcon={<IoIosArrowBack />}>
                        Go Back
                    </Button>

                    <CollapseVideo />
                </HStack>
            </Header>

            <SelectedLessonProvider>
                <Flex minH="100vh">
                    <CourseVideo />
                    <LessonSidebar />
                </Flex>
            </SelectedLessonProvider>
        </Stack>
    );
};

export default SingleCourse;
