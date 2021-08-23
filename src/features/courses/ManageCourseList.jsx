import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import CourseList from "./CourseList.jsx";

function ManageCourseList({ courses, onDelete }) {
  const [openModalVideo, setOpenModalVideo] = useState(false);
  const currentSlug = useRef("");

  const handleModalVideo = (data) => {
    currentSlug.current = data;
    setOpenModalVideo(!openModalVideo);
  };

  return (
    <CourseList
      currentSlug={currentSlug}
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
