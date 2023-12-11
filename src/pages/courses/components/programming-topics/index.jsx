import "./styles.css";
import python from "../../../../assets/python.jpg";
import javascript from "../../../../assets/javascript.webp";
import css from "../../../../assets/css.jpg";
import cSharp from "../../../../assets/c#.png";
import webDevelopment from "../../../../assets/web development.webp";
import dataScience from "../../../../assets/data science.jpg";
import java from "../../../../assets/Java.jpg";
import sql from "../../../../assets/sql.jpg";

const ProgrammingTopics = () => {
  return (
    <div className="programming-topics">
      <div className="pt-header">
        <h2>Programming Topics</h2>
        <button className="btn-primary">See All</button>
      </div>

      <div className="tc-images">
        <div className="tc-img">
          <h3>Python</h3>
          <img src={python} alt="python" />
        </div>
        <div className="tc-img">
          <h3>JavaScript</h3>
          <img src={javascript} alt="javascript" />
        </div>
        <div className="tc-img">
          <h3>CSS</h3>
          <img src={css} alt="css" />
        </div>
        <div className="tc-img">
          <h3>C#</h3>
          <img src={cSharp} alt="c#" />
        </div>
        <div className="tc-img">
          <h3>Web Development</h3>
          <img src={webDevelopment} alt="web development" />
        </div>
        <div className="tc-img">
          <h3>Data Science</h3>
          <img src={dataScience} alt="data science" />
        </div>
        <div className="tc-img">
          <h3>Java</h3>
          <img src={java} alt="java" />
        </div>
        <div className="tc-img">
          <h3>SQL</h3>
          <img src={sql} alt="sql" />
        </div>
      </div>
    </div>
  );
};

export default ProgrammingTopics;
