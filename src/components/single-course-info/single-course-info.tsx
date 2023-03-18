import { memo } from 'react';

import { Flex, Stack, Heading, Text, Tag } from '@chakra-ui/react';

import { Rating } from '@app/components/rating/rating';

interface Props {
    title: string;
    rating: number;
    description: string;
    skills: string[];
}
export const SingleCourseInfo = memo(({ title, rating, description, skills }: Props): JSX.Element => {
    return (
        <Stack spacing={5}>
            <Flex alignItems="center" flexWrap="wrap">
                {skills.map(skill => (
                    <Tag mr={1} mb={2} key={skill} size="lg" colorScheme="red">
                        {skill}
                    </Tag>
                ))}
            </Flex>

            <Flex alignItems="flex-start" justifyContent="space-between">
                <Heading mr={8}>{title}</Heading>
                <Rating value={rating} mt={2} />
            </Flex>

            <Text fontSize="lg">{description}</Text>
        </Stack>
    );
});

SingleCourseInfo.displayName = 'SingleCourseInfo';
