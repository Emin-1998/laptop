"use strict";
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", " ");

const personalMovieDB = {
count: numberOfFilms,
movies: {},
actors: {},
genres: [],
privat: false
};

const a = prompt("Один из последних просмотренных фмльмов?", " "),
      b = prompt("На сколько оцените его?", " "),
      с = prompt("Один из последних просмотренных фмльмов?", " "),
      d = prompt("На сколько оцените его?", " ");

      personalMovieDB.movies[a] = b;
      personalMovieDB.movies[c] = d;

      console.log(personalMovieDB);