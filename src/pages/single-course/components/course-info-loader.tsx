import { Flex, Stack, Tag, Skeleton } from '@chakra-ui/react';
import { range } from 'lodash-es';

import { Rating } from '@app/components/rating/rating';

const skeletonArray = range(3);

export const CourseInfoLoader = (): JSX.Element => {
    return (
        <Stack spacing={5}>
            <Flex alignItems="center" flexWrap="wrap">
                {skeletonArray.map(item => (
                    <Tag mr={1} mb={2} key={item} size="lg" colorScheme="red">
                        <Skeleton h={3} w="150px" />
                    </Tag>
                ))}
            </Flex>

            <Flex alignItems="flex-start" justifyContent="space-between">
                <Skeleton mr={8} h={5} w="60%" />
                <Rating value={5} mt={2} />
            </Flex>

            <Skeleton h={4} w="80%" />
        </Stack>
    );
};
