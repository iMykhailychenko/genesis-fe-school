import { Flex, Stack, Heading, Text, Tag } from '@chakra-ui/react';

import { Rating } from '@app/components/rating/rating';
import { useSelectedLesson } from '@app/context/selected-lesson.context';

export const CourseInfo = (): JSX.Element => {
    const { data } = useSelectedLesson();
    return (
        <Stack spacing={5}>
            <Flex alignItems="center" flexWrap="wrap">
                {data?.meta?.skills.map(skill => (
                    <Tag mr={1} mb={2} key={skill} size="lg" colorScheme="red">
                        {skill}
                    </Tag>
                ))}
            </Flex>

            <Flex alignItems="flex-start" justifyContent="space-between" flexDir={{ base: 'column-reverse', md: 'row' }}>
                <Heading mr={{ base: 0, md: 8 }} mt={{ base: 4, md: 0 }}>
                    {data?.title}
                </Heading>
                <Rating value={data?.rating} mt={2} />
            </Flex>

            <Text fontSize="lg">{data?.description}</Text>
        </Stack>
    );
};
