import axios from "axios";

export function requestGetCompanies() {
  return axios.request({
    method: "get",
    url: "http://localhost:8000/companies",
  });
}
