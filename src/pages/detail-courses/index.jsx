import "./styles.css";
import HeaderCD from "./components/header";
import CourseDocument from "./components/course-document";
import Wylftc from "./components/what-you’ll-learn-from-this-course";
import ObjectivesFeatures from "./components/objectives-features";
import Requirements from "./components/requirements";
import ModuleCourses from "./components/module-courses";
import Mentor from "./components/mentor";
import Feedback from "./components/feedback";
import Reviews from "./components/review";
import MoreCoursesFrom from "./components/more-courses-from";

const DetailCourses = () => {
  return (
    <div className="course-details">
      <header>
        <HeaderCD />
      </header>
      <main>
        <div className="main-flex">
          <section>
            <CourseDocument />
          </section>

          <div className="section-left-side">
            <section>
              <Wylftc />
            </section>
            <section>
              <ObjectivesFeatures />
            </section>
            <section>
              <Requirements />
            </section>
            <section>
              <ModuleCourses />
            </section>
          </div>
        </div>
        <section>
          <Mentor />
        </section>
        <section>
          <Feedback />
        </section>
        <section>
          <Reviews />
        </section>
        <section>
          <MoreCoursesFrom />
        </section>
      </main>
    </div>
  );
};
export default DetailCourses;
