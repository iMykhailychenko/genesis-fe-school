import { ChangeEvent, useEffect, useState } from 'react';

import {
    HStack,
    Select,
    Box,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverArrow,
    PopoverBody,
    Text,
    Popover,
    useDisclosure,
    Kbd,
} from '@chakra-ui/react';
import { FaRegKeyboard } from 'react-icons/all';

import { useVideo } from '@app/context/vidoe.context';

const speedMap = [
    { value: 0.25, title: '0.25.x' },
    { value: 0.5, title: '0.5x' },
    { value: 0.75, title: '0.75x' },
    { value: 1, title: 'Normal' },
    { value: 1.25, title: '1.25x' },
    { value: 1.5, title: '1.5x' },
    { value: 1.75, title: '1.75x' },
    { value: 2, title: '2x' },
];

export const PlaybackRate = (): JSX.Element => {
    const { videoRef } = useVideo();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [playbackRate, setPlaybackRate] = useState(1);
    const handleChange = (event: ChangeEvent<HTMLSelectElement>): void => {
        setPlaybackRate(Number(event.target.value));
    };

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = playbackRate;
        }
    }, [playbackRate]);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent): void => {
            if (event.shiftKey && event.code === 'Comma') {
                setPlaybackRate(prev => {
                    const next = prev - 0.25;
                    return next >= 0.25 ? next : 0.25;
                });
            }
            if (event.shiftKey && event.code === 'Period') {
                setPlaybackRate(prev => {
                    const next = prev + 0.25;
                    return next <= 2 ? next : 2;
                });
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [setPlaybackRate]);

    return (
        <HStack spacing={1} w="100%">
            <Select value={playbackRate} onChange={handleChange} w="120px">
                {speedMap.map(item => (
                    <option key={item.value} value={item.value}>
                        {item.title}
                    </option>
                ))}
            </Select>

            <Popover isOpen={isOpen} onClose={onClose}>
                <PopoverTrigger>
                    <Box as="button" fontSize="xl" p={1} px={2} onClick={onOpen} onMouseEnter={onOpen} onMouseLeave={onClose}>
                        <FaRegKeyboard />
                    </Box>
                </PopoverTrigger>
                <PopoverContent minW="300px">
                    <PopoverHeader fontSize="sm" fontWeight="semibold">
                        You can quickly change the video speed by using your keyboard
                    </PopoverHeader>
                    <PopoverArrow />
                    <PopoverBody>
                        <Text my={3}>
                            <Kbd>shift</Kbd> + <Kbd mr={3}>&#60;</Kbd> To decrease speed
                        </Text>
                        <Text my={3}>
                            <Kbd>shift</Kbd> + <Kbd mr={3}>&#62;</Kbd> To increase speed
                        </Text>
                    </PopoverBody>
                </PopoverContent>
            </Popover>
        </HStack>
    );
};
