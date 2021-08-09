import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ModalVideo from "../../components/ModalVideo.jsx";
import { YOUTUBE_BASE_URL } from "../../constants/constant.js";

const CourseList = ({
  courses,
  onDelete,
  openModalVideo,
  handleModalVideo,
}) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th />
          <th>Title</th>
          <th>Author</th>
          <th>Category</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {courses.map((course) => {
          return (
            <tr key={course.id}>
              <td>
                <button
                  className="btn btn-light"
                  onClick={() => handleModalVideo()}
                >
                  Watch
                </button>
              </td>
              {openModalVideo ? (
                <ModalVideo
                  url={`${YOUTUBE_BASE_URL}${course.slug}`}
                  openModalVideo={openModalVideo}
                  handleModalVideo={handleModalVideo}
                />
              ) : null}
              <td>
                <Link to={"/course/" + course.slug}>{course.title}</Link>
              </td>
              <td>{course.authorName}</td>
              <td>{course.category}</td>
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => onDelete(course)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

CourseList.propTypes = {
  courses: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  openModalVideo: PropTypes.bool.isRequired,
  handleModalVideo: PropTypes.func.isRequired,
};

export default CourseList;
