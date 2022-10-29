import React,{Fragment} from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <Fragment>
            <div style={{"marginTop":"70px"}}>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand mr-auto ml-auto" >My Pustak.com &copy; 2022</Link>
            </div>
            </nav>
            </div>
        </Fragment>
    )
}

export default Footer;