import "./styles.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import blog from "../../assets/blog-1.jpg";
import blog2 from "../../assets/blog-2.jpg";
import blog3 from "../../assets/blog-3.webp";

const Blog = () => {
  return (
    <div className="blog">
      <header>
        <div>
          <span className="small">Home</span>
          <IoIosArrowForward />
          <span className="small">Blog</span>
        </div>
        <h1>Latest Blog</h1>
      </header>
      <main>
        <div className="each-blog">
          <div className="photo-placeholder">
            <img src={blog} alt="blog " />
          </div>
          <div>
            <div className="each-inner-blog">
              <h3>How to experience powerful education free of charge</h3>
              <div>
                <span className="x-small">3 May 2021</span>{" "}
                <div className="blog-cirlce"></div>
                <span className="x-small">5 min read </span>
              </div>
              <p className="small">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                urna dolor quis enim, convallis vitae maecenas. Orci, erat enim
                adipiscing mattis elit nunc, sed facilisis. Enim, dui, diam sit
                at. Urna, sit sit eget placerat eget hendrerit consequat. Risus,
                cursus nibh aliquet facilisis laoreet sagittis quis. Aliquam
                amet, vel aliquam cursus aliquet pellentesque aenean. Sit
                vestibulum malesuada eget pharetra. Risus consequat bibendum
                dictum placerat convallis donec malesuada in porttitor. Sag
              </p>
            </div>
            <button className="btn-primary">Read More</button>
          </div>
        </div>

        <div className="each-blog">
          <div className="photo-placeholder">
            <img src={blog2} alt="blog" />
          </div>
          <div>
            <div className="each-inner-blog">
              <h3>How to experience powerful education free of charge</h3>
              <div>
                <span className="x-small">3 May 2021</span>{" "}
                <div className="blog-cirlce"></div>
                <span className="x-small">5 min read </span>
              </div>
              <p className="small">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                urna dolor quis enim, convallis vitae maecenas. Orci, erat enim
                adipiscing mattis elit nunc, sed facilisis. Enim, dui, diam sit
                at. Urna, sit sit eget placerat eget hendrerit consequat. Risus,
                cursus nibh aliquet facilisis laoreet sagittis quis. Aliquam
                amet, vel aliquam cursus aliquet pellentesque aenean. Sit
                vestibulum malesuada eget pharetra. Risus consequat bibendum
                dictum placerat convallis donec malesuada in porttitor. Sag
              </p>
            </div>
            <button className="btn-primary">Read More</button>
          </div>
        </div>

        <div className="each-blog">
          <div className="photo-placeholder">
            <img src={blog3} alt="blog" />
          </div>
          <div>
            <div className="each-inner-blog">
              <h3>How to experience powerful education free of charge</h3>
              <div>
                <span className="x-small">3 May 2021</span>{" "}
                <div className="blog-cirlce"></div>
                <span className="x-small">5 min read </span>
              </div>
              <p className="small">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                urna dolor quis enim, convallis vitae maecenas. Orci, erat enim
                adipiscing mattis elit nunc, sed facilisis. Enim, dui, diam sit
                at. Urna, sit sit eget placerat eget hendrerit consequat. Risus,
                cursus nibh aliquet facilisis laoreet sagittis quis. Aliquam
                amet, vel aliquam cursus aliquet pellentesque aenean. Sit
                vestibulum malesuada eget pharetra. Risus consequat bibendum
                dictum placerat convallis donec malesuada in porttitor. Sag
              </p>
            </div>
            <button className="btn-primary">Read More</button>
          </div>
        </div>

        <div className="each-blog">
          <div className="photo-placeholder">
            <img src={blog} alt="blog" />
          </div>
          <div>
            <div className="each-inner-blog">
              <h3>How to experience powerful education free of charge</h3>
              <div>
                <span className="x-small">3 May 2021</span>{" "}
                <div className="blog-cirlce"></div>
                <span className="x-small">5 min read </span>
              </div>
              <p className="small">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                urna dolor quis enim, convallis vitae maecenas. Orci, erat enim
                adipiscing mattis elit nunc, sed facilisis. Enim, dui, diam sit
                at. Urna, sit sit eget placerat eget hendrerit consequat. Risus,
                cursus nibh aliquet facilisis laoreet sagittis quis. Aliquam
                amet, vel aliquam cursus aliquet pellentesque aenean. Sit
                vestibulum malesuada eget pharetra. Risus consequat bibendum
                dictum placerat convallis donec malesuada in porttitor. Sag
              </p>
            </div>
            <button className="btn-primary">Read More</button>
          </div>
        </div>

        <div className="pagination-courses">
          <button>
            <IoIosArrowBack />
          </button>
          <div className="numbers">
            <button className={!sampleCondition && "clicked"}>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
          </div>
          <button className={!sampleCondition && "clicked-arrow"}>
            <IoIosArrowForward />
          </button>
        </div>
      </main>
    </div>
  );
};
export default Blog;

const sampleCondition = false;
