import axios from "axios";
import { REACT_APP_API_URL } from "../constants/constant";
const baseUrl = REACT_APP_API_URL + "/authors/";

export async function getAuthors() {
  try {
    const response = await axios.get(baseUrl);
    if (response.status === 200) return response.data;
  } catch (error) {
    throw new Error(error.response.message)
  }
}

export async function saveAuthor(author) {
  try {
    await axios({
      method: author.id ? "PUT" : "POST",
      url: baseUrl + (author.id || ""),
      headers: { "content-type": "application/json" },
      data: JSON.stringify(author)
    })
  } catch (error) {
    throw new Error(error)
  }
}