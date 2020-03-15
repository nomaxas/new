import React, {useEffect, useRef} from 'react';

const Navbar = () => {
    
    useEffect(() => {
        return () => {
            window.removeEventListener('scroll', () => handleScroll)
        }
      }, [])

      const navbar = useRef(null);

      const handleScroll = () => {

        //sd = $('.js-scroll-wrap');
        const offsetTop = window.pageYOffset;

        if (offsetTop > 150) {
            if ( !navbar.current.classList.contains('scrolled') ) {
            navbar.current.classList.add('scrolled');	
            }
        } 
        if (offsetTop < 150) {
            if ( navbar.current.classList.contains('scrolled') ) {
            navbar.current.classList.remove('scrolled', 'sleep');
            }
        } 
        if (offsetTop > 350 ) {
            if ( !navbar.current.classList.contains('awake') ) {
            navbar.current.classList.add('awake');	
            }
            
            // if(sd.length > 0) {
            // sd.addClass('sleep');
            // }
        }
        if (offsetTop < 350 ) {
            if (navbar.current.classList.contains('awake') ) {
            navbar.current.classList.remove('awake');
            navbar.current.classList.add('sleep');
            }
            // if(sd.length > 0) {
            // sd.removeClass('sleep');
            // }
        }
      }
    

    const debounce = (callback, wait, immediate = false) => {
        let timeout = null 
        
        return function() {
            const callNow = immediate && !timeout
            const next = () => callback.apply(this, arguments)
            
            clearTimeout(timeout)
            timeout = setTimeout(next, wait)
        
            if (callNow) {
            next()
            }
        }
    }
    
    window.addEventListener("scroll", debounce(handleScroll))
    return (
        <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar" ref={navbar}>
            <div className="container-fluid px-md-4	">
                <a className="navbar-brand" href="index.html">Skillhunt</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
                        aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="oi oi-menu"></span> Menu
                </button>

                <div className="collapse navbar-collapse" id="ftco-nav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active"><a href="index.html" className="nav-link">Home</a></li>
                        <li className="nav-item"><a href="browsejobs.html" className="nav-link">Browse Jobs</a></li>
                        <li className="nav-item"><a href="candidates.html" className="nav-link">Canditates</a></li>
                        <li className="nav-item"><a href="blog.html" className="nav-link">Blog</a></li>
                        <li className="nav-item"><a href="contact.html" className="nav-link">Contact</a></li>
                        <li className="nav-item cta mr-md-1"><a href="new-post.html" className="nav-link">Post a Job</a>
                        </li>
                        <li className="nav-item cta cta-colored"><a href="job-post.html" className="nav-link">Want a
                            Job</a></li>

                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;