import React from "react";
// import './IntroPage.module.css';

const HeaderApp = ()=>{

    
    function dropDown(){
        document.querySelector('.header__dropdown').classList.toggle('hide');
    }
    console.log(document.querySelectorAll('.header__links')[1]);
    return(
        <div className="container">
            <div className="header__top">

                <div className="header__user-location">
                    Your location: <span>Almaty</span>
                </div>

                <div className="header__author">
                    made by Mukhamedali
                </div>

            </div>
            <div className="header__main">

                <div className="header__logo">Ali-Weather</div>

                <div className="header__nav">
                    <a href="#" className="header__links">About Me</a >

                    <div 
                    className="header__links"
                    onClick={dropDown}
                    >
                        Other Apps <span></span>
                        <div className="header__dropdown hide">
                            <li><a href="#">Todo App</a></li>
                            <li><a href="#" id="soon">Soon...</a></li>
                        </div>
                    </div>

                    <button className="header__button">Sign in</button>

                </div>

            </div>

        </div>
    )
}

export default HeaderApp;