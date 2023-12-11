import "./styles.css";
import star from "../../assets/star-icon.png";
import hmtl from "../../assets/html-course.png";
import css from "../../assets/css-course.png";
import css2 from "../../assets/css-course-2.jpg";
import js from "../../assets/javascript-course.png";
import nextjs from "../../assets/Nextjs-Course.png";
import nextjs2 from "../../assets/nextjs-course-2.jpg";
import redux from "../../assets/redux-course.jpg";
import tailwind from "../../assets/tailwind-course.jpg";

const img = [hmtl, css, css2, js, nextjs, nextjs2, redux, tailwind];

const CoursesComponent = ({ courseData }) => {
  return (
    <div className="courses">
      {courseData.map((i, index) => (
        <div className="course" key={index}>
          <div className="course-img">
            <img src={img[Math.floor(Math.random() * 8)]} alt="course-img" />
          </div>
          <span className="course-about">{i.courseAbout}</span>
          <h5 className="course-name">{i.courseName}</h5>
          <span className="course-author">{i.courseAuthor}</span>
          <div className="course-rate">
            {i.rateStar.map((item) => (
              <img key={item} src={star} alt="star" />
            ))}{" "}
            {i.countRate}
          </div>
          <div className="course-price">
            <del className="discount">{i.courseDiscount}</del>
            <h4 className="price">{i.coursePrice}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CoursesComponent;
