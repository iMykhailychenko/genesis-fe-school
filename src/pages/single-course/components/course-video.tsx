import { Skeleton, Stack } from '@chakra-ui/react';

import { VideoControls } from '@app/components/video-controls/video-controls';
import { PlayerContainer } from '@app/components/video-players/components/player-container';
import { CoursePlayer } from '@app/components/video-players/course-player';
import { useSelectedLesson } from '@app/context/selected-lesson.context';
import { CourseInfo } from '@app/pages/single-course/components/course-info';
import { CourseInfoLoader } from '@app/pages/single-course/components/course-info-loader';

export const CourseVideo = (): JSX.Element => {
    const { isLoading, data } = useSelectedLesson();

    return (
        <Stack flex={1} spacing={{ base: 4, md: 10 }}>
            {isLoading ? (
                <Skeleton minH="500px" h="calc(100vh - 350px)" borderRadius="md" />
            ) : (
                <PlayerContainer minH="500px" h="calc(100vh - 350px)" objectFit="contain">
                    <CoursePlayer />
                </PlayerContainer>
            )}

            <VideoControls />

            {isLoading && <CourseInfoLoader />}

            {data && <CourseInfo />}
        </Stack>
    );
};
