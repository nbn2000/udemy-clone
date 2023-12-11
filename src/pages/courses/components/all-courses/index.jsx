import "./styles.css";
import {
  IoIosArrowForward,
  IoIosArrowBack,
  IoIosArrowDown,
  IoIosArrowUp,
} from "react-icons/io";
import { TbLayoutDashboard } from "react-icons/tb";
import star from "../../../../assets/star-icon.png";
import { useState } from "react";
import CoursesComponent from "../../../../components/coursesComponent";

const AllCourses = () => {
  const [active, setActive] = useState({
    rating: false,
    duration: false,
    category: false,
    level: false,
    language: false,
    innerLanguage: false,
    price: false,
    feature: false,
  });
  return (
    <div className="adc">
      <div className="top-adc">
        <h2>All Courses</h2>
        <div className="adc-top-buttons">
          <button>
            Filter <TbLayoutDashboard />
          </button>
          <button className="btn-primary">
            Most Popular <IoIosArrowForward />
          </button>
        </div>
      </div>
      <div className="side-courses">
        <aside>
          <div className="ratings outside-div">
            <button
              onClick={() => {
                setActive((prev) => ({ ...prev, rating: !prev.rating }));
              }}
            >
              <h4>Ratings</h4>{" "}
              {active.rating ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
            {active.rating && (
              <div className="stars inside-div">
                <label htmlFor="star-5">
                  <input type="checkbox" id="star-5" name="star-5" />
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <span className="small">5</span>{" "}
                  <span className="x-small">(1242)</span>
                </label>
                <label htmlFor="star-4">
                  <input type="checkbox" id="star-4" name="star-4" />
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <span className="small">4+</span>{" "}
                  <span className="x-small">(2145)</span>
                </label>
                <label htmlFor="star-3">
                  <input type="checkbox" id="star-3" name="star-3" />
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <span className="small">3+</span>{" "}
                  <span className="x-small">(224)</span>
                </label>
                <label htmlFor="star-2">
                  <input type="checkbox" id="star-2" name="star-2" />
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <span className="small">2+</span>{" "}
                  <span className="x-small">(2049)</span>
                </label>
                <label htmlFor="star-1">
                  <input type="checkbox" id="star-1" name="star-1" />
                  <img src={star} alt="star" />
                  <span className="small">1+</span>{" "}
                  <span className="x-small">(2049)</span>
                </label>
              </div>
            )}
          </div>

          <div className="durations outside-div">
            <button
              onClick={() => {
                setActive((prev) => ({
                  ...prev,
                  duration: !prev.duration,
                }));
              }}
            >
              <h4>Durations</h4>
              {active.duration ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
            {active.duration && (
              <div className="hours inside-div">
                <label htmlFor="hour-1-3">
                  <input type="checkbox" id="hour1" name="hour1" />
                  <span className="small">1-3 Hours</span>{" "}
                  <span className="x-small">(1242)</span>
                </label>
                <label htmlFor="hour-3-6">
                  <input type="checkbox" id="hour-3-6" name="hour-3-6" />
                  <span className="small">3-6 Hours</span>{" "}
                  <span className="x-small">(2145)</span>
                </label>
                <label htmlFor="hour-6-12">
                  <input type="checkbox" id="hour-6-12" name="hour-6-12" />
                  <span className="small">6-12 Hours</span>{" "}
                  <span className="x-small">(224)</span>
                </label>
                <label htmlFor="hour-13">
                  <input type="checkbox" id="hour-13" name="hour-13" />
                  <span className="small">13+ Hours</span>{" "}
                  <span className="x-small">(2049)</span>
                </label>
              </div>
            )}
          </div>

          <div className="categories-div outside-div">
            <button
              onClick={() => {
                setActive((prev) => ({
                  ...prev,
                  category: !prev.category,
                }));
              }}
            >
              <h4>Categories</h4>{" "}
              {active.category ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
            {active.category && (
              <div className="inner-category inside-div">
                <label htmlFor="golang">
                  <input type="checkbox" id="golang" name="golang" />
                  <span className="small">Golang</span>{" "}
                  <span className="x-small">(1242)</span>
                </label>
                <label htmlFor="java">
                  <input type="checkbox" id="java" name="java" />
                  <span className="small">Java</span>{" "}
                  <span className="x-small">(2145)</span>
                </label>
                <label htmlFor="flutter">
                  <input type="checkbox" id="flutter" name="flutter" />
                  <span className="small">Flutter</span>{" "}
                  <span className="x-small">(224)</span>
                </label>
                <label htmlFor="css">
                  <input type="checkbox" id="css" name="css" />
                  <span className="small">CSS</span>{" "}
                  <span className="x-small">(2049)</span>
                </label>
              </div>
            )}
          </div>

          <div className="levels outside-div">
            <button
              onClick={() => {
                setActive((prev) => ({
                  ...prev,
                  level: !prev.level,
                }));
              }}
            >
              <h4>Level</h4>{" "}
              {active.level ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
            {active.level && (
              <div className="inner-level inside-div">
                <label htmlFor="beginner">
                  <input type="checkbox" id="beginner" name="beginner" />
                  <span className="small">Beginner</span>{" "}
                  <span className="x-small">(1242)</span>
                </label>
                <label htmlFor="intermediate">
                  <input
                    type="checkbox"
                    id="intermediate"
                    name="intermediate"
                  />
                  <span className="small">Intermediate</span>{" "}
                  <span className="x-small">(2145)</span>
                </label>
                <label htmlFor="expert">
                  <input type="checkbox" id="expert" name="expert" />
                  <span className="small">Expert</span>{" "}
                  <span className="x-small">(224)</span>
                </label>
              </div>
            )}
          </div>

          <div className="languages outside-div">
            <button
              onClick={() => {
                setActive((prev) => ({
                  ...prev,
                  language: !prev.language,
                }));
              }}
            >
              <h4>Language</h4>{" "}
              {active.language ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
            {active.language && (
              <div className="inner-language inside-div">
                <label htmlFor="english">
                  <input type="checkbox" id="english" name="english" />
                  <span className="small">English</span>{" "}
                  <span className="x-small">(1242)</span>
                </label>
                <label htmlFor="espanol">
                  <input type="checkbox" id="espanol" name="espanol" />
                  <span className="small">Espanol</span>{" "}
                  <span className="x-small">(2145)</span>
                </label>
                <label htmlFor="melayu">
                  <input type="checkbox" id="melayu" name="Melayu" />
                  <span className="small"> Melayu</span>{" "}
                  <span className="x-small">(224)</span>
                </label>
                <label htmlFor="bahasa">
                  <input type="checkbox" id="bahasa" name="bahasa" />
                  <span className="small">Bahasa Indonesia</span>{" "}
                  <span className="x-small">(224)</span>
                </label>
                {active.innerLanguage && (
                  <>
                    <label htmlFor="english">
                      <input type="checkbox" id="english" name="english" />
                      <span className="small">English</span>{" "}
                      <span className="x-small">(1242)</span>
                    </label>
                    <label htmlFor="espanol">
                      <input type="checkbox" id="espanol" name="espanol" />
                      <span className="small">Espanol</span>{" "}
                      <span className="x-small">(2145)</span>
                    </label>
                    <label htmlFor="melayu">
                      <input type="checkbox" id="melayu" name="Melayu" />
                      <span className="small">Melayu</span>{" "}
                      <span className="x-small">(224)</span>
                    </label>
                    <label htmlFor="bahasa">
                      <input type="checkbox" id="bahasa" name="bahasa" />
                      <span className="small">Bahasa Indonesia</span>{" "}
                      <span className="x-small">(224)</span>
                    </label>
                  </>
                )}
                <button
                  className="inner-language"
                  onClick={() => {
                    setActive((prev) => ({
                      ...prev,
                      innerLanguage: !prev.innerLanguage,
                    }));
                  }}
                >
                  <h4>Show more</h4>
                  {active.innerLanguage ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </button>
              </div>
            )}
          </div>

          <div className="prices outside-div">
            <button
              onClick={() => {
                setActive((prev) => ({
                  ...prev,
                  price: !prev.price,
                }));
              }}
            >
              <h4>Price</h4>{" "}
              {active.price ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
            {active.price && (
              <div className="inner-price inside-div">
                <label htmlFor="paid">
                  <input type="checkbox" id="paid" name="paid" />
                  <span className="small">Paid</span>{" "}
                  <span className="x-small">(1242)</span>
                </label>
                <label htmlFor="free">
                  <input type="checkbox" id="free" name="free" />
                  <span className="small">Free</span>{" "}
                  <span className="x-small">(2145)</span>
                </label>
              </div>
            )}
          </div>

          <div className="features outside-div">
            <button
              onClick={() => {
                setActive((prev) => ({
                  ...prev,
                  feature: !prev.feature,
                }));
              }}
            >
              <h4>Features</h4>{" "}
              {active.feature ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
            {active.feature && (
              <div className="inner-feature inside-div">
                <label htmlFor="subtitles">
                  <input type="checkbox" id="subtitles" name="subtitles" />
                  <span className="small">Subtitles</span>{" "}
                  <span className="x-small">(1242)</span>
                </label>
                <label htmlFor="quizzes">
                  <input type="checkbox" id="quizzes" name="quizzes" />
                  <span className="small">Quizzes</span>{" "}
                  <span className="x-small">(2145)</span>
                </label>
                <label htmlFor="exercises">
                  <input type="checkbox" id="exercises" name="exercises" />
                  <span className="small">Coding Exercises</span>{" "}
                  <span className="x-small">(224)</span>
                </label>
              </div>
            )}
          </div>
        </aside>
        <div className="outer-courses">
          <CoursesComponent courseData={courseObject} />
          <div className="pagination-courses">
            <button>
              <IoIosArrowBack />
            </button>
            <div className="numbers">
              <button className={!sampleCondition && "clicked"}>1</button>
              <button>2</button>
              <button>3</button>
              <button>4</button>
              <button>5</button>
            </div>
            <button className={!sampleCondition && "clicked-arrow"}>
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCourses;

const sampleCondition = false;

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
