import React from "react"
import './style.css'

function Navbar()  {
    return (
        <div id="navbar" className="nav">
            <nav class="navbar navbar-expand-lg navbar-light bg-light pt-0 pb-0">
                <a class="navbar-brand text-white font-weight-bold p-3 ml-5" href="#">Kayla Ward</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
                    aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
                <a className="navbar-brand mx-auto" href="#" target="_blank">Resume</a>
                <a className="navbar-brand mx-auto" href="https://www.linkedin.com/in/kaylaw0127/">LinkedIn</a>
                <a className="navbar-brand mx-auto" href="https://github.com/Kaylaw0127">Github</a>
           
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav mr-auto ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="index.html">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="portfolio.html">Portfolio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="contact.html">Contact</a>
          </li>
        </ul>
      </div>
            </nav>
    </div> 
    )
} 

export default Navbar