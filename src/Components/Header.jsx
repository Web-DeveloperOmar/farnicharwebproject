// import React from 'react'
import '../css/header.css'
import logo from '../assets/logo.svg'
import search from '../assets/search.svg'
import chevrondown from '../assets/chevrondown.svg'
import heart from '../assets/heart.svg'
import addshoppingbag from '../assets/addshoppingbag.svg'

export const Header = () => {
  return (
    <div className="h-Container">
      <div className="nav-bar">
        {/* ---------navbar-Brand Logo  */}
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        {/* ----------navbar-Search bar ---------  */}

        <div className="search-bar">
          <img src={search} alt="searchIcon" />

          <input
            type="search"
            name=""
            id="searchbar"
            placeholder="Search something"
          />
        </div>

        {/* ----------nav menu -------  */}
        <nav>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#" className="down-arrow">
              Shop <img src={chevrondown} alt="down-arrow" />
            </a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
          <li>
            <a href="">About Us</a>
          </li>
        </nav>
      </div>
      <div className="left-tab">
        <li><a href="#"><img src={heart} alt="heart" /> Love</a></li>
        <li><a href="#"><img src={addshoppingbag} alt="addshoppingbagIcon" /> Cart</a></li>
      </div>
    </div>
  );
}
