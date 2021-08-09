import axios from "axios";
import { REACT_APP_API_URL } from "../constants/constant";
const baseUrl = REACT_APP_API_URL + "/courses/";

export async function getCourses() {
  try {
    const response = await axios.get(baseUrl);
    if (response.status === 200) return response.data;
  } catch (error) {
    throw new Error(error.response.message)
  }
}

export async function saveCourse(course) {
  try {
    await axios({
      method: course.id ? "PUT" : "POST",
      url: baseUrl + (course.id || ""),
      headers: { "content-type": "application/json" },
      data: JSON.stringify(course)
    })
  } catch (error) {
    throw new Error(error)
  }
}

export async function deleteCourse(courseId) {
  try {
    const response = await axios.delete(baseUrl + courseId)
    console.log(response)
  } catch (error) {
    throw new Error(error)
  }
}

// export function deleteCourse(courseId) {
//   return fetch(baseUrl + courseId, { method: "DELETE" })
//     .then(handleResponse)
//     .catch(handleError);
// }
