const API_KEY= process.env.API_KEY

export const requests= {
    fetchTrending: {
        title: "Trending",
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    fetchTopRated: {
        title: "TopRated",
        url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`
    },
    fetchActionMovies: {
        title: "Action",
        url: `/discover/movie?api_key=${API_KEY}&language=en-US`
    },
    fetchComedyMovies: {
        title: "Comedy",
        url: `/discover/movie?api_key=${API_KEY}&language=en-US`
    },
    fetchHorrorMovies: {
        title: "Horror",
        url: `/discover/movie?api_key=${API_KEY}&language=en-US`
    },
    fetchRomanticMovies: {
        title: "Romance",
        url: `/discover/movie?api_key=${API_KEY}&language=en-US`
    },
}