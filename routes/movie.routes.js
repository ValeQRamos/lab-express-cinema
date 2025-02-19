const router = require('express').Router();
const Movie = require('../models/Movie.model');

router.get('/movies', (req, res, next) => {
  Movie.find()
    .then(allTheMoviesDB => {
      res.render('movies', {movies: allTheMoviesDB})
    })
    .catch(err => {
      console.log('Error getting the movies from DB -->', err)
      next(err)
    })
})

router.get('/movies/:movieId', (req, res, next) => {
  const {movieId} = req.params;
  Movie.findById(movieId)
    .then( movie => {
      res.render('./movie-details', {movie: movie}) 
    })
    .catch(err => {
      console.log(`Error retrieving movie details --> ${err}`, )
      next(err)
    })
})

module.exports = router;