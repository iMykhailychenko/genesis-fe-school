import { DetailedHTMLProps, SyntheticEvent, useMemo, VideoHTMLAttributes } from 'react';

import { throttle } from 'lodash-es';
import { useParams } from 'react-router-dom';

import { VideoPlayer } from '@app/components/video-player/video-player';
import { progess } from '@app/utils/progress/progess';
import { LessonId, CourseId } from '@app/utils/progress/types';

const UPDATE_INTERVAL = 1_000;

interface Props extends Omit<DetailedHTMLProps<VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>, 'ref'> {
    src: string;
    poster: string;
    duration: number;
    lessonId: LessonId;
    setNextVideoIndex: () => void;
}

export const VideoPlayerProgress = ({ lessonId, duration, setNextVideoIndex, ...props }: Props): JSX.Element => {
    const { courseId } = useParams();

    const { time, isDone } = progess.getLessonProgress(courseId as CourseId, lessonId);

    const handleTimeUpdate = useMemo(() => {
        return throttle((event: SyntheticEvent<HTMLVideoElement>) => {
            const currentTime = (event.target as HTMLVideoElement).currentTime;
            if (courseId) {
                progess.updateProgress({ courseId, lessonId, time: currentTime, duration });
            }
        }, UPDATE_INTERVAL);
    }, [lessonId, courseId, duration]);

    return (
        <VideoPlayer
            controls
            onEnded={setNextVideoIndex}
            currentTime={isDone ? 0 : time}
            onTimeUpdate={handleTimeUpdate}
            {...props}
        />
    );
};
