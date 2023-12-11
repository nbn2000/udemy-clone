import "./styles.css";
import { IoIosArrowDown } from "react-icons/io";
import { LiaThumbsUpSolid, LiaThumbsDown } from "react-icons/lia";
import star from "../../../../assets/star-icon.png";
import human1 from "../../../../assets/human1.png";
import human2 from "../../../../assets/human2.webp";
import human3 from "../../../../assets/human3.jpg";

const Reviews = () => {
  return (
    <div className="review">
      <div className="review-container">
        <div className="review-header">
          <h3>Reviews</h3>
          <button className="btn-primary">
            <span className="small">All Ratings</span>
            <IoIosArrowDown />
          </button>
        </div>
        <div className="review-body">
          <div className="each-review">
            <div className="review-author">
              <div>
                <div className="avatar-placeholder">
                  <img src={human1} alt="avatar" width={102} height={102} />
                </div>
                <div className="author">
                  <h4>Mas Ehan</h4>
                  <div className="star-img">
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                  </div>
                  <span className="small">2 month ago</span>
                </div>
              </div>
              <div>
                <LiaThumbsUpSolid /> <LiaThumbsDown />
              </div>
            </div>
            <p className="small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae non
              id interdum massa enim posuere. Tempus, risus varius rhoncus
              ipsum, sed egestas nisi pellentesque. Sapien quam varius euismod
              in velit diam posuere netus nec. A consectetur nec ac sed
              convallis adipiscing. Aenean enim cursus a mattis ac velit, quis.
              Nibh id dui, justo, at tempus. Mauris egestas nunc morbi
              dignissim.
            </p>
            <hr />
          </div>

          <div className="each-review">
            <div className="review-author">
              <div>
                <div className="avatar-placeholder">
                  <img src={human2} alt="avatar" width={102} height={102} />
                </div>
                <div className="author">
                  <h4>Malik</h4>
                  <div className="star-img">
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                  </div>
                  <span className="small">2 month ago</span>
                </div>
              </div>
              <div>
                <LiaThumbsUpSolid /> <LiaThumbsDown />
              </div>
            </div>
            <p className="small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae non
              id interdum massa enim posuere. Tempus, risus varius rhoncus
              ipsum, sed egestas nisi pellentesque. Sapien quam varius euismod
              in velit diam posuere netus nec. A consectetur nec ac sed
              convallis adipiscing. Aenean enim cursus a mattis ac velit, quis.
              Nibh id dui, justo, at tempus. Mauris egestas nunc morbi
              dignissim.
            </p>
            <hr />
          </div>

          <div className="each-review">
            <div className="review-author">
              <div>
                <div className="avatar-placeholder">
                  <img src={human3} alt="avatar" width={102} height={102} />
                </div>
                <div className="author">
                  <h4>Pakjoo</h4>
                  <div className="star-img">
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                  </div>
                  <span className="small">2 month ago</span>
                </div>
              </div>
              <div>
                <LiaThumbsUpSolid /> <LiaThumbsDown />
              </div>
            </div>
            <p className="small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae non
              id interdum massa enim posuere. Tempus, risus varius rhoncus
              ipsum, sed egestas nisi pellentesque. Sapien quam varius euismod
              in velit diam posuere netus nec. A consectetur nec ac sed
              convallis adipiscing. Aenean enim cursus a mattis ac velit, quis.
              Nibh id dui, justo, at tempus. Mauris egestas nunc morbi
              dignissim.
            </p>
          </div>
        </div>
        <button className="btn-primary">More Reviews</button>
      </div>
    </div>
  );
};

export default Reviews;
