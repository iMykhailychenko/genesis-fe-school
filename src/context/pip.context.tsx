import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from 'react';

import { Center } from '@chakra-ui/react';
import { IoOpenOutline } from 'react-icons/all';
import { useNavigate, useParams } from 'react-router-dom';

import { PlayerContainer } from '@app/components/video-players/components/player-container';
import { PipPlayer } from '@app/components/video-players/pip-player';
import { CourseId, LessonType } from '@app/queries/courses/courses.types';

interface PipContextType {
    lesson?: LessonType;
    courseId?: CourseId;
    togglePiP: (lesson?: LessonType, courseId?: CourseId) => void;
}
const PipContext = createContext<PipContextType>({} as PipContextType);

interface Props {
    children: ReactNode;
}
export const PipProvider = ({ children }: Props): JSX.Element => {
    const params = useParams();
    const navigate = useNavigate();

    const [lesson, setLesson] = useState<LessonType | undefined>();
    const [courseId, setCourseId] = useState<CourseId | undefined>();

    const togglePiP = useCallback(
        (lesson?: LessonType, courseId?: CourseId): void => {
            setLesson(lesson);
            setCourseId(courseId);
        },
        [setLesson, setCourseId],
    );

    const handleOpenVideo = () => {
        if (courseId) {
            navigate(`/${courseId}`);
        }
    };

    useEffect(() => {
        if (params.courseId) {
            setLesson(undefined);
            setCourseId(undefined);
        }
    }, [params.courseId]);

    const isPipOpen = !params.courseId && lesson && courseId;

    return (
        <PipContext.Provider value={{ lesson, togglePiP }}>
            {children}
            {isPipOpen && (
                <PlayerContainer
                    right={2}
                    bottom={2}
                    position="fixed"
                    cursor="pointer"
                    onClick={handleOpenVideo}
                    w={{ base: '280px', md: '400px' }}
                    _hover={{ '> div': { opacity: 1 } }}
                >
                    <Center
                        top={0}
                        left={0}
                        w="100%"
                        h="100%"
                        color="white"
                        opacity={0}
                        fontSize="40px"
                        position="absolute"
                        borderRadius="md"
                        bg="rgba(0, 0, 0, 0.7)"
                    >
                        <IoOpenOutline />
                    </Center>
                    <PipPlayer courseId={courseId} lesson={lesson} />
                </PlayerContainer>
            )}
        </PipContext.Provider>
    );
};

export const usePip = (): PipContextType => {
    return useContext(PipContext);
};
