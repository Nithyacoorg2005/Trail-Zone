import React, { useState, useEffect } from 'react';
import './TvShowPage.css';

const TvShowPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [tvShows, setTvShows] = useState([]);
    const [filteredTvShows, setFilteredTvShows] = useState([]);

    // Fetch TV shows data from TMDB API
    useEffect(() => {
        const fetchTvShows = async () => {
            const apiKey = 'da591fb79761b325c15ddf706240f790';  // Replace with your actual API key
            const url = `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US&page=1`;
            try {
                const response = await fetch(url);
                const data = await response.json();
                setTvShows(data.results);
            } catch (error) {
                console.error("Error fetching TV shows:", error);
            }
        };
        fetchTvShows();
    }, []);

    // Handle search query
    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
        const filtered = tvShows.filter((show) => 
            show.name.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setFilteredTvShows(filtered);
    };

    return (
        <div className="tv-show-page">
            {/* Search Bar */}
            <div className="search-bar">
                <input 
                    type="text"
                    placeholder="Search for TV shows..."
                    value={searchQuery}
                    onChange={handleSearch}
                    className="form-control search-input"
                />
            </div>

            {/* TV Show Categories */}
            <section className="categories py-5">
                <div className="container">
                    <h2 className="text-center mb-4">Browse TV Shows by Genre</h2>

                    <div className="row">
                        {/* Action TV Shows */}
                        <div className="col-md-6">
                            <div className="category-card">
                                <h3>Action TV Shows</h3>
                                <div className="tv-show-grid">
                                    {tvShows.filter(show => show.genre_ids.includes(10759)).map((show) => (
                                        <div className="tv-show-card" key={show.id}>
                                            <img 
                                                src={`https://image.tmdb.org/t/p/w500${show.poster_path}`} 
                                                alt={show.name}
                                                className="img-fluid" 
                                            />
                                            <div className="tv-show-details">
                                                <h5>{show.name}</h5>
                                                <p>{show.first_air_date}</p>
                                                <a href={`/tvshow/${show.id}`} className="btn btn-warning">More Info</a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Drama TV Shows */}
                        <div className="col-md-6">
                            <div className="category-card">
                                <h3>Drama TV Shows</h3>
                                <div className="tv-show-grid">
                                    {tvShows.filter(show => show.genre_ids.includes(18)).map((show) => (
                                        <div className="tv-show-card" key={show.id}>
                                            <img 
                                                src={`https://image.tmdb.org/t/p/w500${show.poster_path}`} 
                                                alt={show.name}
                                                className="img-fluid" 
                                            />
                                            <div className="tv-show-details">
                                                <h5>{show.name}</h5>
                                                <p>{show.first_air_date}</p>
                                                <a href={`/tvshow/${show.id}`} className="btn btn-warning">More Info</a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {/* Romantic TV Shows */}
                        <div className="col-md-6">
                            <div className="category-card">
                                <h3>Romantic TV Shows</h3>
                                <div className="tv-show-grid">
                                    {tvShows.filter(show => show.genre_ids.includes(10749)).map((show) => (
                                        <div className="tv-show-card" key={show.id}>
                                            <img 
                                                src={`https://image.tmdb.org/t/p/w500${show.poster_path}`} 
                                                alt={show.name}
                                                className="img-fluid" 
                                            />
                                            <div className="tv-show-details">
                                                <h5>{show.name}</h5>
                                                <p>{show.first_air_date}</p>
                                                <a href={`/tvshow/${show.id}`} className="btn btn-warning">More Info</a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Horror TV Shows */}
                        <div className="col-md-6">
                            <div className="category-card">
                                <h3>Horror TV Shows</h3>
                                <div className="tv-show-grid">
                                    {tvShows.filter(show => show.genre_ids.includes(27)).map((show) => (
                                        <div className="tv-show-card" key={show.id}>
                                            <img 
                                                src={`https://image.tmdb.org/t/p/w500${show.poster_path}`} 
                                                alt={show.name}
                                                className="img-fluid" 
                                            />
                                            <div className="tv-show-details">
                                                <h5>{show.name}</h5>
                                                <p>{show.first_air_date}</p>
                                                <a href={`/tvshow/${show.id}`} className="btn btn-warning">More Info</a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* If search query is active, display filtered TV shows */}
                    {searchQuery && (
                        <section className="search-results">
                            <h3 className="text-center">Search Results for "{searchQuery}"</h3>
                            <div className="tv-show-grid">
                                {filteredTvShows.length > 0 ? filteredTvShows.map((show) => (
                                    <div className="tv-show-card" key={show.id}>
                                        <img 
                                            src={`https://image.tmdb.org/t/p/w500${show.poster_path}`} 
                                            alt={show.name}
                                            className="img-fluid" 
                                        />
                                        <div className="tv-show-details">
                                            <h5>{show.name}</h5>
                                            <p>{show.first_air_date}</p>
                                            <a href={`/tvshow/${show.id}`} className="btn btn-warning">More Info</a>
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

export default TvShowPage;
