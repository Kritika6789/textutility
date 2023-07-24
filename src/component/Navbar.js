import React from 'react'
import PropTypes from 'prop-types'
// import { a } from 'react-router-dom';
export default function Navbar(props) {
   const myColor=()=>{
    document.body.style.backgroundColor=document.getElementById("Mycolorpicker").value;

   }
  return (
  
    <div>
       <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-a active mx-3" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          {/* <a className="nav-a" href="#">{props.AboutText}</a> */}
        </li>
        {/* <li className="nav-item dropdown">
          <a className="nav-a dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/" >Capitalize</a></li>
            <li><a className="dropdown-item" href="/">Font Style</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="/">Font Color</a></li>
          </ul>
        </li>
         */}
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary" type="submit">Search</button>
      </form> */}
      <input  name="Mycolor" type="color" id="Mycolorpicker" onClick={myColor}  />
      <div className={`form-check form-switch text-${props.mode==='dark' ? 'light' : 'dark'}`}>
  <input className="form-check-input" onClick={props.toggle}  type="checkbox" id="flexSwitchCheckDefault"  />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >Enable {props.mode} Mode</label>
</div>
    </div>
  </div>
  
</nav>
    </div>
  )
}
Navbar.propTypes={                      //Navbar.propTypes={
    title:PropTypes.string,             //title:PropTypes.string.isRequired (applied when default prop is not applied)
    AboutText: PropTypes.string          // AboutText: PropTypes.string
    }                                     //}

Navbar.defaultProps = {
    title:'Set Default ',
    AboutText:'About Us'
    
}