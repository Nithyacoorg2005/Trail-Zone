import React, { useState, useEffect } from 'react';
import './MoviePage.css';

const MoviePage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);

    // Fetch data from the TMDB API
    useEffect(() => {
        const fetchMovies = async () => {
            const apiKey = 'api_key';  // Replace with your actual API key
            const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
            try {
                const response = await fetch(url);
                const data = await response.json();
                setMovies(data.results);
            } catch (error) {
                console.error("Error fetching the movies:", error);
            }
        };
        fetchMovies();
    }, []);

    // Handle search query
    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
        const filtered = movies.filter((movie) => 
            movie.title.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setFilteredMovies(filtered);
    };

    return (
        <div className="movie-page">
            {/* Search Bar */}
            <div className="search-bar">
                <input 
                    type="text"
                    placeholder="Search for movies..."
                    value={searchQuery}
                    onChange={handleSearch}
                    className="form-control search-input"
                />
            </div>

            {/* Movie Categories */}
            <section className="categories py-5">
                <div className="container">
                    <h2 className="text-center mb-4">Browse by Genre</h2>

                    <div className="row">
                        {/* Action Movies */}
                        <div className="col-md-6">
                            <div className="category-card">
                                <h3>Action Movies</h3>
                                <div className="movie-grid">
                                    {movies.filter(movie => movie.genre_ids.includes(28)).map((movie) => (
                                        <div className="movie-card" key={movie.id}>
                                            <img 
                                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                                                alt={movie.title}
                                                className="img-fluid" 
                                            />
                                            <div className="movie-details">
                                                <h5>{movie.title}</h5>
                                                <p>{movie.release_date}</p>
                                                <a href={`/movie/${movie.id}`} className="btn btn-warning">More Info</a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Drama Movies */}
                        <div className="col-md-6">
                            <div className="category-card">
                                <h3>Drama Movies</h3>
                                <div className="movie-grid">
                                    {movies.filter(movie => movie.genre_ids.includes(18)).map((movie) => (
                                        <div className="movie-card" key={movie.id}>
                                            <img 
                                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                                                alt={movie.title}
                                                className="img-fluid" 
                                            />
                                            <div className="movie-details">
                                                <h5>{movie.title}</h5>
                                                <p>{movie.release_date}</p>
                                                <a href={`/movie/${movie.id}`} className="btn btn-warning">More Info</a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {/* Romantic Movies */}
                        <div className="col-md-6">
                            <div className="category-card">
                                <h3>Romantic Movies</h3>
                                <div className="movie-grid">
                                    {movies.filter(movie => movie.genre_ids.includes(10749)).map((movie) => (
                                        <div className="movie-card" key={movie.id}>
                                            <img 
                                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                                                alt={movie.title}
                                                className="img-fluid" 
                                            />
                                            <div className="movie-details">
                                                <h5>{movie.title}</h5>
                                                <p>{movie.release_date}</p>
                                                <a href={`/movie/${movie.id}`} className="btn btn-warning">More Info</a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Horror Movies */}
                        <div className="col-md-6">
                            <div className="category-card">
                                <h3>Horror Movies</h3>
                                <div className="movie-grid">
                                    {movies.filter(movie => movie.genre_ids.includes(27)).map((movie) => (
                                        <div className="movie-card" key={movie.id}>
                                            <img 
                                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                                                alt={movie.title}
                                                className="img-fluid" 
                                            />
                                            <div className="movie-details">
                                                <h5>{movie.title}</h5>
                                                <p>{movie.release_date}</p>
                                                <a href={`/movie/${movie.id}`} className="btn btn-warning">More Info</a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* If search query is active, display filtered movies */}
                    {searchQuery && (
                        <section className="search-results">
                            <h3 className="text-center">Search Results for "{searchQuery}"</h3>
                            <div className="movie-grid">
                                {filteredMovies.length > 0 ? filteredMovies.map((movie) => (
                                    <div className="movie-card" key={movie.id}>
                                        <img 
                                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                                            alt={movie.title}
                                            className="img-fluid" 
                                        />
                                        <div className="movie-details">
                                            <h5>{movie.title}</h5>
                                            <p>{movie.release_date}</p>
                                            <a href={`/movie/${movie.id}`} className="btn btn-warning">More Info</a>
                                        </div>
                                    </div>
                                )) : <p>No results found</p>}
                            </div>
                        </section>
                    )}
                </div>
            </section>
            <footer class="site-footer">
        <p>&copy; 2024 Nithyashree CS. All Rights Reserved.</p>
    </footer>
        </div>
    );
};

export default MoviePage;
