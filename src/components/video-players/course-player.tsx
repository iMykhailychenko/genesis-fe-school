import { memo, useEffect, DetailedHTMLProps, VideoHTMLAttributes } from 'react';

import { useParams } from 'react-router-dom';

import { VideoLoader } from '@app/components/video-players/components/video-loader';
import { VideoTimeUpdate } from '@app/components/video-players/components/video-time-update';
import { useSelectedLesson } from '@app/context/selected-lesson.context';
import { useVideo } from '@app/context/vidoe.context';
import { useHlsPlayer } from '@app/hooks/hls-player.hook';
import { CourseId } from '@app/queries/courses/courses.types';
import { getPosterUrl } from '@app/utils/poster';

type Props = DetailedHTMLProps<VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>;

export const CoursePlayer = memo((props: Props): JSX.Element => {
    const params = useParams();
    const courseId = params.courseId as CourseId;

    const { videoRef } = useVideo();
    const { isLoading, trigger } = useHlsPlayer();
    const { setNextVideoIndex, lesson } = useSelectedLesson();

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
            <video
                autoPlay
                controls
                poster={getPosterUrl(lesson)}
                onEnded={setNextVideoIndex}
                disablePictureInPicture
                ref={videoRef}
                {...props}
            />
        </>
    );
});

CoursePlayer.displayName = 'CoursePlayer';
