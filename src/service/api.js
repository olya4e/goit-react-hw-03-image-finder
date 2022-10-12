import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '29924720-00695de3645e8c14b883cf24e';
const BASE_FILTER = 'image_type=photo&orientation=horizontal&per_page=12';

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
