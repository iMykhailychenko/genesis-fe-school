import { memo, useEffect, DetailedHTMLProps, VideoHTMLAttributes, useMemo, SyntheticEvent } from 'react';

import { throttle } from 'lodash-es';
import { useParams } from 'react-router-dom';

import { VideoLoader } from '@app/components/video-players/video-loader';
import { useSelectedLesson } from '@app/context/selected-lesson.context';
import { useVideo } from '@app/context/vidoe.context';
import { progress } from '@app/utils/progress/progress';
import { CourseId, LessonId } from '@app/utils/progress/types';

const UPDATE_INTERVAL = 1_000;

interface Props extends DetailedHTMLProps<VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement> {
    duration: number;
    lessonId: LessonId;
    currentTime?: number;
}

export const CoursePlayer = memo(({ lessonId, duration, currentTime, ...props }: Props): JSX.Element => {
    const { courseId } = useParams();
    const { setNextVideoIndex, lesson } = useSelectedLesson();
    const { time, isDone } = progress.getLessonProgress(courseId as CourseId, lessonId);

    const { videoRef, trigger, isLoading } = useVideo();
    const poster = lesson ? `${lesson.previewImageLink}/lesson-${lesson.order}.webp` : undefined;

    useEffect(() => {
        if (lesson) {
            trigger(lesson.link);
        }
    }, [lesson]);

    useEffect(() => {
        if (videoRef?.current) {
            videoRef.current.currentTime = isDone ? 0 : time;
        }
    }, [currentTime]);

    const handleTimeUpdate = useMemo(() => {
        return throttle((event: SyntheticEvent<HTMLVideoElement>): void => {
            const currentTime = (event.target as HTMLVideoElement).currentTime ?? 0;

            if (courseId) {
                progress.updateProgress({ courseId, lessonId, time: currentTime, duration });
            }
        }, UPDATE_INTERVAL);
    }, [lessonId, courseId, duration]);

    return (
        <>
            {isLoading && <VideoLoader />}
            <video
                autoPlay
                controls
                poster={poster}
                onEnded={setNextVideoIndex}
                onTimeUpdate={handleTimeUpdate}
                ref={videoRef}
                {...props}
            />
        </>
    );
});

CoursePlayer.displayName = 'CoursePlayer';
