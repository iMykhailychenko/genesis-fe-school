import { useState } from 'react';

import { Button, Center, Heading, Spinner, Stack } from '@chakra-ui/react';
import { range } from 'lodash-es';

import { CourseCardLoader } from '@app/components/course-card/components/course-card-loader';
import { CourseCard } from '@app/components/course-card/course-card';
import { useCoursesListQuery } from '@app/queries/courses/courses.hooks';

const skeletonArray = range(5);

export const CoursesCards = (): JSX.Element => {
    const { data, isLoading } = useCoursesListQuery();

    const [page, setPage] = useState(1);
    const handleLoadMore = (): void => setPage(prev => prev + 1);

    const offsetData = data ? data.courses?.slice(0, 10 * page) : [];
    const showLoadMoreButton = offsetData.length < (data?.courses.length ?? 0);

    return (
        <>
            <Stack w="100%" maxW="1000px" mx="auto" mt={10}>
                <Heading mb={5} size="sm">
                    Total courses: {isLoading ? <Spinner size="sm" ml={2} /> : data?.courses.length ?? 0}
                </Heading>

                <Stack spacing={6} mx="auto">
                    {isLoading
                        ? skeletonArray.map(item => <CourseCardLoader key={item} />)
                        : offsetData.map(course => <CourseCard key={course.id} course={course} />)}
                </Stack>
            </Stack>

            <Center mt={10} mb={20}>
                {showLoadMoreButton && (
                    <Button variant="outline" onClick={handleLoadMore}>
                        Load More
                    </Button>
                )}
            </Center>
        </>
    );
};
