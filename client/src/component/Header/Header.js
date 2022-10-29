import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../action/auth';

const Navbar = ({ auth: { isAuthenticated }, logout }) => {
    const style = {
        "textDecoration": "none",
        "color": "green",
        ":hover": {
            "color": "white"
        }
    }
    const authLinks = (
        <Fragment>
            <Link to='/dashboard'><button className="btn btn-primary my-2 my-sm-0" type="submit">All Books</button></Link>&nbsp; &nbsp;
            <Link to='/cart'><button className="btn btn-warning my-2 my-sm-0" type="submit">Cart</button></Link>&nbsp; &nbsp;
            <Link to='/order'><button className="btn btn-success my-2 my-sm-0" type="submit">Orders</button></Link>&nbsp; &nbsp;
            <button onClick={logout} className="btn btn-danger my-2 my-sm-0" type="submit">Logout</button>
        </Fragment>
    )
    const guestLinks = (
        <Fragment>
            <Link to='/login' style={style}><button className="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button></Link> &nbsp; &nbsp;
            <Link to='/register' style={style}><button className="btn btn-outline-info my-2 my-sm-0" type="submit">Register</button></Link>

        </Fragment>
    )
    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom sticky-top  ">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <Link className="navbar-brand" to='/'><img style={{width:"200px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl9eNkhN_Is6ioC2I9wwgFo-XJr4-jAxk04FyAPXtAJDZceAvI6ceYW0xz9CNIHAv0Wg&usqp=CAU" alt="" /></Link>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">

                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
                    </form>
                </div>
            </nav>
        </Fragment>
    )
}

Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);
