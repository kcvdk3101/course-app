import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ModalVideo from "../common/ModalVideo.jsx";
import { YOUTUBE_BASE_URL } from "../../../constant.js";

const CourseList = ({
  courses,
  onDelete,
  openModalVideo,
  handleOpenModalVideo,
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
          console.log(`https://www.youtube.com/watch?v=${course.slug}`);
          return (
            <tr key={course.id}>
              <td>
                <button
                  className="btn btn-light"
                  onClick={() => handleOpenModalVideo()}
                >
                  Watch
                </button>
                {openModalVideo ? (
                  <ModalVideo
                    url={`https://www.youtube.com/watch?v=${course.slug}`}
                    openModalVideo={openModalVideo}
                    handleOpenModalVideo={handleOpenModalVideo}
                  />
                ) : null}
              </td>
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
  handleOpenModalVideo: PropTypes.func.isRequired,
};

export default CourseList;
