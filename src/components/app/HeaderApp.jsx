import React, { useRef } from "react";
// import './IntroPage.module.css';

const HeaderApp = ()=>{

    let headerNav = useRef(null);
    let headerBurger = useRef(null);

    let location = localStorage.getItem('city');
    function dropDown(){
        document.querySelector('.header__dropdown').classList.toggle('hide');
        document.querySelectorAll('.header__links')[1].classList.toggle('header__links-active');
    }

    function openBurger(){
        headerBurger.current.classList.toggle('open');
        headerNav.current.classList.toggle('header__nav--show');
    }
    
    return(
        <div className="container">

            <div className="header__top">

                <div className="header__user-location">
                    Your location: 
                    {
                        !location 
                        ? <span> not found</span>
                        : <span> {location} </span> 
                    }
                </div>

                <div className="header__author">
                    made by Mukhamedali
                </div>

            </div>
            <div className="header__main">

                <div className="header__logo">Ali-Weather</div>

                <div ref={headerNav} className="header__nav">
                    <a href="#" className="header__links">About Me</a >

                    <div 
                    className="header__links"
                    onClick={dropDown}
                    >
                        Other Apps <span></span>
                        <div className="header__dropdown hide">
                            <li><a href="https://ninjawc.github.io/alitodo/">Todo App</a></li>
                            <li><a href="#" id="soon">Soon...</a></li>
                        </div>
                    </div>

                    <button className="header__button">Sign in</button>

                </div>
                <div 
                    className="header__burger"
                    onClick={openBurger}
                    ref={headerBurger}
                    >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

        </div>
    )
}

export default HeaderApp;