import React from "react";
import PropTypes from 'prop-types';
import axios from 'axios';
import Movie from "./Movie";


class App extends React.Component {

    state = {
        isLoading: true,
        movies: []
    }

    getMovies = async () => {
        const {data: {data: {movies}}} = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating')
        this.setState({movies, isLoading: false})
        console.log(movies)
    }

    componentDidMount() {
        this.getMovies()
    }

    render() {
        const {isLoading, movies} = this.state
        return <div> {isLoading ? 'Loading...' : movies.map (movie => {
            console.log(movies);
            return <Movie key={movie.id} poster={movie.medium_cover_image} summary={movie.summary} year={movie.year} id={movie.id} title={movie.title}/>
        })} </div>

    }
}

export default App;
