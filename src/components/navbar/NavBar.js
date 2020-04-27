import React, { useEffect } from "react";

function NavBar() {


   const navSlide =() => {
        const nav = document.querySelector('.nav-links');
        nav.classList.toggle('nav-active')
        }

    return (
        <div className="nav">
            <a className="title-a" href="/">
                <h4 className="title">

                    Search <i className="fas fa-user-tie"/>This Outfit
                </h4>
            </a>
            <div className="nav-links">
                <a href="#">link1</a>
                <a href="#">link2</a>
                <a href="#">link3</a>
                <a href="#">link4</a>
            </div>
            <div className="burger" onClick={navSlide}>
                <div className="line-1"></div>
                <div className="line-2"></div>
                <div className="line-3"></div>
            </div>

        </div>
    )
}

export default NavBar