import { IconButton, Tooltip } from '@chakra-ui/react';
import { TbResize } from 'react-icons/all';
import { useNavigate } from 'react-router-dom';

import { usePip } from '@app/context/pip.context';
import { useSelectedLesson } from '@app/context/selected-lesson.context';

export const CollapseVideo = (): JSX.Element => {
    const navigate = useNavigate();

    const { togglePiP } = usePip();
    const { data, lesson, isLoading } = useSelectedLesson();

    const handleCollapseVideo = async (): Promise<void> => {
        if (lesson && data?.id) {
            togglePiP(lesson, data.id);
            navigate('/');
        }
    };

    return (
        <Tooltip label="Collapse video">
            <IconButton aria-label="Collapse video" onClick={handleCollapseVideo} isLoading={isLoading}>
                <TbResize />
            </IconButton>
        </Tooltip>
    );
};
