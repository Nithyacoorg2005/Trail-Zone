import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            {/* Hero Section */}
            <div className="hero-section">
                <video autoPlay loop muted className="bg-video">
                    <source src="https://videos.pexels.com/video-files/8263452/8263452-uhd_2732_1440_25fps.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="hero-content">
                    <h1>Welcome to TrailZone</h1>
                    <p>Your Ultimate Destination for Movie Trailers</p>
                    <a href="/trailers" className="btn btn-warning btn-lg">Watch Trailers</a>
                </div>
            </div>

            {/* Featured Trailers Section */}
            <section className="featured-trailers py-5">
                <div className="container">
                    <h2 className="text-center mb-4">Featured Trailers</h2>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                <img src="https://images.hdqwalls.com/download/matthew-mcconaughey-in-interstellar-movie-1280x1024.jpg" className="card-img-top" alt="Trailer 1" />
                                <div className="card-body">
                                    <h5 className="card-title">Interstellar</h5>
                                    <p className="card-text">Watch the latest trailer of Interstellar</p>
                                    <a href="/trailer/1" className="btn btn-outline-warning">Watch Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <img src="https://c4.wallpaperflare.com/wallpaper/126/346/336/the-texas-chain-saw-massacre-tobe-hooper-film-posters-movie-poster-wallpaper-preview.jpg" className="card-img-top" alt="Trailer 2" />
                                <div className="card-body">
                                    <h5 className="card-title">Texas Chainsaw Massacre</h5>
                                    <p className="card-text">Don't miss the new teaser of Texas Chainsaw Massacre.</p>
                                    <a href="/trailer/2" className="btn btn-outline-warning">Watch Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <img src="https://wallpapercave.com/wp/wp7719581.jpg" className="card-img-top" alt="Trailer 3" />
                                <div className="card-body">
                                    <h5 className="card-title">Rings</h5>
                                    <p className="card-text">Catch the first look of Rings.</p>
                                    <a href="/trailer/3" className="btn btn-outline-warning">Watch Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <img src="https://wallpapercave.com/wp/wp7719581.jpg" className="card-img-top" alt="Trailer 3" />
                                <div className="card-body">
                                    <h5 className="card-title">Rings</h5>
                                    <p className="card-text">Catch the first look of Rings.</p>
                                    <a href="/trailer/3" className="btn btn-outline-warning">Watch Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <img src="https://wallpapercave.com/wp/wp7719581.jpg" className="card-img-top" alt="Trailer 3" />
                                <div className="card-body">
                                    <h5 className="card-title">Rings</h5>
                                    <p className="card-text">Catch the first look of Rings.</p>
                                    <a href="/trailer/3" className="btn btn-outline-warning">Watch Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <img src="https://wallpapercave.com/wp/wp7719581.jpg" className="card-img-top" alt="Trailer 3" />
                                <div className="card-body">
                                    <h5 className="card-title">Rings</h5>
                                    <p className="card-text">Catch the first look of Rings.</p>
                                    <a href="/trailer/3" className="btn btn-outline-warning">Watch Now</a>
                                </div>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </section>

            {/* Why TrailZone Section */}
            <section className="why-trailzone py-5">
                <div className="container">
                    <h2 className="text-center mb-4">Why Choose TrailZone?</h2>
                    <div className="row text-center">
                        <div className="col-md-4">
                            <div className="why-card">
                                <img style={{height:"200px"}} src="https://cdn-icons-png.flaticon.com/512/1588/1588972.png" alt="Exclusive Content" className="why-icon"/>
                                <h4>Exclusive Content</h4>
                                <p>Get access to the latest trailers and sneak peeks before anyone else.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="why-card">
                                <img style={{height:"200px"}} src="https://cdn-icons-png.flaticon.com/512/486/486087.png" alt="Instant Updates" className="why-icon"/>
                                <h4>Instant Updates</h4>
                                <p>Stay updated with real-time notifications about upcoming releases.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="why-card">
                                <img style={{height:"200px"}} src="https://cdn-icons-png.flaticon.com/512/889/889140.png" alt="Community" className="why-icon"/>
                                <h4>Join a Community</h4>
                                <p>Connect with movie lovers and discuss your favorite trailers.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section className="categories-section py-5">
                <div className="container">
                    <h2 className="text-center mb-4">Browse by Categories</h2>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="category-card">
                                <img src="https://static1.moviewebimages.com/wordpress/wp-content/uploads/2022/11/Best-Action-Movies-(1).jpg" className="img-fluid" alt="Action Movies" />
                                <div className="category-content">
                                    <h3>Action Movies</h3>
                                    <a href="/category/action" className="btn btn-outline-light">Explore Action</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="category-card">
                                <img src="https://th.bing.com/th/id/R.90f12781d2d491210b3a594855a36a6f?rik=fWAIADjgGlNEgg&riu=http%3a%2f%2f1.bp.blogspot.com%2f-pAnPMtJzZlo%2fUzslxdCWIXI%2fAAAAAAAA1kU%2f8veomTbSooA%2fw1200-h630-p-k-no-nu%2fmidsomer%2bmurders%2b100th%2bepisode.jpg&ehk=pX1odfrV0C6IWunjsA57j3z1aC%2f8KIoKhvuctBCPCnw%3d&risl=&pid=ImgRaw&r=0" className="img-fluid" alt="Drama Movies" />
                                <div className="category-content">
                                    <h3>Drama Movies</h3>
                                    <a href="/category/drama" className="btn btn-outline-light">Explore Drama</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer class="site-footer">
        <p>&copy; 2024 Nithyashree CS. All Rights Reserved.</p>
    </footer>
        </div>
       
    );
};

export default Home;













