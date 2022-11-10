import axios from "axios";

/**
 * @func httpGetCompanies Make a request to the API
 * @returns List of companies
 */
export const httpGetCompanies = async () => {
  const url = "http://localhost:8000/companies";
  const response = await axios.get(url);
  return response;
};
