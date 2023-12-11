import "./styles.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { AiFillPlayCircle } from "react-icons/ai";
import { RiFileList2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useState } from "react";

const ModuleCourses = () => {
  const [modules, setModules] = useState({
    m1: false,
    m2: false,
    m3: false,
    m4: false,
    m5: false,
    m6: false,
    m7: false,
  });
  return (
    <div className="module-course">
      <div className="mc-header">
        <h3>Module Courses</h3>
        <span className="small">24 Modules - 124 Lectures - 24 h 12m</span>
      </div>
      <div className="mc-body">
        {modulesObj.map((i, index) => {
          return (
            <div key={index}>
              <button
                onClick={() => {
                  setModules((prev) => ({
                    ...prev,
                    [i.id]: !prev[i.id],
                  }));
                }}
              >
                <span className="small">{i.name}</span>{" "}
                {!modules[i.id] ? <IoIosArrowDown /> : <IoIosArrowUp />}
              </button>
              {modules[i.id] && (
                <div className="mc-inner-body">
                  {i.body.map((item, ind) => {
                    return (
                      <div key={ind}>
                        <Link>
                          {item.logo} {item.bodyName}
                        </Link>
                        <span>{item.time}</span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
      <button className="btn-primary">17 More Modules</button>
    </div>
  );
};

export default ModuleCourses;

const modulesObj = [
  {
    id: "m1",
    name: "Introducing to Web Development",
    body: [
      { bodyName: "Welcome!", time: "01:24", logo: <AiFillPlayCircle /> },
      {
        bodyName: "Syllabus download",
        time: "01:24",
        logo: <RiFileList2Line />,
      },
      {
        bodyName: "Courses resources",
        time: "01:24",
        logo: <RiFileList2Line />,
      },
      {
        bodyName: "Join online group classes",
        time: "01:24",
        logo: <RiFileList2Line />,
      },
      {
        bodyName: "How do website actually work?",
        time: "01:24",
        logo: <AiFillPlayCircle />,
      },
      {
        bodyName: "What is Internet?",
        time: "01:24",
        logo: <AiFillPlayCircle />,
      },
      {
        bodyName: "Download 10 rules code",
        time: "01:24",
        logo: <RiFileList2Line />,
      },
    ],
  },
  {
    id: "m2",
    name: "How the Internet works",
    body: [
      { bodyName: "Welcome!", time: "01:24", logo: <AiFillPlayCircle /> },
      {
        bodyName: "Syllabus download",
        time: "01:24",
        logo: <RiFileList2Line />,
      },
      {
        bodyName: "Courses resources",
        time: "01:24",
        logo: <RiFileList2Line />,
      },
      {
        bodyName: "Join online group classes",
        time: "01:24",
        logo: <RiFileList2Line />,
      },
      {
        bodyName: "How do website actually work?",
        time: "01:24",
        logo: <AiFillPlayCircle />,
      },
      {
        bodyName: "What is Internet?",
        time: "01:24",
        logo: <AiFillPlayCircle />,
      },
      {
        bodyName: "Download 10 rules code",
        time: "01:24",
        logo: <RiFileList2Line />,
      },
    ],
  },
  {
    id: "m3",
    name: "Introducing HTML",
    body: [
      { bodyName: "Welcome!", time: "01:24", logo: <AiFillPlayCircle /> },
      {
        bodyName: "Syllabus download",
        time: "01:24",
        logo: <RiFileList2Line />,
      },
      {
        bodyName: "Courses resources",
        time: "01:24",
        logo: <RiFileList2Line />,
      },
      {
        bodyName: "Join online group classes",
        time: "01:24",
        logo: <RiFileList2Line />,
      },
      {
        bodyName: "How do website actually work?",
        time: "01:24",
        logo: <AiFillPlayCircle />,
      },
      {
        bodyName: "What is Internet?",
        time: "01:24",
        logo: <AiFillPlayCircle />,
      },
      {
        bodyName: "Download 10 rules code",
        time: "01:24",
        logo: <RiFileList2Line />,
      },
    ],
  },
  {
    id: "m4",
    name: "Intermediate HTML",
    body: [
      { bodyName: "Welcome!", time: "01:24", logo: <AiFillPlayCircle /> },
      {
        bodyName: "Syllabus download",
        time: "01:24",
        logo: <RiFileList2Line />,
      },
      {
        bodyName: "Courses resources",
        time: "01:24",
        logo: <RiFileList2Line />,
      },
      {
        bodyName: "Join online group classes",
        time: "01:24",
        logo: <RiFileList2Line />,
      },
      {
        bodyName: "How do website actually work?",
        time: "01:24",
        logo: <AiFillPlayCircle />,
      },
      {
        bodyName: "What is Internet?",
        time: "01:24",
        logo: <AiFillPlayCircle />,
      },
      {
        bodyName: "Download 10 rules code",
        time: "01:24",
        logo: <RiFileList2Line />,
      },
    ],
  },
  {
    id: "m5",
    name: "Introducing CSS",
    body: [
      { bodyName: "Welcome!", time: "01:24", logo: <AiFillPlayCircle /> },
      {
        bodyName: "Syllabus download",
        time: "01:24",
        logo: <RiFileList2Line />,
      },
      {
        bodyName: "Courses resources",
        time: "01:24",
        logo: <RiFileList2Line />,
      },
      {
        bodyName: "Join online group classes",
        time: "01:24",
        logo: <RiFileList2Line />,
      },
      {
        bodyName: "How do website actually work?",
        time: "01:24",
        logo: <AiFillPlayCircle />,
      },
      {
        bodyName: "What is Internet?",
        time: "01:24",
        logo: <AiFillPlayCircle />,
      },
      {
        bodyName: "Download 10 rules code",
        time: "01:24",
        logo: <RiFileList2Line />,
      },
    ],
  },
  {
    id: "m6",
    name: "Intermediate CSS",
    body: [
      { bodyName: "Welcome!", time: "01:24", logo: <AiFillPlayCircle /> },
      {
        bodyName: "Syllabus download",
        time: "01:24",
        logo: <RiFileList2Line />,
      },
      {
        bodyName: "Courses resources",
        time: "01:24",
        logo: <RiFileList2Line />,
      },
      {
        bodyName: "Join online group classes",
        time: "01:24",
        logo: <RiFileList2Line />,
      },
      {
        bodyName: "How do website actually work?",
        time: "01:24",
        logo: <AiFillPlayCircle />,
      },
      {
        bodyName: "What is Internet?",
        time: "01:24",
        logo: <AiFillPlayCircle />,
      },
      {
        bodyName: "Download 10 rules code",
        time: "01:24",
        logo: <RiFileList2Line />,
      },
    ],
  },
  {
    id: "m7",
    name: "Introduction Bootstrap",
    body: [
      { bodyName: "Welcome!", time: "01:24", logo: <AiFillPlayCircle /> },
      {
        bodyName: "Syllabus download",
        time: "01:24",
        logo: <RiFileList2Line />,
      },
      {
        bodyName: "Courses resources",
        time: "01:24",
        logo: <RiFileList2Line />,
      },
      {
        bodyName: "Join online group classes",
        time: "01:24",
        logo: <RiFileList2Line />,
      },
      {
        bodyName: "How do website actually work?",
        time: "01:24",
        logo: <AiFillPlayCircle />,
      },
      {
        bodyName: "What is Internet?",
        time: "01:24",
        logo: <AiFillPlayCircle />,
      },
      {
        bodyName: "Download 10 rules code",
        time: "01:24",
        logo: <RiFileList2Line />,
      },
    ],
  },
];
