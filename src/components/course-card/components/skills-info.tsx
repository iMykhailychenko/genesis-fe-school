import { memo } from 'react';

import {
    Tag,
    Box,
    Stack,
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    useDisclosure,
} from '@chakra-ui/react';
import { FiInfo } from 'react-icons/all';

interface Props {
    skills: string[];
}
export const SkillsInfo = memo(({ skills }: Props): JSX.Element => {
    const { isOpen, onClose, onOpen } = useDisclosure();

    return (
        <>
            <Popover isOpen={isOpen} onClose={onClose}>
                <PopoverTrigger>
                    <Box as="button" mb={2} p={1} px={2} onClick={onOpen} onMouseEnter={onOpen} onMouseLeave={onClose}>
                        <FiInfo />
                    </Box>
                </PopoverTrigger>
                <PopoverContent minW="350px">
                    <PopoverHeader fontWeight="semibold">Skills</PopoverHeader>
                    <PopoverArrow />
                    <PopoverBody>
                        <Stack py={2} spacing={2} alignItems="flex-start">
                            {skills.map(skill => (
                                <Tag key={skill} size="lg">
                                    {skill}
                                </Tag>
                            ))}
                        </Stack>
                    </PopoverBody>
                </PopoverContent>
            </Popover>
        </>
    );
});

SkillsInfo.displayName = 'SkillsInfo';
