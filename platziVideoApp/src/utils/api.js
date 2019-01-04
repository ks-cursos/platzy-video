const URL_API = "https://yts.am/api/v2/";

class Api {
    async getSuggestion(id) {
        const querry = await fetch(`${URL_API}movie_suggestions.json?movie_id=${id}`);
        const { data } = await querry.json();
        return data.movies;
    }
    async getMovies() {
        const querry = await fetch(`${URL_API}list_movies.json`);
        const { data } = await querry.json();
        return data.movies;
    }
}
export default new Api();