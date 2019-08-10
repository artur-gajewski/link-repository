import axios from "axios";

const LINK_REPOSITORY_API_URL = "http://localhost:8080";

class LinkDataService {
  retrieveAllLinks(name) {
    return axios.get(`${LINK_REPOSITORY_API_URL}/links`);
  }

  retrieveLink(id) {
    return axios.get(`${LINK_REPOSITORY_API_URL}/links/${id}`);
  }

  deleteLink(id) {
    return axios.delete(`${LINK_REPOSITORY_API_URL}/links/${id}`);
  }

  updateLink(id, link) {
    return axios.put(`${LINK_REPOSITORY_API_URL}/links/${id}`, link);
  }

  createLink(link) {
    return axios.post(`${LINK_REPOSITORY_API_URL}/links/`, link);
  }
}

export default new LinkDataService();
