import { createContext, ReactNode, RefObject, useContext, useRef } from 'react';

interface VideoContextType {
    videoRef: RefObject<HTMLVideoElement>;
}
const VideoContext = createContext<VideoContextType>({} as VideoContextType);

interface Props {
    children: ReactNode;
}
export const VideoProvider = ({ children }: Props): JSX.Element => {
    const videoRef = useRef<HTMLVideoElement>(null);

    return <VideoContext.Provider value={{ videoRef }}>{children}</VideoContext.Provider>;
};

export const useVideo = (): VideoContextType => {
    return useContext(VideoContext);
};
