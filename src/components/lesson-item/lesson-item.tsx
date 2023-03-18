import { memo } from 'react';

import { Card, CardBody, Heading, Text, HStack, Center } from '@chakra-ui/react';
import { AiOutlineFieldTime, BiLockOpen, FaPlay } from 'react-icons/all';

import { DoneIndicator } from '@app/components/lesson-item/components/done-indicator';
import { PulsingIcon } from '@app/components/lesson-item/components/pulsing-icon';
import { useIsDarkTheme } from '@app/hooks/is-dark-theme.hook';
import { LessonsType } from '@app/queries/courses/courses.types';
import { getCourseTime } from '@app/utils/time';

interface Props {
    index: number;
    isActive: boolean;
    lesson: LessonsType;
    onSelect: (order: number) => void;
}
export const LessonItem = memo(({ index, lesson, onSelect, isActive }: Props): JSX.Element => {
    const isDark = useIsDarkTheme();
    const isLocked = lesson.status !== 'unlocked';

    const handleSelect = (): void => {
        if (!isLocked) {
            onSelect(index);
        }
    };

    const activeBorder = isDark ? 'white' : 'blue';
    const borderColor = isDark ? 'gray.600' : 'gray.400';

    const lockedBg = isDark ? 'gray.700' : 'gray.50';
    const unLockedBg = isDark ? 'gray.800' : 'white';

    return (
        <Card
            border="1px"
            textAlign="left"
            onClick={handleSelect}
            as={isLocked ? 'div' : 'button'}
            bg={isLocked ? lockedBg : unLockedBg}
            borderColor={isActive ? activeBorder : borderColor}
            _hover={{ boxShadow: isLocked ? 'none' : 'lg' }}
        >
            <HStack>
                <Center
                    m={2}
                    h={20}
                    w={20}
                    fontSize="lg"
                    borderRadius="md"
                    bg={isDark ? 'gray.600' : 'gray.100'}
                    color={isActive ? 'blue.500' : 'gray.500'}
                >
                    {isLocked ? <BiLockOpen /> : isActive ? <PulsingIcon /> : <FaPlay />}
                </Center>
                <CardBody flex={1} pl={0} opacity={isLocked ? 0.2 : 1}>
                    <HStack spacing={2} mb={2}>
                        <DoneIndicator lessonId={lesson.id} />
                        <Heading size="sm">{lesson.title}</Heading>
                    </HStack>

                    <HStack spacing={2}>
                        <AiOutlineFieldTime />
                        <Text>{getCourseTime(lesson.duration)}</Text>
                    </HStack>
                </CardBody>
            </HStack>
        </Card>
    );
});

LessonItem.displayName = 'LessonItem';
