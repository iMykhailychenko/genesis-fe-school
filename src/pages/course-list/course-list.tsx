import { Header } from '@app/components/header/header';
import { CoursesCards } from '@app/pages/course-list/components/courses-cards';

const CourseList = (): JSX.Element => {
    return (
        <>
            <Header />
            <CoursesCards />
        </>
    );
};

export default CourseList;
