
const MOVIE_DB_BASE_URL = 'https://api.themoviedb.org/3';
const MOVIE_DB_API_KEY = "844dba0bfd8f3a4f3799f6130ef9e335"


export const  createMovieDbUrl = (relativeUrl, queryParams) => {
    let baseUrl = `${MOVIE_DB_BASE_URL}${relativeUrl}?api_key=${MOVIE_DB_API_KEY}`;
    if (queryParams) {
        Object.keys(queryParams)
            .forEach(paramName => baseUrl += `&${paramName}=${queryParams[paramName]}`);
    }
    return baseUrl;
}
  