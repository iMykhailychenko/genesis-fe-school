import { useEffect, useRef } from 'react';

import { VideoLoader } from '@app/components/video-players/components/video-loader';
import { VideoTimeUpdate } from '@app/components/video-players/components/video-time-update';
import { useHlsPlayer } from '@app/hooks/hls-player.hook';
import { CourseId, LessonType } from '@app/queries/courses/courses.types';
import { getPosterUrl } from '@app/utils/poster';

type Props = {
    courseId: CourseId;
    lesson: LessonType;
};

export const PipPlayer = ({ courseId, lesson }: Props): JSX.Element => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const { isLoading, trigger } = useHlsPlayer();

    useEffect(() => {
        if (lesson) {
            trigger(videoRef, lesson.link);
        }
    }, [lesson]);

    return (
        <>
            {isLoading ? (
                <VideoLoader />
            ) : (
                lesson && (
                    <VideoTimeUpdate videoRef={videoRef} courseId={courseId} lessonId={lesson.id} duration={lesson.duration} />
                )
            )}
            <video ref={videoRef} autoPlay poster={getPosterUrl(lesson)} disablePictureInPicture />
        </>
    );
};
