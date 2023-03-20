import { HStack, Button, Skeleton } from '@chakra-ui/react';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/all';

import { PlaybackRate } from '@app/components/video-controls/playback-rate';
import { CollapseVideo } from '@app/components/video-controls/сollapse-vidoe-button';
import { useSelectedLesson } from '@app/context/selected-lesson.context';

export const VideoControls = (): JSX.Element => {
    const { lesson, isLoading, selectedIndex, setVideoIndex } = useSelectedLesson();
    const index = selectedIndex ?? 0;

    const handlePrev = (): void => {
        setVideoIndex(index <= 0 ? 0 : index - 1);
    };

    const handleNext = (): void => {
        setVideoIndex(index + 1);
    };

    const isPrevDisabled = index <= 0;

    return (
        <HStack spacing={6} flexDir={{ base: 'column', lg: 'row' }}>
            <HStack spacing={2} mb={{ base: 5, lg: 0 }}>
                <Button
                    leftIcon={<IoChevronBackOutline />}
                    opacity={isPrevDisabled ? 0.5 : 1}
                    disabled={isPrevDisabled}
                    onClick={handlePrev}
                    isLoading={isLoading}
                >
                    Prev video
                </Button>
                <Button rightIcon={<IoChevronForwardOutline />} onClick={handleNext} isLoading={isLoading}>
                    Next video
                </Button>
            </HStack>

            <HStack spacing={6}>
                {lesson && !lesson.link ? null : <CollapseVideo />}

                {isLoading ? <Skeleton h={10} w="150px" /> : <PlaybackRate />}
            </HStack>
        </HStack>
    );
};
