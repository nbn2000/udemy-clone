import "./styles.css";
import star from "../../../../assets/star-icon.png";
import bcamMentor from "../../../../assets/what-is-mentoring1-square.jpg";

const Mentor = () => {
  return (
    <div className="mentor-section">
      <h3>Mentor</h3>
      <div className="mentor-body">
        <div className="img-placeholder">
          <img src={bcamMentor} alt="mentor img" width={297} height={320} />
        </div>
        <div className="mentor-right">
          <h3>Arif kecek</h3>
          <span className="small">Senior developer expert instructor</span>
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
          </div>
          <p className="small">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eu
            in orci, nunc amet libero. Nam scelerisque vestibulum bibendum a
            turpis.
          </p>
          <div className="course-student">
            <div>
              <div className="blue-round"></div> <span>12 Courses</span>
            </div>
            <div>
              <div className="blue-round"></div> <span>2583 Student</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentor;
