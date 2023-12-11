import "./styles.css";
import { useState } from "react";
import CoursesComponent from "../../../../components/coursesComponent";

const TrendingCourses = () => {
  const [active, setActive] = useState(1);
  return (
    <div className="courses-section">
      <h2>Trending Courses</h2>
      <div className="categories">
        <button
          className={active === 1 ? "active" : ""}
          onClick={() => setActive(1)}
        >
          All
        </button>
        <button
          className={active === 2 ? "active" : ""}
          onClick={() => setActive(2)}
        >
          Business
        </button>
        <button
          className={active === 3 ? "active" : ""}
          onClick={() => setActive(3)}
        >
          Art & Design
        </button>
        <button
          className={active === 4 ? "active" : ""}
          onClick={() => setActive(4)}
        >
          Development
        </button>
        <button
          className={active === 5 ? "active" : ""}
          onClick={() => setActive(5)}
        >
          Marketing
        </button>
      </div>
      <div className="courses">
        <CoursesComponent courseData={courseObj} />
      </div>
      <button className="more-button btn-primary">More Courses</button>
    </div>
  );
};

export default TrendingCourses;

const courseObj = [
  {
    courseImg: "",
    courseAbout: "UI/UX Design",
    courseName: "Interpersonal skills - work better with others!",
    courseAuthor: "Tanah Air Team",
    rateStar: [1, 2, 3, 4, 5],
    countRate: "(2078)",
    courseDiscount: "$640",
    coursePrice: "$384",
  },
  {
    courseImg: "",
    courseAbout: "UI/UX Design",
    courseName: "Interpersonal skills - work better with others!",
    courseAuthor: "Tanah Air Team",
    rateStar: [1, 2, 3, 4, 5],
    countRate: "(2078)",
    courseDiscount: "$640",
    coursePrice: "$384",
  },
  {
    courseImg: "",
    courseAbout: "UI/UX Design",
    courseName: "Interpersonal skills - work better with others!",
    courseAuthor: "Tanah Air Team",
    rateStar: [1, 2, 3, 4, 5],
    countRate: "(2078)",
    courseDiscount: "$640",
    coursePrice: "$384",
  },
  {
    courseImg: "",
    courseAbout: "UI/UX Design",
    courseName: "Interpersonal skills - work better with others!",
    courseAuthor: "Tanah Air Team",
    rateStar: [1, 2, 3, 4, 5],
    countRate: "(2078)",
    courseDiscount: "$640",
    coursePrice: "$384",
  },
  {
    courseImg: "",
    courseAbout: "UI/UX Design",
    courseName: "Interpersonal skills - work better with others!",
    courseAuthor: "Tanah Air Team",
    rateStar: [1, 2, 3, 4, 5],
    countRate: "(2078)",
    courseDiscount: "$640",
    coursePrice: "$384",
  },
  {
    courseImg: "",
    courseAbout: "UI/UX Design",
    courseName: "Interpersonal skills - work better with others!",
    courseAuthor: "Tanah Air Team",
    rateStar: [1, 2, 3, 4, 5],
    countRate: "(2078)",
    courseDiscount: "$640",
    coursePrice: "$384",
  },
  {
    courseImg: "",
    courseAbout: "UI/UX Design",
    courseName: "Interpersonal skills - work better with others!",
    courseAuthor: "Tanah Air Team",
    rateStar: [1, 2, 3, 4, 5],
    countRate: "(2078)",
    courseDiscount: "$640",
    coursePrice: "$384",
  },
  {
    courseImg: "",
    courseAbout: "UI/UX Design",
    courseName: "Interpersonal skills - work better with others!",
    courseAuthor: "Tanah Air Team",
    rateStar: [1, 2, 3, 4, 5],
    countRate: "(2078)",
    courseDiscount: "$640",
    coursePrice: "$384",
  },
];
