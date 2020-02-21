import axios from 'axios'
// import qs from "qs"

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.timeout = 5000;

function fetch(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, params).then((res) => {
                resolve(res)
            },
            (error) => {
                reject(error)
            })
    });
}

axios.interceptors.request.use((config) => {
    // console.log(config);
    return config;
}, (error) => {
    console.log(error)
})


// export default {
//     searchCompany(params){
//         return fetch("search/company",{params})
//     },
//     searchCollection(params){//Search for collections.
//         return fetch("search/collection",{params})
//     },
//     searchKeyword(params){//Search for keywords.
//         return fetch("search/keyword",{params})
//     },
//     searchMovie(params) {
//         return fetch("search/movie",{params})
//     },
//     searchMulti(params){//Search multiple models in a single request. Multi search currently supports searching for movies, tv shows and people in a single request.
//         return fetch("search/multi",{params})
//     },
//     searchPeople(params){//Search for people.
//         return fetch("search/person",{params})
//     },
//     searchTv(params){//Search for a TV show.
//         return fetch("search/tv",{params})
//     }
//
// }

// get upcoming data
export function getUpcoming(params) {
    return fetch("movie/now_playing",{params});
}

//get nowplaying data
export function getNowPlaying(params) {
    return fetch("movie/upcoming",{params});
}

// //get upcoming data
// export function getUpcoming(params) {
//     return fetch("http://localhost/tmdb/upcoming.php", {params});
// }
//
// //get nowplaying data
// export function getNowPlaying(params) {
//     return fetch("http://localhost/tmdb/nowplaying.php", {params});
// }
//
//
// export default {
//     searchMovie(params) {
//         return fetch("http://localhost/tmdb/searchmovie.php", {params})
//     }
// }