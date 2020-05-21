import React from "react";
import styled from "styled-components";


const NavBarStyle = styled.div`
  .nav {
    background: rgb(111, 110, 110);
    background: linear-gradient(180deg, rgb(172, 167, 167) 0%, rgba(220, 217, 217, 0.35) 100%);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    height: 8vh;
    align-items: center;
    z-index: 100;
    justify-content: space-between;
}



.nav a {
    text-decoration: none;
    color: white;

}

.title-a {
    position: relative;
    left: 5%;
}

.nav h4 {
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
    align-content: center;
    font-size: 1.5rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    width: 120px;
}

@media screen and (max-height: 650px) {
    .nav h4 {
        font-size: 1rem;
    }
}

.nav-links {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 35%;
}

.nav-links a {
    display: flex;
    justify-content: center;
    align-content: center;
    font-weight: bold;
    font-size: 1.5rem;
    margin-right: 5rem;
}

.nav-links a:hover {
    background-color: rgba(220, 217, 217, 0.35);
}

.burger {
    position: absolute;
    right: 6%;
    display: none;
}

.burger div {
    width: 25px;
    height: 5px;
    margin: 5px;
    background-color: white;
}


@media screen and (max-width: 1024px) {
    body {
        overflow-x: hidden;
    }

    .nav-links {
        position: fixed;
        right: -250px;
        height: 92vh;
        top: 8vh;
        background-color: rgba(220, 217, 217, 0.5);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        padding-bottom: 50vh;
        transition: right 0.5s ease-in-out, opacity 0.4s ease 0.2s;
        width: 250px;
        opacity: 0;
    }

    .burger {
        display: block;
        cursor: pointer;
    }
}

.nav-active {
    opacity: 1;
    right: 0;
}

`;


function NavBar() {


    const navSlide = () => {
        const nav = document.querySelector('.nav-links');
        nav.classList.toggle('nav-active')

    }

    return (
        <NavBarStyle>
            <div className="nav" data-testid="navbar">
                <a className="title-a" href="/">
                    <h4 className="title">

                        Search <i className="fas fa-user-tie"/>This Outfit
                    </h4>
                </a>
                <div className="nav-links">
                    <a href="/">link1</a>
                    <a href="/">link2</a>
                    <a href="/">link3</a>
                    <a href="/">link4</a>
                </div>
                <div className="burger" onClick={navSlide}>
                    <div className="line-1"></div>
                    <div className="line-2"></div>
                    <div className="line-3"></div>
                </div>
            </div>
        </NavBarStyle>
    )
}

export default NavBar