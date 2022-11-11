import axios from "axios";

export function requestGetItems() {
  return axios.request({
    method: "get",
    url: "http://localhost:8000/items",
  });
}
