import React from "react"

function Navbar()  {
    return (
        <div className="navigator">
            <nav class="navbar navbar-expand-lg navbar-light bg-light pt-0 pb-0">
                <a class="navbar-brand text-white font-weight-bold p-3 ml-5" href="#">Kayla Ward</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
                    aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
                <a className="navbar-brand mx-auto" href="#" target="_blank">Resume</a>
                <a className="navbar-brand mx-auto" href="https://www.linkedin.com/in/kaylaw0127/">LinkedIn</a>
                <a className="navbar-brand mx-auto" href="https://github.com/Kaylaw0127">Github</a>
            <div className="collapse navbar-collapse" id="navbarNav">

            <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#portfolio">Portfolio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#contact">Contact</a>
                </li>

                    </ul>
                </div>
            </nav>
    </div> 
    )
} 

export default Navbar