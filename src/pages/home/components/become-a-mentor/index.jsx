import "./styles.css";
import bcamMentor from "../../../../assets/what-is-mentoring1-square.jpg";

const BecomeMentor = () => {
  return (
    <div className="bcam-a-mentor">
      <div className="bam-img-holder">
        <img src={bcamMentor} alt="mentor img" width={550} height={600} />
      </div>
      <div className="bam-info">
        <h2>Become an Mentor</h2>
        <p className="small">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eu in
          orci, nunc amet libero. Nam scelerisque vestibulum bibendum a turpis.
          Ante feugiat lectus massa, odio amet. Auctor sit mattis non id proin
          elit placerat. Lectus morbi amet et aliquam magna mauris.
        </p>
        <p className="small">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eu in
          orci, nunc amet libero. Nam scelerisque vestibulum bibendum a turpis.
          Ante feugiat lectus massa, odio amet. Auctor sit mattis non id proin
          elit placerat. Lectus morbi amet et aliquam magna mauris.
        </p>
        <button className="btn-primary">Start Teaching</button>
      </div>
    </div>
  );
};

export default BecomeMentor;
