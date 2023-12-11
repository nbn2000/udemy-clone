import "./styles.css";
import { FiCheck } from "react-icons/fi";

const Requirements = () => {
  return (
    <div className="require">
      <h3>Requirement </h3>
      <div>
        <div>
          <FiCheck />{" "}
          <span className="x-small">
            No programming experience needed - I'll teach you everything you
            need to know
          </span>
        </div>
        <div>
          <FiCheck />{" "}
          <span className="x-small">
            A Mac or PC computer with access to the internet
          </span>
        </div>
        <div>
          <FiCheck />{" "}
          <span className="x-small">
            No previous coding experience is needed
          </span>
        </div>
        <div>
          <FiCheck />{" "}
          <span className="x-small">
            All tools and software used in this course will be free
          </span>
        </div>
        <div>
          <FiCheck />{" "}
          <span className="x-small">Any operating system: Mac, PC, Linux</span>
        </div>
      </div>
    </div>
  );
};

export default Requirements;
