import React, { useState } from "react";
import PropTypes from "prop-types";
import CourseList from "./CourseList.jsx";

function ManageCourseList({ courses, onDelete }) {
  const [openModalVideo, setOpenModalVideo] = useState(false);

  const handleModalVideo = () => {
    setOpenModalVideo(!openModalVideo);
  };

  console.log(openModalVideo);
  return (
    <CourseList
      courses={courses}
      onDelete={onDelete}
      openModalVideo={openModalVideo}
      handleModalVideo={handleModalVideo}
    />
  );
}

ManageCourseList.propTypes = {
  courses: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ManageCourseList;
