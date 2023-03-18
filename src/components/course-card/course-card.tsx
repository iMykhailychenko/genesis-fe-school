import { Card, Stack } from '@chakra-ui/react';

import { CardBody } from '@app/components/course-card/components/card-body';
import { CardFooter } from '@app/components/course-card/components/card-footer';
import { CardMedia } from '@app/components/course-card/components/card-media';
import { CoursesListItemType } from '@app/queries/courses/courses.types';

interface Props {
    course: CoursesListItemType;
}

export const CourseCard = ({ course }: Props): JSX.Element => {
    return (
        <Card direction={{ base: 'column', md: 'row' }} variant="outline">
            <CardMedia
                title={course.title}
                imageLink={course.previewImageLink}
                videoLink={course.meta?.courseVideoPreview?.link}
            />

            <Stack w="100%">
                <CardBody
                    courseId={course.id}
                    tags={course.tags}
                    title={course.title}
                    description={course.description}
                    lessonsCount={course.lessonsCount}
                    skills={course.meta?.skills ?? []}
                />

                <CardFooter
                    id={course.id}
                    rating={course.rating}
                    duration={course.duration}
                    containsLockedLessons={course.containsLockedLessons}
                />
            </Stack>
        </Card>
    );
};
