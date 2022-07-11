import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const key = '27545789-efa6a9552ac2720fa0dadb520';

export const getImage = async values => {
  const response = await axios.get(
    `q=${values}?key=${key}&&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=${this.perPage}`
  );
  return response.data.hits;
};
