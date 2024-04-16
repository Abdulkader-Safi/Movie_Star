import { MediaType } from '~/interfaces/apiresults';

const API_KEY = process.env.EXPO_PUBLIC_API_KEY;

export const getTrending = async (page: number = 1) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=${API_KEY}&page=${page}`
    );

    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const getSearchResults = async (query: string) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/multi?language=en-US&api_key=${API_KEY}&query=${encodeURIComponent(query)}`
    );

    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const getMovieDetails = async (id: number, type: MediaType) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/${type}/${id}?language=en-US&api_key=${API_KEY}`
    );

    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
