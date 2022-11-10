import axios from "axios";

export const httpGetCompanies = async () => {
  const response = await axios.get("http://localhost:8000/companies");
  return response;
};
