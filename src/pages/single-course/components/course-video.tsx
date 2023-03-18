import { memo } from 'react';

import { Skeleton, Stack } from '@chakra-ui/react';

import { SingleCourseInfo } from '@app/components/single-course-info/single-course-info';
import { VideoPlayerContainer } from '@app/components/video-player/video-player-container';
import { VideoPlayerProgress } from '@app/components/video-player/video-player-progress';
import { LessonsType, SingleCourseType } from '@app/queries/courses/courses.types';

interface Props {
    isLoading: boolean;
    lesson?: LessonsType;
    data?: SingleCourseType;
    setNextVideoIndex: () => void;
}
export const CourseVideo = memo(({ isLoading, lesson, data, setNextVideoIndex }: Props): JSX.Element => {
    return (
        <Stack flex={1} pt={4} pl={4} spacing={10}>
            {isLoading ? (
                <Skeleton minH="500px" h="calc(100vh - 350px)" borderRadius="md" />
            ) : (
                lesson && (
                    <VideoPlayerContainer minH="500px" h="calc(100vh - 350px)">
                        <VideoPlayerProgress
                            src={lesson.link}
                            lessonId={lesson.id}
                            duration={lesson.duration}
                            setNextVideoIndex={setNextVideoIndex}
                            poster={`${lesson.previewImageLink}/lesson-${lesson.order}.webp`}
                        />
                    </VideoPlayerContainer>
                )
            )}

            {data && <SingleCourseInfo course={data} />}
        </Stack>
    );
});

CourseVideo.displayName = 'CourseVideo';
