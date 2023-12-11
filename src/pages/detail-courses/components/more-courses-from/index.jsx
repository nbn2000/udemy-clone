import CoursesComponent from "../../../../components/coursesComponent";
import "./styles.css";

const MoreCoursesFrom = () => {
  return (
    <div className="more-courses-from">
      <h3>More Courses from Arif Kecek</h3>
      <CoursesComponent courseData={courseObj} />
    </div>
  );
};

export default MoreCoursesFrom;

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
