import "./styles.css";
import Header from "./components/header";
import TrendingCourses from "./components/trending-courses";
import TopCategories from "./components/top-categories";
import BecomeMentor from "./components/become-a-mentor";
import Testimonial from "./components/testimonials";
import TrustedCompanies from "./components/trusted-companies";
import LatestBlog from "./components/latest-blog";

const Home = () => {
  return (
    <div className="home">
      <header>
        <Header />
      </header>
      <main>
        <section>
          <TrendingCourses />
        </section>

        <section>
          <TopCategories />
        </section>

        <section className="become-mentor-section">
          <BecomeMentor />
        </section>

        <section>
          <Testimonial />
        </section>

        <section>
          <TrustedCompanies />
        </section>
        <section>
          <LatestBlog />
        </section>
      </main>
    </div>
  );
};
export default Home;
