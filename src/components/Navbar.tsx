import React from 'react';
// import { Link } from 'react-router-dom';

// ham jis cheezo ko change krna chahte hai wo wo cheeze yaha likh lenge paranthesis mai.or niche b usko paranthesis mai likhenge to wo props ban jaingi.or uski default value b yaha likhenge.ye jo string mai likha hua hai ye default value hai props ki.
const Navbar = ({ title = 'Default title', mode, darkMode, GreenishMode }: Props) => {
  return (
    <>
      <nav className={`navbar navbar-expand-lg ${mode==="dark"?'navbar-dark': mode==='Green'?'navbar-dark': 'navbar-light'}`} style= {{backgroundColor: mode==='dark'?'#27263d': mode==='Green'?'#297714': '#f8f9fa'}}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">{title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="#">Home</a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="/About">About Us</a>
              </li> */}
            </ul>
            {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>  */}
            <div className={`form-check form-switch text-${mode==='light'?'dark':'light'}`}>
              <input className="form-check-input" onClick={darkMode} type="checkbox" role="switch" id="switchCheckDefault"/>
                <label className="form-check-label" htmlFor="switchCheckDefault">Enable Dark Mode</label>
            </div>
            <div className={`form-check form-switch text-${mode==='light'?'Green':'light'}`}>
              <input className="form-check-input" style={{marginLeft: '2px'}} onClick={GreenishMode } type="checkbox" role="switch" id="switchCheckDefault"/>
                <label className="form-check-label" htmlFor="switchCheckDefault">Greenish Dark Mode</label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

// jin jin cheezo ko ham ne props bnaya hai unke data types ham yaha likhenge.takay code debug rhe.
interface Props {
  title: string;
  mode: string;
  darkMode: () => void;
  GreenishMode: () => void;
}
// isse ham check krte hai ke hamara title ka type string hai agr number hua ya array hua to terminal ke problem mai error mil jayega.pehle proptype use hota ta lekin abi typescript use hota hai isko typescript bolte hai.

// ham navbar ka color b change kr skte hai.pehli line se.ham button ke color b change kr skte hai.bootstrap website pr jakar.docs mai component mai button pr jainge to waha se view krke ham button ka color change kr skte hai.


