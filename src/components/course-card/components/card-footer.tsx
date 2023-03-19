import { memo } from 'react';

import { Button, HStack, Tag, Text, Tooltip, CardFooter as ChakraCardFooter, Flex } from '@chakra-ui/react';
import { AiOutlineFieldTime, BiLockOpen, FaPlay } from 'react-icons/all';
import { Link } from 'react-router-dom';

import { Rating } from '@app/components/rating/rating';
import { getCourseTime } from '@app/utils/time';

interface Props {
    id: string;
    rating: number;
    duration: number;
    containsLockedLessons: boolean;
}
export const CardFooter = memo(({ id, rating, duration, containsLockedLessons }: Props): JSX.Element => {
    return (
        <ChakraCardFooter
            pt={0}
            flexDir={{ base: 'column-reverse', md: 'row' }}
            justifyContent={{ base: 'flex-start', md: 'space-between' }}
        >
            <Button as={Link} to={`/${id}`} variant="solid" colorScheme="blue" leftIcon={<FaPlay />}>
                Start Now
            </Button>

            <Flex mb={{ base: 5, md: 0 }} flexWrap="wrap">
                <Tooltip label="Duration" aria-label="Duration">
                    <HStack spacing={2} w={{ base: '100%', sm: 'auto' }} mr={4}>
                        <Text>{getCourseTime(duration)}</Text>
                        <AiOutlineFieldTime />
                    </HStack>
                </Tooltip>

                <Rating value={rating} mr={4} />

                {containsLockedLessons && (
                    <Tooltip label="Contains Locked Lessons" aria-label="Contains Locked Lessons">
                        <Tag size={{ base: 'md', md: 'lg' }}>
                            <BiLockOpen />
                        </Tag>
                    </Tooltip>
                )}
            </Flex>
        </ChakraCardFooter>
    );
});

CardFooter.displayName = 'CardFooter';
