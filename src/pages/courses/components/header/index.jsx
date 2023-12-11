import "./styles.css";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import CoursesComponent from "../../../../components/coursesComponent";

const HeaderCourses = () => {
  return (
    <div className="courses-header">
      <div className="header-inner">
        <div className="path">
          <span>Home</span>
          <span>
            <IoIosArrowForward />
          </span>
          <span>Programming Courses</span>
        </div>
        <h1>Programming Courses</h1>
        <p className="small">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus
        </p>
      </div>
      <div className="mpdc">
        <h3>Most Popular Development Courses</h3>
        <div className="mpdc-cards">
          <button>
            <IoArrowBack />
          </button>
          <CoursesComponent courseData={courseObj} />
          <button>
            <IoArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderCourses;

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
];
