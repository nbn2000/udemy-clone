import "./styles.css";
import HeaderCourses from "./components/header";
import ProgrammingTopics from "./components/programming-topics";
import AllCourses from "./components/all-courses";

const Courses = () => {
  return (
    <div className="courses-page">
      <header>
        <HeaderCourses />
      </header>
      <main>
        <section>
          <ProgrammingTopics />
        </section>
        <section>
          <AllCourses />
        </section>
      </main>
    </div>
  );
};
export default Courses;
