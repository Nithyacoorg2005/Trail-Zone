import React from 'react';
import './ContactPage.css';

const ContactPage = () => {
    return (
        <div className="contact-container">
          
            <div className="contact-hero">
                <h1>Contact Us</h1>
                <p style={{paddingLeft:"30px"}}>We'd love to hear from you! Get in touch with us for any inquiries, feedback, or suggestions.</p>
            </div>

    
            <section className="contact-form-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 contact-info">
                            <h2>Get In Touch</h2>
                            <p>Email: nithyatrailzone.com</p>
                            <p>Phone: +91 123456789</p>
                            <p>Address:Bengaluru,Karnataka </p>
                            
                            <h3>Find Us Here</h3>
                            <iframe
                                title="location-map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345084957!2d144.95373631531913!3d-37.8172099797517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5778d0d3df5f3db!2sHollywood!5e0!3m2!1sen!2sus!4v1632933893651!5m2!1sen!2sus"
                                width="100%"
                                height="250"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>

                        <div className="col-md-6">
                            <h2>Drop Us a Message</h2>
                            <form className="contact-form">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" className="form-control" placeholder="Your Name" />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" className="form-control" placeholder="Your Email" />
                                </div>
                                <div className="form-group">
                                    <label>Message</label>
                                    <textarea className="form-control" rows="4" placeholder="Your Message"></textarea>
                                </div>
                                <button type="submit" className="btn btn-warning btn-lg">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section className="media-section py-5">
                <div className="container">
                    <h2 className="text-center mb-4">Get a Glimpse of TrailZone</h2>
                    <div className="row">
                        <div className="col-md-6">
                            <video controls autoPlay muted className="contact-video">
                                <source  src="https://videos.pexels.com/video-files/7989385/7989385-uhd_2732_1440_25fps.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className="col-md-6">
                            <img style={{height:"336px"}} src="https://images.pexels.com/photos/7991239/pexels-photo-7991239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="img-fluid" alt="Our Office" />
                        </div>
                    </div>
                </div>
            </section>

         
            <section className="social-media-section py-5">
                <div className="container text-center">
                    <h2>Connect with Us</h2>
                    <div className="social-icons">
                        <a href="https://facebook.com" className="social-icon facebook"></a>
                        <a href="https://twitter.com" className="social-icon twitter"></a>
                        <a href="https://instagram.com" className="social-icon instagram"></a>
                    </div>
                </div>
            </section>
            <footer class="site-footer">
        <p>&copy; 2024 Nithyashree CS. All Rights Reserved.</p>
    </footer>
        </div>
    );
};

export default ContactPage;
