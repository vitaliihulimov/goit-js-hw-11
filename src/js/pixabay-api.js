import axios from 'axios';
const API_KEY = '49170248-1681c7614cb0540d906e8c034';
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
