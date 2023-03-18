import { memo, useMemo } from 'react';

import {
    Tag,
    Flex,
    Text,
    Stack,
    Heading,
    CircularProgress,
    CircularProgressLabel,
    CardBody as ChakraCardBody,
} from '@chakra-ui/react';

import { SkillsInfo } from '@app/components/course-card/components/skills-info';
import { progress } from '@app/utils/progress/progress';

interface Props {
    title: string;
    description: string;
    tags: string[];
    skills: string[];
    courseId: string;
    lessonsCount: number;
}
export const CardBody = memo(({ title, description, tags, skills, lessonsCount, courseId }: Props): JSX.Element => {
    const lessonsDone = useMemo(
        () => Object.values(progress.getCourseProgress(courseId).lessons).filter(lesson => lesson.isDone).length,
        [],
    );

    return (
        <ChakraCardBody>
            <Flex alignItems="self-start" justifyContent="space-between">
                <Stack flex={1}>
                    <Heading size="md">{title}</Heading>
                    <Text py="2">{description}</Text>

                    <Flex alignItems="center">
                        {tags.map(tag => (
                            <Tag key={tag} colorScheme="red" mr={2} mb={2}>
                                {tag}
                            </Tag>
                        ))}

                        <SkillsInfo skills={skills} />
                    </Flex>
                </Stack>

                {lessonsDone ? (
                    <CircularProgress value={(lessonsDone * 100) / lessonsCount} color="green.400">
                        <CircularProgressLabel>
                            {lessonsDone}/{lessonsCount}
                        </CircularProgressLabel>
                    </CircularProgress>
                ) : null}
            </Flex>
        </ChakraCardBody>
    );
});

CardBody.displayName = 'CardBody';
