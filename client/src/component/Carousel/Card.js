import React,{Fragment} from 'react'
import {Link} from 'react-router-dom';

const Card = () => {
    return (
        <Fragment>
                <div className="row">
                <div className="col-sm-4">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Trending Marathi Books</h5>
                        <p className="card-text">Click here to check out top trending Marathi Books</p>
                        <Link className="btn btn-primary">Check Out</Link>
                    </div>
                    </div>
                </div> 
                <div className="col-sm-4">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Trending English Books</h5>
                        <p className="card-text">Click here to check out top trending  English Books</p>
                        <Link className="btn btn-primary">Check Out</Link>
                    </div>
                    </div>
                </div> 
                <div className="col-sm-4">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Trending Hindi Books</h5>
                        <p className="card-text">Click here to check out top trending Hindi Books</p>
                        <Link  className="btn btn-primary">Check Out</Link>
                    </div>
                    </div>
                </div>
                </div>
        </Fragment>
    )
}

export default Card;