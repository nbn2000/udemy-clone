import "./styles.css";
import { CiSearch } from "react-icons/ci";
import { LuAlarmClock } from "react-icons/lu";
import { RiAccountCircleLine } from "react-icons/ri";
import { MdOutlineVideoLibrary } from "react-icons/md";
import star from "../../../../assets/star-icon.png";
import bell from "../../../../assets/Bell-Icon.png";
import love from "../../../../assets/Love-Icon.png";
import verification from "../../../../assets/Verification-icon.png";

const HeaderHome = () => {
  return (
    <div className="home-header">
      <div className="left-side">
        <h1>Find the Best Courses and Amazing Mentor</h1>
        <span className="small">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus
        </span>
        <div className="search-bar">
          <CiSearch />
          <input
            type="search"
            placeholder="Type in the course you want to learn"
          />
          <button>Search</button>
        </div>
        <div className="info-span">
          <span className="small">
            <LuAlarmClock style={iconStyle} />
            Life Time Acces
          </span>
          <span className="small">
            <RiAccountCircleLine style={iconStyle} />
            Expert Mentor
          </span>
          <span className="small">
            <MdOutlineVideoLibrary style={iconStyle} />
            100K+ Courses
          </span>
        </div>
      </div>
      <div className="right-side">
        <div className="review">
          <h3>500+</h3>
          <span>Total Review</span>
          <div className="star">
            <img src={star} alt="star icon" />
            <img src={star} alt="star icon" />
            <img src={star} alt="star icon" />
            <img src={star} alt="star icon" />
            <img src={star} alt="star icon" />
          </div>
        </div>
        <img src={bell} alt="bell icon" className="icon bell" />
        <img src={love} alt="love icon" className="icon love" />
        <img
          src={verification}
          alt="verification icon"
          className="icon verification"
        />
      </div>
    </div>
  );
};

export default HeaderHome;

const iconStyle = {
  fontSize: 25,
  verticalAlign: "middle",
};
