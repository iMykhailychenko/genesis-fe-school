import { RefObject, useEffect } from 'react';

import { throttle } from 'lodash-es';

import { CourseId, LessonId } from '@app/queries/courses/courses.types';
import { progress } from '@app/utils/progress/progress';

const UPDATE_INTERVAL = 1_000;

// To improve user experience, don't remember the first five seconds of video,
// so next time user open the course video will start from the beginning
const UPDATE_TIME_OFFSET = 5;

interface Props {
    duration: number;
    courseId: CourseId;
    lessonId: LessonId;
    videoRef: RefObject<HTMLVideoElement>;
}

export const VideoTimeUpdate = ({ videoRef, courseId, lessonId, duration }: Props): JSX.Element => {
    useEffect(() => {
        const onTimeUpdate = throttle((): void => {
            const currentTime = videoRef.current?.currentTime ?? 0;

            if (currentTime > UPDATE_TIME_OFFSET) {
                progress.updateProgress({ courseId, lessonId, time: currentTime, duration });
            }
        }, UPDATE_INTERVAL);

        if (videoRef?.current) {
            videoRef.current.addEventListener('timeupdate', onTimeUpdate);
        }

        return () => {
            onTimeUpdate.cancel();
            if (videoRef?.current) {
                videoRef.current.removeEventListener('timeupdate', onTimeUpdate);
            }
        };
    }, [courseId, lessonId]);

    useEffect(() => {
        if (videoRef.current) {
            const { time, isDone } = progress.getLessonProgress(courseId, lessonId);
            videoRef.current.currentTime = isDone ? 0 : time;
        }
    }, [courseId, lessonId]);

    return <></>;
};
