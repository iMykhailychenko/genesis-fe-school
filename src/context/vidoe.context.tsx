import { createContext, ReactNode, useRef, RefObject, useState } from 'react';

interface VideoType {
    src: string;
    setSrc: (newSrc: string) => void;
    poster: string;
    setPoster: (newPoster: string) => void;
    videoRef: RefObject<HTMLVideoElement>;
}

const VideoContext = createContext<VideoType>({} as VideoType);

interface Props {
    children: ReactNode;
}

export const VideoProvider = ({ children }: Props): JSX.Element => {
    const [src, setSrc] = useState('');
    const [poster, setPoster] = useState('');
    const videoRef = useRef<HTMLVideoElement>(null);

    return <VideoContext.Provider value={{ videoRef, src, poster, setPoster, setSrc }}>{children}</VideoContext.Provider>;
};
