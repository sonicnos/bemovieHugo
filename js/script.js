const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc'
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZWI4YWQ4Y2NkNmQxZDYyOWNkOTk5MWVkYmU0ZDViZiIsInN1YiI6IjY1MzI4YWEyNmY4ZDk1MDEwYmJkMTQyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8pHbIKrTqqxKVrrbbsMcmfcX8Ju_5ES_ax1thT33X3A'
  }
};

async function getData () {
  const r = await fetch(url, options);
  console.log(r);
}

getData();

// fetch(url, options)
//   .then(response => response.json())
//   .then(response => {
//     response.results.forEach(movie => {
//       console.log(movie.results);
//     });
//   })
//   .catch(err => console.error(err));





//   const slide = document.querySelector('.item img');

//   console.log(slide);
//   console.log(slide.src);
//   console.log(response.results);


//   //let slideUrl = `https://image.tmdb.org/t/p/w500${}`

// console.log(slideUrl);

//   //slide.src = slideUrl;