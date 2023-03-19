import { memo } from 'react';

import { Box, Image, useDisclosure } from '@chakra-ui/react';

import { PlayerContainer } from '@app/components/video-players/components/player-container';
import { PreviewPlayer } from '@app/components/video-players/preview-player';
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
            borderRadius="md"
            position="relative"
            maxW={{ base: '100%', lg: '300px' }}
            bg={isDark ? 'gray.700' : 'gray.200'}
            borderColor={isDark ? 'gray.700' : 'gray.200'}
            onMouseEnter={onOpen}
            onMouseLeave={onClose}
        >
            {isOpen && videoLink && (
                <PlayerContainer position="absolute" borderRadius="none" w="100%" h="100%" top={0} left={0}>
                    <PreviewPlayer src={videoLink} poster={imageSrc} />
                </PlayerContainer>
            )}
            <Image w="100%" h="100%" alt={title} objectFit="cover" src={imageSrc} />
        </Box>
    );
});

CardMedia.displayName = 'CardMedia';
