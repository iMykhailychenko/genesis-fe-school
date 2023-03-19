import { Center, Box, Image, Heading, Text } from '@chakra-ui/react';

import image from './banner.jpeg';

export const Hero = (): JSX.Element => {
    return (
        <Center>
            <Box maxW="1200px" w="100%" position="relative">
                <Box
                    p={6}
                    top={5}
                    w="88%"
                    left={5}
                    bg="white"
                    maxW="400px"
                    color="black"
                    boxShadow="md"
                    borderRadius="lg"
                    position="absolute"
                >
                    <Heading mb={3} fontSize="xx-large">
                        Learning that gets you
                    </Heading>
                    <Text fontSize="md">Skills for your present (and your future). Get started with us.</Text>
                </Box>
                <Image src={image} w="100%" h="400px" alt="Hero" borderRadius="lg" objectFit="cover" />
            </Box>
        </Center>
    );
};
