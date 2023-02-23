import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com';

export const getHitsService = async (query, page) => {
  const { data } = await axios.get('/api/', {
    params: {
      key: '33147706-7bde912591982fcfe082c4aa6',
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
      q: query,
      page,
    },
  });
  return data;
};
