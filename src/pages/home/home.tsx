import { Header } from '@app/components/header/header';
import { Hero } from '@app/components/hero/hero';
import { LastLesson } from '@app/components/last-lesson/last-lesson';
import { CoursesList } from '@app/pages/home/components/courses-list';

const Home = (): JSX.Element => {
    return (
        <>
            <Header />
            <Hero />
            <LastLesson />
            <CoursesList />
        </>
    );
};

export default Home;
