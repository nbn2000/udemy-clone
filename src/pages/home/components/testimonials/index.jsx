import "./styles.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import accent from "../../../../assets/Accent (1).png";
import { useState } from "react";

const Testimonial = () => {
  const [active, setActive] = useState(1);
  const totalTestimonial = 2;
  const classNameValue = (e) => {
    if (active === e) {
      return "for-flex active";
    } else {
      return "for-flex";
    }
  };

  const handleNext = () => {
    setActive((prev) => (prev < totalTestimonial ? prev + 1 : prev));
  };

  const handlePrev = () => {
    setActive((prev) => (prev > 1 ? prev - 1 : prev));
  };
  return (
    <div className="testimonial">
      <button
        className={active === 1 ? "btn grey-button" : "btn"}
        onClick={handlePrev}
      >
        <IoIosArrowBack />
      </button>
      <div>
        <div className={classNameValue(1)}>
          <div className="t-img-holder">
            <img src={accent} alt="accent" />
          </div>
          <div className="t-info">
            <h3>
              After studying here I gained new knowledge and insights. The
              mentor was very friendly and guided me to get the knowledge I
              wanted. Thank you!1
            </h3>
            <h4>KecekArif</h4>
            <span className="x-small">
              Yang punya Surabaya nanti kapan - kapan tapi1
            </span>
          </div>
        </div>
        <div className={classNameValue(2)}>
          <div className="t-img-holder">
            <img src={accent} alt="accent" />
          </div>
          <div className="t-info">
            <h3>
              After studying here I gained new knowledge and insights. The
              mentor was very friendly and guided me to get the knowledge I
              wanted. Thank you!2
            </h3>
            <h4>KecekArif</h4>
            <span className="x-small">
              Yang punya Surabaya nanti kapan - kapan tapi2
            </span>
          </div>
        </div>
      </div>

      <button
        className={active === totalTestimonial ? "btn grey-button" : "btn"}
        onClick={handleNext}
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default Testimonial;
