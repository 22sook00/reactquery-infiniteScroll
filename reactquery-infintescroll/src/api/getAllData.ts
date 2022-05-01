import axios from "axios";

export const getAllData = async ({ page = 1 }) => {
  const response = await axios.get(
    `https://api.github.com/search/repositories?q=topic:reactjs&per_page=30&page=${page}`
  );
  return response;
};
