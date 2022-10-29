import React from 'react'
import AllProducts from '../Products/AllProducts';

const Dashboard = () => {
    return (
        <div>
            <h1 style={{ marginLeft: "10px", fontFamily: "Bad Script,cursive", color: "white", textShadow: "2px 2px 2px crimson" }}>Where the stories never run out...!</h1>
            <AllProducts />
        </div>
    )
}

export default Dashboard;