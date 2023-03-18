import { IconButton } from '@chakra-ui/react';
import { TbResize } from 'react-icons/all';
import { useNavigate } from 'react-router-dom';

import { useVideo } from '@app/context/vidoe.context';
import { useErrorToast } from '@app/hooks/error-toast.hook';

export const CollapseVideo = (): JSX.Element => {
    const navigate = useNavigate();
    const { videoRef } = useVideo();
    const errorToast = useErrorToast();

    const handleCollapseVideo = async (): Promise<void> => {
        try {
            await videoRef.current?.requestPictureInPicture();
            await videoRef.current?.play();
            await navigate('/');
        } catch {
            errorToast();
        }
    };

    return (
        <IconButton aria-label="Collapse video" onClick={handleCollapseVideo}>
            <TbResize />
        </IconButton>
    );
};
