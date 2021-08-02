import axios from "axios";
import { REACT_APP_API_URL } from "../constant";
const baseUrl = REACT_APP_API_URL + "/authors/";

export async function getAuthors() {
  try {
    const response = await axios.get(baseUrl);
    if (response.status === 200) return response.data;
  } catch (error) {
    throw new Error(error.response.message)
  }
}