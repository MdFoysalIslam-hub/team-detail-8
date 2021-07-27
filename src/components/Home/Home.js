import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import '../Cart/Cart.css';

const Home = () => {
const [teams, setTeam] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data =>setTeam(data) )
    },[])
    return (
        <div className="home-cart">
            this is home {teams.length}
            {
                teams.map(team=> <div className="cart-style"><Cart team={team}></Cart></div>)
            }
        </div>
    );
};

export default Home;