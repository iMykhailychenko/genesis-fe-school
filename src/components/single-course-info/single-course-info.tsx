import { Flex, Stack, Heading, Text, Tag } from '@chakra-ui/react';

import { Rating } from '@app/components/rating/rating';
import { SingleCourseType } from '@app/queries/courses/courses.types';

interface Props {
    course: SingleCourseType;
}
export const SingleCourseInfo = ({ course }: Props): JSX.Element => {
    return (
        <Stack spacing={5}>
            <Flex alignItems="center" flexWrap="wrap">
                {course.meta.skills.map(skill => (
                    <Tag mr={1} mb={2} key={skill} size="lg" colorScheme="red">
                        {skill}
                    </Tag>
                ))}
            </Flex>

            <Flex alignItems="flex-start" justifyContent="space-between">
                <Heading mr={8}>{course.title}</Heading>
                <Rating value={course.rating} mt={2} />
            </Flex>

            <Text fontSize="lg">{course.description}</Text>
        </Stack>
    );
};
