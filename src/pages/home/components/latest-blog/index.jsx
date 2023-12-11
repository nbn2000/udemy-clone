import "./styles.css";
import { Link } from "react-router-dom";
import blog1 from "../../../../assets/blog-1.jpg";
import blog2 from "../../../../assets/blog-2.jpg";
import blog3 from "../../../../assets/blog-3.webp";

const LatestBlog = () => {
  return (
    <div className="latest-blog">
      <h2>The Latest Blog</h2>
      <div className="blogs">
        {blogObj.map((i, index) => {
          return (
            <div className="blog" key={index}>
              <div className="img-placeholder">
                <img src={i.blogimg} alt="blog img" width={368} height={240} />
              </div>
              <div className="date">
                <span className="x-small">{i.blogDate}</span>
                <span className="x-small">{i.blogDur}</span>
              </div>
              <h4 className="name">{i.blogName}</h4>
              <p className="small">{i.blogP}</p>
              <Link to="/blog/">Read More</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LatestBlog;

const blogObj = [
  {
    blogDate: "3, Mei 2021",
    blogDur: "3 min read",
    blogimg: blog1,
    blogName: "10 graphic design trends to get you inspired in 2021",
    blogP:
      "Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed doeiusmod.",
  },
  {
    blogDate: "3, Mei 2021",
    blogDur: "3 min read",
    blogimg: blog2,
    blogName: "10 graphic design trends to get you inspired in 2021",
    blogP:
      "Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed doeiusmod.",
  },
  {
    blogDate: "3, Mei 2021",
    blogDur: "3 min read",
    blogimg: blog3,
    blogName: "10 graphic design trends to get you inspired in 2021",
    blogP:
      "Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed doeiusmod.",
  },
];
