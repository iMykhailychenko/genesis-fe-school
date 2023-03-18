import { Skeleton, Stack } from '@chakra-ui/react';

import { SingleCourseInfo } from '@app/components/single-course-info/single-course-info';
import { CoursePlayer } from '@app/components/video-players/course-player';
import { PlayerContainer } from '@app/components/video-players/player-container';
import { useSelectedLesson } from '@app/context/selected-lesson.context';

export const CourseVideo = (): JSX.Element => {
    const { isLoading, data, lesson } = useSelectedLesson();

    return (
        <Stack flex={1} pt={4} pl={4} spacing={10}>
            {isLoading ? (
                <Skeleton minH="500px" h="calc(100vh - 350px)" borderRadius="md" />
            ) : (
                lesson && (
                    <PlayerContainer minH="500px" h="calc(100vh - 350px)">
                        <CoursePlayer lessonId={lesson.id} duration={lesson.duration} />
                    </PlayerContainer>
                )
            )}

            {data && (
                <SingleCourseInfo
                    title={data.title}
                    description={data.description}
                    rating={data.rating}
                    skills={data.meta.skills}
                />
            )}
        </Stack>
    );
};
