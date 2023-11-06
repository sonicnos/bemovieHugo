const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=en-US&page=1&release_date.gte=2023-10-26&sort_by=popularity.desc'
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZWI4YWQ4Y2NkNmQxZDYyOWNkOTk5MWVkYmU0ZDViZiIsInN1YiI6IjY1MzI4YWEyNmY4ZDk1MDEwYmJkMTQyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8pHbIKrTqqxKVrrbbsMcmfcX8Ju_5ES_ax1thT33X3A'
  }
};

const searchBar = document.getElementById('search');
const submitBtn = document.querySelector('#searchBtn');
const resultValue = document.querySelector('.search-bar-value');

const slideInside = document.querySelector('.item');
const slideImg = document.querySelector('.item img');

const swiperWrapperSearch = document.querySelector('.swiper-wrapper-search');
const slideSearch = document.querySelector('.slide-last-search');

const swiperWrapperLatestReleases = document.querySelector('.swiper-wrapper-latest-releases');
const slideLastRelease = document.querySelector('.slide-last-releases');

const navMovieGenre = document.querySelector('.nav_genre');
const swiperWrapperGenre = document.querySelector('.swiper-wrapper-genre');
const slideGenre = document.querySelector('.slide-genre');

navMovieGenre.addEventListener('click', (e) => {
  e.preventDefault();
});


navMovieGenre.children[0].addEventListener('click', (e) => {
  getMovieCategory(35);
});
navMovieGenre.children[1].addEventListener('click', (e) => {
  // deleteAllDiv(swiperWrapperGenre);
  getMovieCategory(18);
});
navMovieGenre.children[2].addEventListener('click', (e) => {
  getMovieCategory(28);
});
navMovieGenre.children[3].addEventListener('click', (e) => {
  getMovieCategory(10749);
});
navMovieGenre.children[4].addEventListener('click', (e) => {
  console.log("fantasy works");
  getMovieCategory(14);
});
navMovieGenre.children[5].addEventListener('click', (e) => {
  console.log("animation works");
  getMovieCategory(16);
});


submitBtn.addEventListener ('click', (e) => {
  e.preventDefault();
  e.stopImmediatePropagation();
  resultValue.innerHTML = searchBar.value;
  if(searchBar.value.length>=1){
    getSearchResult (searchBar.value)
  }
  
});



function displaySlide(index, arrayUrlPoster, swipperTag) {
  let newItem = slideInside.cloneNode(true);
  newDiv = document.createElement("div");
  newDiv.classList.add('swiper-slide');
  newDiv.appendChild(newItem)
  swipperTag.appendChild(newDiv);
  swipperTag.children[index].querySelector("img").src = arrayUrlPoster
} 

function dataDispatcher(response, swipperCategory, htmlTag) {  
  for (let i=0; i < response.length; i++){
    swipperCategory.children[i].querySelector(htmlTag).innerHTML = response[i];
  }
}

// function deleteAllDiv(htmlTag){
//   for (let i = 1; i < 19; i++) {
//     htmlTag.children[i].remove();
//   }
// }

function deleteLastDiv(htmlTag) {
  htmlTag.children[20].remove();
}

async function getMovieCategory (category) {
  const response = await fetch(`https://api.themoviedb.org/3/discover/movie?&with_genres=${category}`, options);
  const data = await response.json();
  let allUrlPoster = [];
  let allMovieTitle = [];
  let allMovieDate = [];  
  let allMovieVote = [];
  let urlPoster = '';

  data.results.forEach((movie) => {
    urlPoster = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    movieTitle = movie.original_title;
    movieDate = movie.release_date;
    movieVote = movie.vote_average;
    allUrlPoster.push(urlPoster);
    allMovieTitle.push(movieTitle);
    allMovieDate.push(movieDate);
    allMovieVote.push(movieVote);
  });

  slideImg.src = allUrlPoster[0]
  for (let i=0; i < allUrlPoster.length; i++) {
    displaySlide(i, allUrlPoster[i], swiperWrapperGenre);
  }

  deleteLastDiv(swiperWrapperGenre);

  dataDispatcher(allMovieTitle, swiperWrapperGenre,'.title');
  dataDispatcher(allMovieDate, swiperWrapperGenre,'.date');
  dataDispatcher(allMovieVote, swiperWrapperGenre,'.note');

}
getMovieCategory(35);

async function getSearchResult (searchBar) {
  const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchBar}&include_adult=false&language=en-US&page=1`, options);
  const data = await response.json();
  let allUrlPoster = [];
  let allMovieTitle = [];
  let allMovieDate = [];  
  let allMovieVote = [];
  let urlPoster = '';

  data.results.forEach((movie) => {
    urlPoster = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    movieTitle = movie.original_title;
    movieDate = movie.release_date;
    movieVote = movie.vote_average;
    allUrlPoster.push(urlPoster);
    allMovieTitle.push(movieTitle);
    allMovieDate.push(movieDate);
    allMovieVote.push(movieVote);
  });

  slideImg.src = allUrlPoster[0]
  for (let i=0; i < allUrlPoster.length; i++) {
    displaySlide(i, allUrlPoster[i], swiperWrapperSearch);
  }


  
  dataDispatcher(allMovieTitle, swiperWrapperSearch, '.title');
  dataDispatcher(allMovieDate, swiperWrapperSearch, '.date');
  dataDispatcher(allMovieVote, swiperWrapperSearch, '.note');

}

async function getLastedReleases () {
  const response = await fetch(url, options);
  const data = await response.json();

  let allUrlPoster = [];
  let allMovieTitle = [];
  let allMovieDate = [];  
  let allMovieVote = [];
  let urlPoster = '';
 
  data.results.forEach((movie) => {
    urlPoster = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    movieTitle = movie.original_title;
    movieDate = movie.release_date;
    movieVote = movie.vote_average;
    allUrlPoster.push(urlPoster);
    allMovieTitle.push(movieTitle);
    allMovieDate.push(movieDate);
    allMovieVote.push(movieVote);
  });

  slideImg.src = allUrlPoster[0]
  for (let i=0; i < allUrlPoster.length; i++) {
    displaySlide(i, allUrlPoster[i], swiperWrapperLatestReleases);
  }
  deleteLastDiv(swiperWrapperLatestReleases);

  dataDispatcher(allMovieTitle, swiperWrapperLatestReleases,'.title');
  dataDispatcher(allMovieDate, swiperWrapperLatestReleases,'.date');
  dataDispatcher(allMovieVote, swiperWrapperLatestReleases,'.note');
}

getSearchResult ();
getLastedReleases ();















































// async function getUrlPosterLasted () {
//   const response = await fetch(url, options);
//   const data = await response.json();
//   let allUrlPoster = [];
//   let urlPoster;
  
//   data.results.forEach((movie) => {
//     urlPoster = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
//     allUrlPoster.push(urlPoster);
//   });

//   console.log(data);
//   return allUrlPoster;
// }

// async function getMovieTitleLasted () {
//   const response = await fetch(url, options);
//   const data = await response.json();
//   let allMovieTitle = [];    

//   data.results.forEach((movie) => {
//     movieTitle = movie.original_title;
//     allMovieTitle.push(movieTitle);
//   })
//   return allMovieTitle;

// }

// async function getMovieDateLasted () {
//   const response = await fetch(url, options);
//   const data = await response.json();
//   let allMovieDate = [];
  
//   data.results.forEach((movie) => {
//     movieDate = movie.release_date;
//     allMovieDate.push(movieDate);
//   });

//   return allMovieDate;
// }

// //don't forget to make a function generate movie genre

// async function getMovieVoteLasted () {
//   const response = await fetch(url, options);
//   const data = await response.json();
//   let allMovieVote = [];
  
//   data.results.forEach((movie) => {
//     movieVote = movie.vote_average;
//     allMovieVote.push(movieVote);
//   });

//   return allMovieVote;
// }




// const allUrlPosterLasted = getUrlPosterLasted();
// const allMovieTitleLasted = getMovieTitleLasted();
// const allMovieDateLasted = getMovieDateLasted();
// const allMovieVoteLasted = getMovieVoteLasted();





// allUrlPosterLasted.then(resAllUrlPoster => {
//   slideLastReleaseImg.src = resAllUrlPoster[0]
//   for (let i=0; i < resAllUrlPoster.length; i++) {
//     displaySlide(i, resAllUrlPoster[i], swiperWrapperLatestReleases);
//   }
//   deleteLastDiv(swiperWrapperLatestReleases);

// });

// allMovieTitleLasted.then(resAllMovieTitle => {
//   dataDispatcher(resAllMovieTitle, swiperWrapperLatestReleases,'.title');
// });

// allMovieDateLasted.then(resallMovieDate => {
//   dataDispatcher(resallMovieDate, swiperWrapperLatestReleases,'.date');
// });

// allMovieVoteLasted.then(resallMovieVote => {
//   dataDispatcher(resallMovieVote, swiperWrapperLatestReleases,'.note');
// });

