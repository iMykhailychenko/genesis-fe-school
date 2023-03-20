import { Image, Text, Center, Stack } from '@chakra-ui/react';

import image from './assets/empty.png';

export const NoContent = (): JSX.Element => {
    return (
        <Center h="100%" w="100%">
            <Stack>
                <Image src={image} alt="No video" />
                <Text textAlign="center" color="white">
                    Ooops! Video is not available
                </Text>
            </Stack>
        </Center>
    );
};
