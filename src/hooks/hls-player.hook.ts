import { RefObject, useCallback, useRef } from 'react';

import { useDisclosure } from '@chakra-ui/react';
import Hls from 'hls.js';

type TriggerParamsHlsPlayer = (videoRef: RefObject<HTMLVideoElement>, src?: string) => void;

interface UseHlsPlayer {
    hls?: Hls;
    isLoading: boolean;
    trigger: TriggerParamsHlsPlayer;
}
export const useHlsPlayer = (): UseHlsPlayer => {
    const hlsRef = useRef<Hls>();
    const { isOpen, onClose, onOpen } = useDisclosure();

    const trigger: TriggerParamsHlsPlayer = useCallback(
        (videoRef, src) => {
            onOpen();

            if (Hls.isSupported() && videoRef.current && src) {
                hlsRef.current = new Hls();
                hlsRef.current.loadSource(src);
                hlsRef.current.attachMedia(videoRef.current);

                hlsRef.current.on(Hls.Events.MANIFEST_PARSED, onClose);
                hlsRef.current.on(Hls.Events.ERROR, onClose);
            }

            return () => {
                if (hlsRef.current) {
                    hlsRef.current.off(Hls.Events.MANIFEST_PARSED, onClose);
                    hlsRef.current.off(Hls.Events.ERROR, onClose);
                    hlsRef.current.destroy();
                }
            };
        },
        [onClose, onOpen],
    );

    return { isLoading: isOpen, trigger, hls: hlsRef.current };
};
