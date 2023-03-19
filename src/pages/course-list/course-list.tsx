import { Header } from '@app/components/header/header';
import { Hero } from '@app/components/hero/hero';
import { LastLesson } from '@app/components/last-lesson/last-lesson';
import { CoursesCards } from '@app/pages/course-list/components/courses-cards';

const CourseList = (): JSX.Element => {
    return (
        <>
            <Header />
            <Hero />
            <LastLesson />
            <CoursesCards />
        </>
    );
};

export default CourseList;
