import { Card, CardBody, Skeleton, HStack, Center } from '@chakra-ui/react';
import { AiOutlineFieldTime, FaPlay } from 'react-icons/all';

import { useIsDarkTheme } from '@app/hooks/is-dark-theme.hook';

export const LessonItemLoader = (): JSX.Element => {
    const isDark = useIsDarkTheme();

    return (
        <Card border="1px" textAlign="left" bg={isDark ? 'gray.800' : 'white'} borderColor={isDark ? 'gray.600' : 'gray.400'}>
            <HStack>
                <Center
                    m={2}
                    h={20}
                    w={20}
                    fontSize="lg"
                    borderRadius="md"
                    color="gray.500"
                    bg={isDark ? 'gray.600' : 'gray.100'}
                >
                    <FaPlay />
                </Center>
                <CardBody flex={1} pl={0}>
                    <Skeleton mb={2} h={5} w="80%" />

                    <HStack spacing={2}>
                        <AiOutlineFieldTime />
                        <Skeleton h={4} w={10} />
                    </HStack>
                </CardBody>
            </HStack>
        </Card>
    );
};
