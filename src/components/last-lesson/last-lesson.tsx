import { Card, CardBody, Text, Image, Heading, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import { useIsDarkTheme } from '@app/hooks/is-dark-theme.hook';
import { lastLessonStorage } from '@app/utils/last-lesson-storage';

export const LastLesson = (): JSX.Element => {
    const lesson = lastLessonStorage.getLesson();
    const isDark = useIsDarkTheme();

    return (
        <>
            {lesson && (
                <Card
                    maxW="1200px"
                    mx="auto"
                    mt={10}
                    variant="outline"
                    direction={{ base: 'column', md: 'row' }}
                    overflow="hidden"
                >
                    <Image
                        objectFit="cover"
                        borderRadius="md"
                        alt={lesson.title}
                        w={{ base: '100%', md: '50%' }}
                        h={{ base: '200px', md: '400px' }}
                        src={`${lesson.previewImageLink}/lesson-${lesson.order}.webp`}
                    />

                    <CardBody
                        px={{ base: 5, md: '50px' }}
                        display="flex"
                        flexDir="column"
                        alignItems="flex-start"
                        justifyContent="center"
                        bg={isDark ? 'gray.900' : 'gray.100'}
                    >
                        <Text>Your last lesson</Text>
                        <Heading mt={3} mb={{ base: 5, md: 10 }}>
                            {lesson.title}
                        </Heading>
                        <Button as={Link} to={`/${lesson.courseId}`} colorScheme="blue">
                            Continue watching
                        </Button>
                    </CardBody>
                </Card>
            )}
        </>
    );
};
