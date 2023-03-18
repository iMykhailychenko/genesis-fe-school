import { Card, CardBody, CardFooter, Stack, HStack, Skeleton, Button } from '@chakra-ui/react';
import { FaPlay } from 'react-icons/all';

export const CourseCardLoader = (): JSX.Element => {
    return (
        <Card direction={{ base: 'column', md: 'row' }} overflow="hidden" variant="outline">
            <Skeleton w="100%" maxW={{ base: '100%', md: '300px' }} h="230px" />

            <Stack w="100%">
                <CardBody>
                    <Stack flex={1} spacing={5}>
                        <Skeleton h={5} w="70%" />

                        <Skeleton h={3} w="90%" />

                        <HStack>
                            <Skeleton h={4} w={20} />
                            <Skeleton h={4} w={20} />
                            <Skeleton h={4} w={20} />
                        </HStack>
                    </Stack>
                </CardBody>

                <CardFooter alignItems="center" justifyContent="space-between">
                    <Button as="div" variant="solid" colorScheme="blue" leftIcon={<FaPlay />} opacity={0.5}>
                        Start Now
                    </Button>

                    <HStack>
                        <Skeleton h={8} w="50px" />
                        <Skeleton h={8} w="100px" />
                        <Skeleton h={8} w="40px" />
                    </HStack>
                </CardFooter>
            </Stack>
        </Card>
    );
};
