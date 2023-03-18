import { RefObject, useCallback } from 'react';

import { useDisclosure } from '@chakra-ui/react';
import Hls from 'hls.js';

type TriggerParamsHlsPlayer = (src?: string) => void;

interface UseHlsPlayer {
    isLoading: boolean;
    trigger: TriggerParamsHlsPlayer;
}
export const useHlsPlayer = (videoRef: RefObject<HTMLVideoElement>): UseHlsPlayer => {
    const { isOpen, onClose, onOpen } = useDisclosure();

    const trigger: TriggerParamsHlsPlayer = useCallback(
        src => {
            onOpen();
            let hls: Hls;

            if (Hls.isSupported() && videoRef.current && src) {
                hls = new Hls();
                hls.loadSource(src);
                hls.attachMedia(videoRef.current);

                hls.on(Hls.Events.MEDIA_ATTACHED, onClose);
                hls.on(Hls.Events.ERROR, onClose);
            }

            return () => {
                if (hls) {
                    hls.off(Hls.Events.MEDIA_ATTACHED, onClose);
                    hls.off(Hls.Events.ERROR, onClose);
                    hls.destroy();
                }
            };
        },
        [onClose, onOpen],
    );

    return { isLoading: isOpen, trigger };
};
