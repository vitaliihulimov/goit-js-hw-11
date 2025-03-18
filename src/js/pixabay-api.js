import axios from 'axios';
const API_KEY = '49410735-a7c42e02d1ae980291a09914d';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImg(query) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
      },
    });
    return response.data.hits;
  } catch (error) {
    console.error('Ошибка:', error);
  }
}
