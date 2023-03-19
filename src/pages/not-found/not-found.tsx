import { Center, Heading, Button, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import image from './pulp-fiction-john-travolta.gif';

const NotFound = (): JSX.Element => {
    return (
        <Center flexDir="column">
            <Image src={image} alt="Not found" mb={10} />
            <Heading textAlign="center" mb={5}>
                Page not found
            </Heading>
            <Button as={Link} to="/">
                Got ot home page
            </Button>
        </Center>
    );
};

export default NotFound;
