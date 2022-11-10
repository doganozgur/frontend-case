import axios from "axios";

/**
 * @func httpGetItems Make a request to the API
 * @returns List of items
 */
export const httpGetItems = async () => {
  const url = "http://localhost:8000/items";
  const response = await axios.get(url);
  return response;
};
