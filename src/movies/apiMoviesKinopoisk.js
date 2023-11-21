const API_KEY = "1ZZS688-NZX4B47-MBMVCF1-EWR82PG";
const API_URL_RANDOM = "https://api.kinopoisk.dev/v1.3/movie?page=1&limit=10";
const API_URL_NAME = `https://api.kinopoisk.dev/v1.4/movie/search?page=1&limit=10&`;

// const API_URL_RANDOM =
//   "https://api.kinopoisk.dev/v1.3/movie/random?page=1&limit=10";

export async function getMovieKinopoisk(name) {
  const data = await fetch(`${API_URL_NAME}query=${name}`, {
    headers: {
      "Content-type": "application/json",
      "X-API-KEY": API_KEY,
    },
  });
  const response = await data.json();
  // console.log(response.docs);

  return response.docs;
}
