import axios from 'axios';

const API_URL = 'https://api.stackexchange.com/2.3/search';

export const searchQuestions = async (query) => {
  const response = await axios.get(API_URL, {
    params: {
      order: 'desc',
      sort: 'activity',
      intitle: query,
      site: 'stackoverflow',
    },
  });

  return response.data.items;
};
