import "./styles.css";
import { AiFillPlayCircle } from "react-icons/ai";
import { FiCheck } from "react-icons/fi";

const CourseDocument = () => {
  return (
    <div className="section-right-side">
      <div className="right-img-placeholder">
        <AiFillPlayCircle />
      </div>
      <div className="right-section-body">
        <div className="price">
          <span className="h3">$53</span>
          <del>$124</del>
        </div>
        <hr />
        <div className="course-info">
          <span className="h4">64 Document courses</span>
          <span>50% OFF</span>
        </div>
        <div className="detail-course">
          <div>
            <div>
              <FiCheck /> <span>24 Modules</span>
            </div>
            <div>
              <FiCheck /> <span>Full time access</span>
            </div>
            <div>
              <FiCheck /> <span>20 resources </span>
            </div>
          </div>
          <div>
            <div>
              <FiCheck /> <span>12 exercises</span>
            </div>
            <div>
              <FiCheck /> <span>Certificate</span>
            </div>
          </div>
        </div>
        <button className="btn-primary">Add To Cart</button>
        <button>Buy Now</button>
      </div>
    </div>
  );
};

export default CourseDocument;
