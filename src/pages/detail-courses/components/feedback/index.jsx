import "./styles.css";
import star from "../../../../assets/star-icon.png";
import starEmpty from "../../../../assets/star-empty.png";

const Feedback = () => {
  return (
    <div className="feedback">
      <h3>Feedback</h3>
      <div className="feedback-body">
        <div className="rating">
          <h2>5.0</h2>
          <div className="star-img">
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
          </div>
          <h5>Course Rating</h5>
        </div>
        <div className="review-chart">
          <div>
            <div className="container-5"></div>
            <div className="star-review">
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
            </div>
            <span className="x-small">500 Reviews</span>
          </div>

          <div>
            <div className="container-4"></div>
            <div className="star-review">
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={starEmpty} alt="star" />
            </div>
            <span className="x-small">214 Reviews</span>
          </div>

          <div>
            <div className="container-3"></div>
            <div className="star-review">
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={starEmpty} alt="star" />
              <img src={starEmpty} alt="star" />
            </div>
            <span className="x-small">151 Reviews</span>
          </div>

          <div>
            <div className="container-2"></div>
            <div className="star-review">
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={starEmpty} alt="star" />
              <img src={starEmpty} alt="star" />
              <img src={starEmpty} alt="star" />
            </div>
            <span className="x-small">51 Reviews</span>
          </div>

          <div>
            <div className="container-1"></div>
            <div className="star-review">
              <img src={star} alt="star" />
              <img src={starEmpty} alt="star" />
              <img src={starEmpty} alt="star" />
              <img src={starEmpty} alt="star" />
              <img src={starEmpty} alt="star" />
            </div>
            <span className="x-small">21 Reviews</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
