import { Stack, Button } from '@chakra-ui/react';
import { IoIosArrowBack } from 'react-icons/all';
import { Link } from 'react-router-dom';

import { Header } from '@app/components/header/header';
import { CourseShell } from '@app/pages/single-course/components/course-shell';

const SingleCourse = (): JSX.Element => {
    return (
        <Stack>
            <Header>
                <Button as={Link} to="/" leftIcon={<IoIosArrowBack />}>
                    Go Back
                </Button>
            </Header>

            <CourseShell />
        </Stack>
    );
};

export default SingleCourse;
