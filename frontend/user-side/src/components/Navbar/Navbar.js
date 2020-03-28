import React, {useEffect, useRef} from 'react';
import {Navbar as NavBar} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Navbar = ({routes}) => {
    
    useEffect(() => {
        return () => {
            window.removeEventListener('scroll', () => handleScroll)
        }
      }, [])

      //Uses the navbar reference for its class list
      const navbar = useRef(null); 

      //Depending on the offset from the top of the page, sets navbar classes for sticky-ness
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
    
    //Reduces the amount of time the scroll event is called
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
        <NavBar bg="dark" expand="lg" className="ftco_navbar ftco-navbar-light" id="ftco-navbar" ref={navbar}>
            <div className="container-fluid px-md-4	">
                <a className="navbar-brand" href="index.html">Skillhunt</a>
                <NavBar.Toggle data-toggle="collapse" data-target="#ftco-nav"
                        aria-controls="ftco-nav">
                    <span className="oi oi-menu"></span> Menu
                </NavBar.Toggle>

                <NavBar.Collapse id="ftco-nav">
                    <ul className="navbar-nav ml-auto">

                        {routes.map(route => (
                            <li className={route.classes} key={route.key}>
                                <Link className="nav-link" to={route.path}>
                                    {route.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </NavBar.Collapse>
            </div>
        </NavBar>
    )
};

export default Navbar;