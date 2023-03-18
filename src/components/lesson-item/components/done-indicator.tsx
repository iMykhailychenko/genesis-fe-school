import { Box } from '@chakra-ui/react';
import { FcApproval } from 'react-icons/all';
import { useParams } from 'react-router-dom';

import { progress } from '@app/utils/progress/progress';
import { CourseId, LessonId } from '@app/utils/progress/types';

interface Props {
    lessonId: LessonId;
}
export const DoneIndicator = ({ lessonId }: Props): JSX.Element => {
    const { courseId } = useParams();

    const data = progress.getLessonProgress(courseId as CourseId, lessonId);

    return data.isDone ? (
        <Box fontSize="lg">
            <FcApproval />
        </Box>
    ) : (
        <></>
    );
};
