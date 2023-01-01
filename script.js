const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};

   const a = prompt("Один из последних просмотренных фильмов?", ""),
         b = prompt("На сколько щцените его?",""), 
         c = prompt("Один из последних просмотренных фильмов?", ""),
         d = prompt("На сколько щцените его?","");

         personalMovieDB.movies[a] = b;
         personalMovieDB.movies[a] = d;

         console.log(personalMovieDB);