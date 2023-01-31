const express = require('express');
const { readFile } = require('fs/promises');
const path = require('path');

const pathMovies = path.resolve(__dirname, 'movies.json');

const getFilms = async () => {
    const content = await readFile(pathMovies, 'utf-8');
    const response = JSON.parse(content);
    return response;
};

const app = express();
app.use(express.json());

app.get('/movies/:id', async (req, res) => {
    const { params } = req;

    const content = await getFilms();
    const movie = content.find((m) => m.id === +params.id);

    res.status(200).json(movie);
});

app.get('/movies', async (req, res) => {
    const movies = await getFilms();
    res.status(200).json(movies);
});

app.post('/movies', async (req, res) => {
    const movies = await getFilms();
    const { movie, price } = req.body;
    const newMovie = {
        id: movies[movies.length - 1].id + 1,
        movie,
        price,
    };
    const allMovies = [...movies, newMovie];
    res.status(201).json(allMovies);
});

app.put('/movies/:id', async (req, res) => {
    const { id } = req.params;
    const movies = await getFilms();
    const { movie, price } = req.body;
    const index = movies.findIndex((element) => element.id === Number(id));
    movies[index] = { id: Number(id), movie, price };
    const allMovies = [...movies, movies[index]];
    res.status(200).json(allMovies);
});

app.delete('/movies/:id', async (req, res) => {
    const { id } = req.params;
    const movies = await getFilms();
    const newMovies = movies.filter((e) => e.id !== +id);
    res.status(200).json(newMovies);
});

app.get('/movies/search', async (req, res) => {
    const { q } = req.query;
    const movies = await getFilms();
    if (q) {
        const filteredMovies = movies.filter((element) => element.movie.includes(q));
        return res.status(200).json(filteredMovies);
    }
    res.status(200).end();
});

app.listen(3000, () => console.log('rodou'));