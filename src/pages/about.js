
import image from '../assets/images/about-thumb.jpg';

function AboutPage() {
    return (
        <div className="about-page-container">
            <div className="about-page-header">
                <div className="about-page-header-left">
                    <img src={image} alt="about page header" width='250px' height='400px' />

                    <div className="about-page-header-left-info">
                        <p className='about-page-info-item'>
                            <i className="bi bi-telephone"></i>
                            :   555-555-5555
                        </p>
                        <p className='about-page-info-item'>
                            <i className="bi bi-globe-americas"></i>
                            :   1234 Main St. City, State 12345
                        </p>
                        <a href='mailto:hammer@hammertime.org' className='about-email-link'>
                            <i className="bi bi-envelope-at"></i>
                            :   hammer@hammertime.org
                        </a>
                    </div>
                </div>

                <div className='about-page-header-info'>
                    <div className='header-title-wrapper'>
                        <h1 className='header-name'>Hammer</h1>
                        <h2 className='header-role'>Web Developer</h2>
                    </div>

                    <div className='about-blurb-wrapper'>
                        <p className='about-blurb'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                            Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                            Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                            Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                            Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                            Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                        </p>
                    </div>
                </div>
            </div>

            <div className="about-page-socials">
                <a className='about-social-link' target='_blank' href="www.example.com">
                    <i className="bi bi-facebook"></i>
                </a>
                <a className='about-social-link' target='_blank' href="www.example.com">
                    <i className="bi bi-instagram"></i>
                </a>
                <a className='about-social-link' target='_blank' href="www.example.com">
                    <i className="bi bi-twitter"></i>
                </a>
                <a className='about-social-link' target='_blank' href="www.example.com">
                    <i className="bi bi-linkedin"></i>
                </a>
                <a className='about-social-link' target='_blank' href="www.example.com">
                    <i className="bi bi-github"></i>
                </a>
                <a className='about-social-link' target='_blank' href="www.example.com">
                    <i className="bi bi-youtube"></i>
                </a>
            </div>
        </div>
    );
}

export default AboutPage;