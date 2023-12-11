import "./styles.css";
import { RiAccountCircleLine } from "react-icons/ri";
import {
  MdOutlineVideoLibrary,
  MdOutlinePeopleOutline,
  MdOutlineOutlinedFlag,
} from "react-icons/md";
import artAndDesign from "../../../../assets/art and design.jpg";
import business from "../../../../assets/business.jpg";
import copywriting from "../../../../assets/copywriting.png";
import marketing from "../../../../assets/marketing.webp";
import programming from "../../../../assets/programming.webp";
import photography from "../../../../assets/photography.webp";
import videography from "../../../../assets/videography.jpg";
import personalDevelopment from "../../../../assets/personal development.jpg";

const TopCategories = () => {
  return (
    <div className="top-categories-section">
      <div className="top-categories">
        <h2>Top Categories</h2>
        <div className="tc-images">
          <div className="tc-img">
            <h3>Art & Design</h3>
            <img src={artAndDesign} alt="art and design" />
          </div>
          <div className="tc-img">
            <h3>Business</h3>
            <img src={business} alt="business" />
          </div>
          <div className="tc-img">
            <h3>Copy Writing</h3>
            <img src={copywriting} alt="copywriting" />
          </div>
          <div className="tc-img">
            <h3>Marketing</h3>
            <img src={marketing} alt="marketing" />
          </div>
          <div className="tc-img">
            <h3>Programming</h3>
            <img src={programming} alt="programming" />
          </div>
          <div className="tc-img">
            <h3>Photography</h3>
            <img src={photography} alt="photography" />
          </div>
          <div className="tc-img">
            <h3>Videography</h3>
            <img src={videography} alt="videography" />
          </div>
          <div className="tc-img">
            <h3>Personal Development</h3>
            <img src={personalDevelopment} alt="personal development" />
          </div>
        </div>
      </div>
      <aside>
        <div className="counter">
          <div className="inner-counter">
            <MdOutlineVideoLibrary />
            <h3>10.000+</h3>
            <h4>Courses</h4>
          </div>
          <div className="inner-counter">
            <MdOutlinePeopleOutline />
            <h3>50.000+</h3>
            <h4>Active Students</h4>
          </div>
          <div className="inner-counter">
            <RiAccountCircleLine />
            <h3>1000+</h3>
            <h4>Active Mentor</h4>
          </div>
          <div className="inner-counter">
            <MdOutlineOutlinedFlag />
            <h3>180</h3>
            <h4>Countries</h4>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default TopCategories;
