import { Center, Box, Image, Heading, Text } from '@chakra-ui/react';

import image from './banner.jpeg';

export const Hero = (): JSX.Element => {
    return (
        <Center>
            <Box maxW="1200px" w="100%" position="relative">
                <Box bg="white" color="black" p={6} borderRadius="lg" position="absolute" left={5} top={5} w="88%" maxW="400px">
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
