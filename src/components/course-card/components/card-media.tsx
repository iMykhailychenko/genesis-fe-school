import { memo } from 'react';

import { Box, Image, useDisclosure } from '@chakra-ui/react';

import { VideoPlayer } from '@app/components/video-player/video-player';
import { VideoPlayerContainer } from '@app/components/video-player/video-player-container';
import { useIsDarkTheme } from '@app/hooks/is-dark-theme.hook';

interface Props {
    title: string;
    imageLink: string;
    videoLink?: string;
}
export const CardMedia = memo(({ title, imageLink, videoLink }: Props): JSX.Element => {
    const isDark = useIsDarkTheme();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const imageSrc = `${imageLink}/cover.webp`;

    return (
        <Box
            w="100%"
            overflow="hidden"
            borderRight="1px"
            position="relative"
            borderTopLeftRadius="md"
            borderBottomLeftRadius="md"
            maxW={{ base: '100%', md: '300px' }}
            bg={isDark ? 'gray.700' : 'gray.200'}
            borderColor={isDark ? 'gray.700' : 'gray.200'}
            onMouseEnter={onOpen}
            onMouseLeave={onClose}
        >
            {isOpen && videoLink && (
                <VideoPlayerContainer position="absolute" borderRadius="none" w="100%" h="100%" top={0} left={0}>
                    <VideoPlayer src={videoLink} poster={imageSrc} />
                </VideoPlayerContainer>
            )}
            <Image w="100%" h="100%" alt={title} objectFit="cover" src={imageSrc} />
        </Box>
    );
});

CardMedia.displayName = 'CardMedia';
