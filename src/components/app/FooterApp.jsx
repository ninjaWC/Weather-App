import React from "react";

const FooterApp = ()=>{
    
    return(
        <div className="container">
            <div className="footer__inner">
                <div className="footer__contacts">
                    
                    <div className="footer__title title">
                        Contacts
                    </div>

                    <div className="footer__block">
                        <div className="footer__links">
                            <div className="footer__icon email"></div>
                            e-mail: <a href="mailto:alimanberdiyev@gmail.com">alimanberdiyev@gmail.com</a>
                        </div>
                        <div className="footer__links">
                            <div className="footer__icon phone"></div>
                            phone: <a href="callto">+7(777)018-13-30</a>
                        </div>
                        <div className="footer__links">
                            <div className="footer__icon telegram"></div>
                            telegram: <a target="_blank" href="https://t.me/Alimanberdiyev">@Alimanberdiyev</a>
                        </div>
                    </div>

                </div>
                <div className="footer__works">

                    <div className="footer__title title">
                        Works
                    </div>

                    <div className="footer__block">
                        <div className="footer__links">
                            <a href="https://ninjawc.github.io/alitodo/">Todo App</a>
                        </div>
                        <div className="footer__links">
                            <a href="#">Soon...</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default FooterApp;