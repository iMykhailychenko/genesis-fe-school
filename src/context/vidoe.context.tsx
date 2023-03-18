import { createContext, ReactNode, useRef, RefObject, useContext, useState } from 'react';

import { useHlsPlayer } from '@app/hooks/hls-player.hook';

interface VideoType {
    isLoading: boolean;
    videoRef: RefObject<HTMLVideoElement>;
    trigger: (src: string) => void;
}

const VideoContext = createContext<VideoType>({} as VideoType);

interface Props {
    children: ReactNode;
}

export const VideoProvider = ({ children }: Props): JSX.Element => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const { isLoading, trigger } = useHlsPlayer(videoRef);

    return <VideoContext.Provider value={{ videoRef, isLoading, trigger }}>{children}</VideoContext.Provider>;
};

export const useVideo = (): VideoType => {
    return useContext(VideoContext);
};
