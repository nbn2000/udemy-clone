import CoursesComponent from "../../components/coursesComponent";
import "./styles.css";
import Avatar from "../../assets/human2.webp";

const Account = () => {
  return (
    <div className="account-page">
      <header></header>
      <main>
        <div className="courses-header-account">
          <div className="account-name">
            <div className="avatar-placeholder">
              <img src={Avatar} alt=" avatar img" />
            </div>
            <div>
              <h3>Romadhona Syarifuddin</h3>
              <span className="small">Full Stack Web Designer</span>
            </div>
          </div>
          <div className="filter">
            <h3>My Courses</h3>
            <h3>Wishlist</h3>
            <h3>My Certificate</h3>
          </div>
        </div>
        <CoursesComponent courseData={courseObject} />
      </main>
    </div>
  );
};
export default Account;

const courseObject = [
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
