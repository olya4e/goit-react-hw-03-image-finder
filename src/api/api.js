import axios from 'axios';
import { API_KEY } from '../constants/constants';
import { BASE_FILTER } from '../constants/constants';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export const getImageFromApi = async (page, query) => {
  const response = await axios.get(
    `?q=${query}&page=${page}&key=${API_KEY}&${BASE_FILTER}`
  );
  const images = response.data.hits;
  const totalHits = response.data.totalHits;
  if (totalHits === 0) {
    alert(
      "Sorry, we can't find anyting for your request. Please, enter another request"
    );
  }
  return images;
};
