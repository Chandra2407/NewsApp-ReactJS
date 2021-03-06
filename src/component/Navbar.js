import React  from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props)=>{
    return (
 <>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
  <a className="navbar-brand" href="/">News App</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <Link className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/sports">sports</Link>
      </li>
           <li className="nav-item">
        <Link className="nav-link" to="/entertainment">entertainment</Link>
      </li>
           <li className="nav-item">
        <Link className="nav-link" to="/health">health</Link>
      </li>
           <li className="nav-item">
        <Link className="nav-link" to="/science">science</Link>
      </li>
           <li className="nav-item">
        <Link className="nav-link" to="/technology">technology</Link>
      </li>
           <li className="nav-item">
        <Link className="nav-link" to="/business">business</Link>
      </li>
    </ul>
  </div>
</nav>
      
      </>
    )
}
export default Navbar;