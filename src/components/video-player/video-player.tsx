import { memo, useEffect, useState, useRef, DetailedHTMLProps, VideoHTMLAttributes } from 'react';

import { Center, Spinner } from '@chakra-ui/react';
import Hls from 'hls.js';

interface Props extends DetailedHTMLProps<VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement> {
    src: string;
    poster: string;
    currentTime?: number;
}

export const VideoPlayer = memo(({ src, currentTime, ...props }: Props): JSX.Element => {
    const videoRef = useRef<HTMLVideoElement>(null);

    const [isLoading, setIsLoading] = useState(true);
    const stopLoader = (): void => setIsLoading(false);

    useEffect(() => {
        let hls: Hls;

        if (Hls.isSupported() && videoRef.current && src) {
            hls = new Hls();
            hls.loadSource(src);
            hls.attachMedia(videoRef.current);

            hls.on(Hls.Events.MEDIA_ATTACHED, stopLoader);
            hls.on(Hls.Events.ERROR, stopLoader);
        }

        return () => {
            if (hls) {
                hls.off(Hls.Events.MEDIA_ATTACHED, stopLoader);
                hls.off(Hls.Events.ERROR, stopLoader);
                hls.destroy();
            }
        };
    }, [src, stopLoader]);

    useEffect(() => {
        if (videoRef.current && currentTime) {
            videoRef.current.currentTime = currentTime;
        }
    }, [currentTime]);

    return (
        <>
            {isLoading && (
                <Center position="absolute" top={0} left={0} w="100%" h="100%" bg="rgba(0, 0, 0, 0.5)">
                    <Spinner color="white" />
                </Center>
            )}
            <video autoPlay ref={videoRef} {...props} />
        </>
    );
});

VideoPlayer.displayName = 'VideoPlayer';
