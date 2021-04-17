import React from "react";
import PropTypes from 'prop-types';
import axios from 'axios';
import Movie from "./Movie";
import "./App.css"

// My First Project of ClassComponent (04,17,2021)  :)

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
        return (

            <section className={"container"}>{isLoading ?
                <div className={'loader'}><span className={'loader_text'}>Loading... <br/>here is only one page :)</span>
                </div> : movies.map(movie => {
                    console.log(movies);
                    return (
                        <div className={'movies'}>
                            <Movie key={movie.id}
                                   poster={movie.medium_cover_image}
                                   summary={movie.summary}
                                   year={movie.year}
                                   id={movie.id}
                                   title={movie.title}
                                   genres={movie.genres}
                            />
                        </div>

                    )
                })}
            </section>)
    }
}

export default App;
