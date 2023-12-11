import "./styles.css";
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
import { FiShare2 } from "react-icons/fi";
import star from "../../../../assets/star-icon.png";

const HeaderCD = () => {
  return (
    <div className="header-course-details">
      <div className="path">
        <span className="small">Home</span>
        <IoIosArrowForward />
        <span className="small">Programming Courses</span>
        <IoIosArrowForward />
        <span className="small">How to become an Expert Web Developer</span>
      </div>
      <div className="header-body">
        <h2>How to become an Expert Web Developer</h2>
        <div className="rating">
          <div className="star-img">
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
          </div>
          <h4>4,7/5</h4>
          <span className="x-small">(1023 Reviews)</span>
          <span className="x-small">20327 Student</span>
        </div>
        <div className="name-avatar">
          <div className="placeholder-for-avatar"></div>
          <h4>Pak Arif Satria Kecek ulalala</h4>
        </div>
        <div className="buttons">
          <button className="btn-primary">
            Add To Wishlist <AiOutlinePlus />
          </button>
          <button>
            Share
            <FiShare2 />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderCD;
