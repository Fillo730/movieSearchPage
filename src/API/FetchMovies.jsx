import axios from "axios";

const API_KEY = "9891fd0b07e31640e97728760bef5013";

async function fetchMovies(searchString) {
    try {
        const response = await axios.get("https://api.themoviedb.org/3/search/movie", {
            params: {
                api_key: API_KEY, 
                query: searchString, 
            }
        })
        console.log(response.data.results);
        return response.data.results;
    }
    catch(error) {
        console.error("Error while fetching data: " + error);
    }
}

export default fetchMovies;