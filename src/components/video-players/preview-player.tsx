import { memo, DetailedHTMLProps, VideoHTMLAttributes, useRef, useEffect } from 'react';

import { VideoLoader } from '@app/components/video-players/video-loader';
import { useHlsPlayer } from '@app/hooks/hls-player.hook';

interface Props extends DetailedHTMLProps<VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement> {
    src: string;
    poster: string;
    currentTime?: number;
}

export const PreviewPlayer = memo(({ src, ...props }: Props): JSX.Element => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const { isLoading, trigger } = useHlsPlayer(videoRef);

    useEffect(() => {
        trigger(src);
    }, [trigger, src]);

    return (
        <>
            {isLoading && <VideoLoader />}
            <video autoPlay ref={videoRef} {...props} />
        </>
    );
});

PreviewPlayer.displayName = 'PreviewPlayer';
