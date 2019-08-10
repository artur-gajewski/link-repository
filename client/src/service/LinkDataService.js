import axios from "axios";

const COURSE_API_URL = "http://localhost:8080";

class LinkDataService {
  retrieveAllLinks(name) {
    return axios.get(`${COURSE_API_URL}/links`);
  }

  retrieveLink(id) {
    return axios.get(`${COURSE_API_URL}/links/${id}`);
  }

  deleteLink(id) {
    return axios.delete(`${COURSE_API_URL}/links/${id}`);
  }

  updateLink(id, link) {
    return axios.put(`${COURSE_API_URL}/links/${id}`, link);
  }

  createLink(link) {
    return axios.post(`${COURSE_API_URL}/links/`, link);
  }
}

export default new LinkDataService();
